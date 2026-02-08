import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, pronouns, goal, details } = await req.json();

    console.log("Received request:", { name, pronouns, goal, details });

    // Step 1: Call Claude API
    console.log("Calling Claude API...");
    const systemPrompt = `You are a manifestation note writer for DearManifestor. Your role is to write deeply personalised, daily manifestation notes that help users persist in their desires.

CRITICAL FORMATTING RULES:
- Maximum 60 words (excluding greeting)
- Maximum 310 characters total (excluding greeting)
- Use <br><br> for line breaks (this is for HTML rendering)
- Never use \\n or regular line breaks

WRITING STYLE:
- Warm, certain, and empowering
- Use "you are already" language (not "you will be")
- Reference specific details the user provides (names, places, objects, pets, partners)
- Write in present tense as if their manifestation is already done
- Use manifestation community language: 4D, 3D, "living in the end," "persist," "embody"

STRUCTURE (ALWAYS follow this exact format):
1. "Dear [Name],"
2. One <br><br> after greeting
3. Body: 2-3 short sentences painting their manifestation as already real, using specific details
4. One <br><br>
5. "Feel into [pronoun] [today/this morning/right now]." Then list 3 qualities separated by periods: "[Pronoun] is [quality]. [Pronoun] is [quality]. [Pronoun] is [quality]."
6. One <br><br>
7. "That's who you are."

EXAMPLE OUTPUT FORMAT:
Dear Anna,<br><br>You are already the woman in that Brooklyn loft with floor-to-ceiling windows. Max is at your feet. James is making coffee. Your agency just signed its biggest client.<br><br>Feel into her this morning. She is grateful. She is loved. She is living the life she always knew was hers.<br><br>That's who you are.

LENGTH CHECK: Count your words carefully. If over 60 words, make sentences more concise. If over 310 characters, trim adjectives and use shorter phrases.

TONE: Confident and certain, never wishy-washy. This IS their reality.`;

    const userPrompt = `Create a manifestation note for ${name} (pronouns: ${pronouns}).
Their manifestation goal: ${goal}
Additional details: ${details}

Remember to use <br><br> for line breaks and keep it under 60 words and 310 characters.`;

    const claudeResponse = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": Deno.env.get("ANTHROPIC_API_KEY") || "",
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1024,
        system: systemPrompt,
        messages: [
          {
            role: "user",
            content: userPrompt,
          },
        ],
      }),
    });

    if (!claudeResponse.ok) {
      const error = await claudeResponse.text();
      console.error("Claude API error:", error);
      throw new Error(`Claude API failed: ${error}`);
    }

    const claudeData = await claudeResponse.json();
    const message = claudeData.content[0].text;
    console.log("Claude generated message:", message);

    // Step 2: Call Placid API
    console.log("Calling Placid API...");
    const placidResponse = await fetch(
      "https://api.placid.app/api/rest/images",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${Deno.env.get("PLACID_API_KEY")}`,
        },
        body: JSON.stringify({
          template_uuid: Deno.env.get("PLACID_TEMPLATE_ID") || "",
          create_now: true, // Process instantly instead of queueing
          layers: {
            Name: {
              text: name,
            },
            Content: {
              text: message,
            },
          },
        }),
      }
    );

    if (!placidResponse.ok) {
      const error = await placidResponse.text();
      console.error("Placid API error:", error);
      throw new Error(`Placid API failed: ${error}`);
    }

    const placidData = await placidResponse.json();
    console.log("Placid response:", placidData);

    // Get image URL (either immediately or poll if needed)
    let imageUrl = placidData.image_url;
    const imageId = placidData.id;
    const pollingUrl = placidData.polling_url;

    // If image_url is null, poll the polling_url
    if (!imageUrl && pollingUrl) {
      console.log("Image still processing, polling for completion...");
      
      // Poll up to 60 seconds (60 attempts, 1 second apart)
      for (let i = 0; i < 60; i++) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        const statusResponse = await fetch(pollingUrl, {
          headers: {
            "Authorization": `Bearer ${Deno.env.get("PLACID_API_KEY")}`,
          },
        });

        if (!statusResponse.ok) {
          console.error("Polling failed:", await statusResponse.text());
          continue;
        }

        const statusData = await statusResponse.json();
        console.log(`Poll attempt ${i + 1}: status = ${statusData.status}`);
        
        if (statusData.status === "finished" && statusData.image_url) {
          imageUrl = statusData.image_url;
          console.log("Image ready:", imageUrl);
          break;
        } else if (statusData.status === "error") {
          throw new Error("Placid image generation failed");
        }
      }
    }

    if (!imageUrl) {
      throw new Error("Image generation timed out after 60 seconds");
    }

    // Step 3: Download image from Placid
    console.log("Downloading image from Placid...");
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      throw new Error("Failed to download image from Placid");
    }
    const imageBlob = await imageResponse.arrayBuffer();

    // Step 4: Upload to Supabase Storage
    console.log("Uploading to Supabase Storage...");
    const supabase = createClient(
      Deno.env.get("SUPA_URL") || "",
      Deno.env.get("SUPA_SERVICE_ROLE_KEY") || ""
    );

    const fileName = `${Date.now()}-${name.replace(/\s+/g, "-").toLowerCase()}.png`;
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("manifestation-notes")
      .upload(fileName, imageBlob, {
        contentType: "image/png",
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      console.error("Upload error:", uploadError);
      throw uploadError;
    }

    // Step 5: Get public URL
    const { data: urlData } = supabase.storage
      .from("manifestation-notes")
      .getPublicUrl(fileName);

    console.log("Upload successful:", urlData.publicUrl);

    return new Response(
      JSON.stringify({
        success: true,
        message,
        imageUrl: urlData.publicUrl,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error in generate-note function:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "Unknown error occurred",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});