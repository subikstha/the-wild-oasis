
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://jheamkylfjdzuqiibdei.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoZWFta3lsZmpkenVxaWliZGVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwNjA1ODAsImV4cCI6MjAzNDYzNjU4MH0.oN_t2UiAymi87hMM1FqwPlo9ogMe7RbXkgbU2ViB8-4'
export const supabase = createClient(supabaseUrl, supabaseKey)