# Supabase Setup Instructions

## 1. Create a Supabase Account and Project

1. Go to [Supabase](https://supabase.com/) and sign up for an account
2. Create a new project
3. Note your project URL and anon key (you'll need these later)

## 2. Set Up Your Database Table

1. In your Supabase dashboard, go to the SQL Editor
2. Run the following SQL to create the participants table:

```sql
CREATE TABLE participants (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  college TEXT,
  year_of_study TEXT,
  major TEXT,
  github_url TEXT,
  portfolio_url TEXT,
  participation_type TEXT NOT NULL,
  team_name TEXT,
  skills JSONB,
  dietary_restrictions TEXT,
  tshirt_size TEXT,
  how_did_you_hear TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

## 3. Set Up Environment Variables

Create a file named `.env.local` in the root of your project with the following content:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Replace `your-supabase-url` with your Supabase project URL and `your-supabase-anon-key` with your Supabase anon key. 

You can find these values in your Supabase dashboard under Project Settings > API.

## 4. Restart Your Development Server

After setting up the environment variables, restart your development server:

```
npm run dev
```

## 5. Test Your Setup

1. Fill out the registration form and submit it
2. Check if the data appears in your Supabase database under the "participants" table
3. Visit the admin dashboard at `/dashboard` to see if the data is displayed there 