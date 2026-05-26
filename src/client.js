import { createClient } from '@supabase/supabase-js'

const URL = 'https://nvpizogyaprhoseaohnz.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52cGl6b2d5YXByaG9zZWFvaG56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3MzU5MzIsImV4cCI6MjA5NTMxMTkzMn0.UpIEPk_ICqY_oonpGaNurT6GIrz1XT9IYkPKA9Vagu8'

export const supabase = createClient(URL, API_KEY)