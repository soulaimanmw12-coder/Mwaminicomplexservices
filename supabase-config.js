// supabase-config.js
const SUPABASE_URL = "https://vzrapubbvwdyjeormdpz.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6cmFwdWJidndkeWplb3JtZHB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk5MTQwOTQsImV4cCI6MjA5NTQ5MDA5NH0.6AETQWr_FKM3uKO7VL-cWvbOqhxDbUWLxSQK5P2bI4Q";

try {
    const configOptions = {
        auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true
        }
    };
    if (typeof supabase !== 'undefined' && supabase.createClient) {
        window.supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, configOptions);
    } else if (typeof window.supabaseJS !== 'undefined') {
        window.supabase = window.supabaseJS.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, configOptions);
    } else {
        console.error("Supabase CDN library script wrapper was missing at execution runtime.");
    }
} catch (e) {
    console.error("Failed to initialize database client connection:", e);
}
