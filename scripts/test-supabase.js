/**
 * Supabase Connection Test Script
 * 
 * This script tests if your Supabase connection is working correctly.
 * Run it with: node scripts/test-supabase.js
 * 
 * Make sure you have .env.local set up with your Supabase credentials
 */

// Load environment variables from .env.local
require('dotenv').config({ path: '.env.local' });

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Error: Missing Supabase environment variables.');
  console.log('Make sure you have set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
  console.log('🔍 Testing Supabase connection...');
  
  try {
    // Try to query the participants table
    const { data, error, count } = await supabase
      .from('participants')
      .select('*', { count: 'exact', head: true });
    
    if (error) {
      throw error;
    }
    
    console.log('✅ Successfully connected to Supabase!');
    console.log(`📊 Found ${count} participants in the database.`);
    console.log('🚀 Your Supabase setup is working correctly.');
  } catch (error) {
    console.error('❌ Error connecting to Supabase:', error.message);
    
    if (error.message.includes('relation "participants" does not exist')) {
      console.log('It seems the participants table is not created yet.');
      console.log('Make sure to run the SQL from SUPABASE_SETUP.md to create the table first.');
    } else if (error.message.includes('JWT')) {
      console.log('This looks like an authentication issue. Check your SUPABASE_ANON_KEY value.');
    } else if (error.message.includes('Network')) {
      console.log('This looks like a network issue. Check your SUPABASE_URL value and internet connection.');
    }
  }
}

testConnection(); 