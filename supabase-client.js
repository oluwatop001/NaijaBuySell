const { createClient } = supabase;
const NAIJA_SUPABASE = createClient(
  window.NAIJA_SUPABASE_CONFIG.url,
  window.NAIJA_SUPABASE_CONFIG.publishableKey
);
