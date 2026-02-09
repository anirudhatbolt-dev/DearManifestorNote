import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface User {
  id?: string;
  name: string;
  pronouns: string;
  goal: string;
  details: string;
  email: string;
  phone?: string;
  country_code?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Subscription {
  id?: string;
  user_id: string;
  email_enabled: boolean;
  phone_enabled: boolean;
  timezone: string;
  last_sent_at?: string;
  created_at?: string;
  updated_at?: string;
}

export async function createUser(userData: User) {
  const { data, error } = await supabase
    .from('users')
    .insert([{
      name: userData.name,
      pronouns: userData.pronouns,
      goal: userData.goal,
      details: userData.details,
      email: userData.email,
      phone: userData.phone,
      country_code: userData.country_code
    }])
    .select()
    .maybeSingle();

  if (error) {
    console.error('Error creating user:', error);
    throw error;
  }

  return data;
}

export async function createSubscription(userId: string, phoneEnabled: boolean = false) {
  const { data, error } = await supabase
    .from('subscriptions')
    .insert([{
      user_id: userId,
      email_enabled: true,
      phone_enabled: phoneEnabled,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'America/New_York'
    }])
    .select()
    .maybeSingle();

  if (error) {
    console.error('Error creating subscription:', error);
    throw error;
  }

  return data;
}

export async function getUserByEmail(email: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .maybeSingle();

  if (error) {
    console.error('Error fetching user:', error);
    throw error;
  }

  return data;
}
