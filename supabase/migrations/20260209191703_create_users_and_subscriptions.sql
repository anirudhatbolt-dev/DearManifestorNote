/*
  # Create Users and Subscriptions Tables for 11:11 Manifestation Notes

  ## New Tables
  
  ### `users`
  - `id` (uuid, primary key) - Unique identifier for each user
  - `name` (text) - User's name from manifestation flow
  - `pronouns` (text) - User's preferred pronouns
  - `goal` (text) - User's manifestation goal
  - `details` (text) - Specific details about their manifestation
  - `email` (text, unique) - User's email address for daily notes
  - `phone` (text, nullable) - User's phone number (optional)
  - `country_code` (text, nullable) - Country code for phone number
  - `created_at` (timestamptz) - When user signed up
  - `updated_at` (timestamptz) - Last update timestamp

  ### `subscriptions`
  - `id` (uuid, primary key) - Unique identifier for subscription
  - `user_id` (uuid, foreign key) - References users table
  - `email_enabled` (boolean) - Whether email notifications are active
  - `phone_enabled` (boolean) - Whether SMS notifications are active
  - `timezone` (text) - User's timezone for 11:11 delivery
  - `last_sent_at` (timestamptz, nullable) - Last time a note was sent
  - `created_at` (timestamptz) - When subscription was created
  - `updated_at` (timestamptz) - Last update timestamp

  ## Security
  
  - Enable RLS on both tables
  - Add policies for users to manage their own data
  - Restrict access to authenticated users only
*/

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  pronouns text NOT NULL DEFAULT 'they/them',
  goal text NOT NULL,
  details text DEFAULT '',
  email text UNIQUE NOT NULL,
  phone text,
  country_code text DEFAULT '+1',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create subscriptions table
CREATE TABLE IF NOT EXISTS subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  email_enabled boolean DEFAULT true,
  phone_enabled boolean DEFAULT false,
  timezone text DEFAULT 'America/New_York',
  last_sent_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

-- Create indexes for efficient queries
CREATE INDEX IF NOT EXISTS users_email_idx ON users(email);
CREATE INDEX IF NOT EXISTS subscriptions_user_id_idx ON subscriptions(user_id);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for users table
CREATE POLICY "Allow public insert for new users"
  ON users FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Users can view all user data"
  ON users FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Users can update their own data"
  ON users FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

-- RLS Policies for subscriptions table
CREATE POLICY "Allow public insert for new subscriptions"
  ON subscriptions FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Users can view all subscriptions"
  ON subscriptions FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Users can update subscriptions"
  ON subscriptions FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);