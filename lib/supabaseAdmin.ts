import { createClient } from "@supabase/supabase-js";

// Server-only admin client — uses service role key for full DB access
// NEVER import this in client components
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY || "";

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
