import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

// You will get these values from your Supabase Project Settings dashboard
const SUPABASE_URL = 'https://qfmxpchonlauaxjeufiv.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_nAB6VqVjWa9sMMpfCpzR0Q_RpY2JQiX';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false,
  },
});