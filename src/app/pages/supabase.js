import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zacvuhydqunmvxwrgcja.supabase.co";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphY3Z1aHlkcXVubXZ4d3JnY2phIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxMTYzMTgsImV4cCI6MjAzMDY5MjMxOH0.LVf8g_nKU0qiIe0IdfRi9SGzWHcQs2fL9OwlLqvnztI';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
