import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://etjbsgpmzeiunmhpqkub.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0amJzZ3BtemVpdW5taHBxa3ViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4OTEzNjgsImV4cCI6MjA1MTQ2NzM2OH0.HNsoaSgdVMB7H7eJG48oJvLtWtB46Ppdbn3vPRV3zqA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
