/*
  # Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text, required) - Name of the person submitting the form
      - `email` (text, required) - Email address for followup
      - `subject` (text, required) - Subject of the inquiry
      - `message` (text, required) - Detailed message from the user
      - `status` (text, default 'new') - Status of the submission (new, in_progress, resolved)
      - `created_at` (timestamptz, default now()) - When the submission was created
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy to allow anyone (authenticated and anonymous) to insert submissions
    - Add policy for admin users to read all submissions (future enhancement)

  3. Indexes
    - Add index on created_at for efficient querying by date
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit contact forms
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create index for efficient date-based queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
  ON contact_submissions(created_at DESC);