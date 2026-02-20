/*
  # Fix subscriptions RLS policies for authenticated users

  ## Problem
  Existing RLS policies on the subscriptions table only cover the `anon` role.
  Authenticated users (logged-in) cannot read their own subscription data,
  causing the gallery page to always show the subscription CTA even when the
  user has an active subscription.

  ## Changes
  1. Drop existing anon-only policies
  2. Add proper policies for `authenticated` role:
     - SELECT: users can only read their own subscription row
     - INSERT: users can only insert their own subscription row
     - UPDATE: users can only update their own subscription row
*/

DROP POLICY IF EXISTS "Allow public insert for new subscriptions" ON subscriptions;
DROP POLICY IF EXISTS "Users can update subscriptions" ON subscriptions;
DROP POLICY IF EXISTS "Users can view all subscriptions" ON subscriptions;

CREATE POLICY "Users can view own subscription"
  ON subscriptions FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own subscription"
  ON subscriptions FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own subscription"
  ON subscriptions FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
