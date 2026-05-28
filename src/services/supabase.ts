import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rlzhshcaoomnfktlzgpz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsemhzaGNhb29tbmZrdGx6Z3B6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyNzMyNTUsImV4cCI6MjA5NDg0OTI1NX0.zeQKlhxZzLA1GmpUgVNgJwpUz-Zw5kiz-WeuNssN0V4";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
