import { createClient } from '@supabase/supabase-js'

const URL = 'https://nvpizogyaprhoseaohnz.supabase.co'
const API_KEY = 'sb_publishable_4zc-8jAcM7wvrzPR7wkoAg_ulIH01P5'

export const supabase = createClient(URL, API_KEY)