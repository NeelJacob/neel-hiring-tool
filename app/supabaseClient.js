import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://gcjvjrtkbrlqoerqawuf.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjanZqcnRrYnJscW9lcnFhd3VmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3MTY5MTAsImV4cCI6MjA4NzI5MjkxMH0.d5fsomjf3FqS8tnRtIkb50GHeB2wj0EllvBM1YzS8GM";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storage: window.localStorage
  }
});