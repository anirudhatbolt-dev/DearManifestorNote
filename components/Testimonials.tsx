"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Testimonial {
  imagePath: string;
  quote: string;
  author: string;
}

const testimonialsDesktop: Testimonial[] = [
  {
    imagePath: "/i_got_the_promotion_i'd_been_affirming_for._the_interview_felt_easy_because_i_already_was_her._—_sarah_(1).png",
    quote: "The apartment I got looks EXACTLY like what I visualized. Even down to the natural light.",
    author: "Lisa"
  },
  {
    imagePath: "/emma_(1).png",
    quote: "I have manifested unexpected income within a month of starting these notes. Still in shock.",
    author: "Maya"
  },
  {
    imagePath: "/hannah copy.png",
    quote: "I used to wake up anxious and insecure. Now I wake up to a reminder of who I really am.",
    author: "Hannah"
  },
  {
    imagePath: "/i_got_the_promotion_i'd_been_affirming_for._the_interview_felt_easy_because_i_already_was_her._—_sarah.png",
    quote: "I got the promotion I'd been affirming for. The interview felt easy because I already WAS her.",
    author: "Sarah"
  },
  {
    imagePath: "/emma.png",
    quote: "These notes kept me in the right state when I was spiralling. He came back after 3 weeks.",
    author: "Emma"
  },
  {
    imagePath: "/mia.png",
    quote: "I quit my toxic 9-5 and now work from home. I wake up when I want, travel when I want. It's surreal.",
    author: "Mia"
  },
  {
    imagePath: "/sienna.png",
    quote: "He came back after 5 weeks of no contact. Apologised for everything. We're better than ever.",
    author: "Sienna"
  },
  {
    imagePath: "/zoya_(1).png",
    quote: "I finally look in the mirror and love what I see. My skin cleared up, I lost 15 pounds, and I feel sexy again.",
    author: "Zoya"
  },
  {
    imagePath: "/mia_(1).png",
    quote: "My hair grew 4 inches in 2 months, my acne cleared, and I dropped a dress size. People say I look completely different.",
    author: "Jade"
  },
  {
    imagePath: "/ruby.png",
    quote: "The sex life I always fantasised about is now my reality. He's attentive, passionate, and knows exactly what I need.",
    author: "Ruby"
  }
];

const testimonialsMobile: Testimonial[] = [
  {
    imagePath: "/i_got_the_promotion_i'd_been_affirming_for._the_interview_felt_easy_because_i_already_was_her._—_sarah.png",
    quote: "I got the promotion I'd been affirming for. The interview felt easy because I already WAS her.",
    author: "Sarah"
  },
  {
    imagePath: "/i_got_the_promotion_i'd_been_affirming_for._the_interview_felt_easy_because_i_already_was_her._—_sarah_(1).png",
    quote: "The apartment I got looks EXACTLY like what I visualized. Even down to the natural light.",
    author: "Lisa"
  },
  {
    imagePath: "/emma.png",
    quote: "These notes kept me in the right state when I was spiralling. He came back after 3 weeks.",
    author: "Emma"
  },
  {
    imagePath: "/emma_(1).png",
    quote: "I have manifested unexpected income within a month of starting these notes. Still in shock.",
    author: "Maya"
  },
  {
    imagePath: "/hannah copy.png",
    quote: "I used to wake up anxious and insecure. Now I wake up to a reminder of who I really am.",
    author: "Hannah"
  },
  {
    imagePath: "/zoya_(1).png",
    quote: "I finally look in the mirror and love what I see. My skin cleared up, I lost 15 pounds, and I feel sexy again.",
    author: "Zoya"
  },
  {
    imagePath: "/mia.png",
    quote: "I quit my toxic 9-5 and now work from home. I wake up when I want, travel when I want. It's surreal.",
    author: "Mia"
  },
  {
    imagePath: "/mia_(1).png",
    quote: "My hair grew 4 inches in 2 months, my acne cleared, and I dropped a dress size. People say I look completely different.",
    author: "Jade"
  },
  {
    imagePath: "/sienna.png",
    quote: "He came back after 5 weeks of no contact. Apologised for everything. We're better than ever.",
    author: "Sienna"
  },
  {
    imagePath: "/ruby.png",
    quote: "The sex life I always fantasised about is now my reality. He's attentive, passionate, and knows exactly what I need.",
    author: "Ruby"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-[#D5CCC4] rounded-2xl overflow-hidden">
      <div className="relative w-full aspect-square">
        <Image
          src={testimonial.imagePath}
          alt={testimonial.author}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <p className="text-[#3D3331] text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed mb-4">
          {testimonial.quote}
        </p>
        <p className="text-[#3D3331] text-base sm:text-lg md:text-xl lg:text-xl font-medium">— {testimonial.author}</p>
      </div>
    </div>
  );
};

export default function Testimonials() {
  const column1 = testimonialsDesktop.slice(0, 3);
  const column2 = testimonialsDesktop.slice(3, 7);
  const column3 = testimonialsDesktop.slice(7, 10);

  return (
    <section className="bg-[#E5DDD5] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout - 3 Columns */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {/* Column 1 - 3 cards */}
          <div className="flex flex-col gap-6">
            {column1.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>

          {/* Column 2 - 4 cards, starts higher */}
          <div className="flex flex-col gap-6 -mt-12">
            {column2.map((testimonial, index) => (
              <TestimonialCard key={index + 3} testimonial={testimonial} />
            ))}
          </div>

          {/* Column 3 - 3 cards */}
          <div className="flex flex-col gap-6">
            {column3.map((testimonial, index) => (
              <TestimonialCard key={index + 7} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Mobile Layout - Single Column */}
        <div className="flex flex-col gap-6 lg:hidden">
          {testimonialsMobile.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center justify-center mt-12 lg:mt-16">
          <Link
            href="/try/name"
            className="rounded-full px-8 py-3 lg:px-12 lg:py-4 text-white font-medium text-base lg:text-lg flex items-center gap-2 lg:gap-3 hover:opacity-90 transition-opacity font-[family-name:var(--font-poppins)]"
            style={{ backgroundColor: '#3D3331' }}
          >
            Get Your First Note — FREE
            <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
          </Link>
          <p
            className="text-xs lg:text-sm mt-3 lg:mt-4 text-center"
            style={{ color: '#3D3331' }}
          >
            No signup required | No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
