import { createClient } from '@supabase/supabase-js';


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
console.log("Supabase URL:", supabaseUrl); // Log the Supabase URL
console.log("Supabase Key:", supabaseKey); // Log the Supabase Key

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL and Key must be provided');
}
 
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
