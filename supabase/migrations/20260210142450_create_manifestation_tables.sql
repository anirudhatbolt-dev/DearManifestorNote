/*
  # Create Manifestation App Tables

  ## New Tables
  
  ### `user_profiles`
  - `id` (uuid, primary key) - Links to auth.users
  - `name` (text) - User's name
  - `pronouns` (text) - User's preferred pronouns
  - `email` (text) - User's email address
  - `phone` (text, nullable) - User's phone number
  - `country_code` (text, nullable) - Country code for phone
  - `created_at` (timestamptz) - When profile was created
  - `updated_at` (timestamptz) - Last update timestamp

  ### `user_goals`
  - `id` (uuid, primary key) - Unique identifier
  - `user_id` (uuid, foreign key) - References user_profiles
  - `goal` (text) - User's manifestation goal
  - `details` (text) - Specific details about manifestation
  - `additional_manifestation` (text, nullable) - Additional manifestation text
  - `more` (text, nullable) - More field from form
  - `is_active` (boolean) - Whether this goal is currently active
  - `created_at` (timestamptz) - When goal was created

  ### `daily_notes`
  - `id` (uuid, primary key) - Unique identifier
  - `user_id` (uuid, foreign key) - References user_profiles
  - `goal_id` (uuid, foreign key) - References user_goals
  - `message_text` (text) - The manifestation message
  - `image_url` (text) - URL to the generated image
  - `template_id` (integer) - Template identifier
  - `created_at` (timestamptz) - When note was created

  ### `user_preferences`
  - `id` (uuid, primary key) - Unique identifier
  - `user_id` (uuid, foreign key) - References user_profiles
  - `delivery_time` (time) - Time to deliver daily notes
  - `timezone` (text) - User's timezone
  - `is_active` (boolean) - Whether preferences are active
  - `created_at` (timestamptz) - When preferences were created

  ## Security
  - Enable RLS on all tables
  - Add policies for authenticated users to manage their own data
*/

-- Create user_profiles table
CREATE TABLE IF NOT EXISTS user_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  pronouns text NOT NULL DEFAULT 'they/them',
  email text NOT NULL,
  phone text,
  country_code text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create user_goals table
CREATE TABLE IF NOT EXISTS user_goals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  goal text NOT NULL,
  details text DEFAULT '',
  additional_manifestation text,
  more text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create daily_notes table
CREATE TABLE IF NOT EXISTS daily_notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  goal_id uuid NOT NULL REFERENCES user_goals(id) ON DELETE CASCADE,
  message_text text NOT NULL,
  image_url text NOT NULL,
  template_id integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create user_preferences table
CREATE TABLE IF NOT EXISTS user_preferences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  delivery_time time NOT NULL DEFAULT '11:11:00',
  timezone text NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

-- Create indexes
CREATE INDEX IF NOT EXISTS user_goals_user_id_idx ON user_goals(user_id);
CREATE INDEX IF NOT EXISTS user_goals_is_active_idx ON user_goals(is_active);
CREATE INDEX IF NOT EXISTS daily_notes_user_id_idx ON daily_notes(user_id);
CREATE INDEX IF NOT EXISTS daily_notes_goal_id_idx ON daily_notes(goal_id);
CREATE INDEX IF NOT EXISTS daily_notes_created_at_idx ON daily_notes(created_at);
CREATE INDEX IF NOT EXISTS user_preferences_user_id_idx ON user_preferences(user_id);

-- Enable Row Level Security
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_goals ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_preferences ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_profiles
CREATE POLICY "Users can insert their own profile"
  ON user_profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can view their own profile"
  ON user_profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON user_profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- RLS Policies for user_goals
CREATE POLICY "Users can insert their own goals"
  ON user_goals FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own goals"
  ON user_goals FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own goals"
  ON user_goals FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for daily_notes
CREATE POLICY "Users can insert their own notes"
  ON daily_notes FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own notes"
  ON daily_notes FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- RLS Policies for user_preferences
CREATE POLICY "Users can insert their own preferences"
  ON user_preferences FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own preferences"
  ON user_preferences FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own preferences"
  ON user_preferences FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);