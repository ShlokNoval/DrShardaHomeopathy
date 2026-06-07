import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Server-only admin client - uses service role key for full DB access
// NEVER import this in client components

let _supabaseAdmin: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient | null {
  if (_supabaseAdmin) return _supabaseAdmin;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_KEY;

  if (!url || !key) return null;

  _supabaseAdmin = createClient(url, key);
  return _supabaseAdmin;
}
