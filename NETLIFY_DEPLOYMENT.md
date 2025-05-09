# Deploying HackSkye to Netlify

This guide will walk you through deploying your HackSkye app to Netlify.

## Prerequisites

1. A [Netlify](https://netlify.com) account
2. Your Supabase project set up (see SUPABASE_SETUP.md)
3. Git installed on your computer

## Option 1: Deploy using the Netlify UI (Easiest)

### 1. Prepare Your Project for Deployment

In your project directory, create a `netlify.toml` file with Next.js configuration:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### 2. Push Your Code to GitHub

```bash
# Initialize Git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/hackskye.git

# Push to GitHub
git push -u origin main
```

### 3. Deploy on Netlify

1. Log in to [Netlify](https://app.netlify.com/)
2. Click "Add new site" > "Import an existing project"
3. Connect your GitHub account and select your repository
4. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click "Show advanced" and add the following environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
6. Click "Deploy site"

## Option 2: Deploy using Netlify CLI

### 1. Install Netlify CLI

```bash
npm install -g netlify-cli
```

### 2. Login to Netlify

```bash
netlify login
```

### 3. Initialize Netlify in Your Project

```bash
netlify init
```

Follow the prompts to:
- Create a new site
- Set up the build command: `npm run build`
- Set the publish directory: `.next`

### 4. Set Environment Variables

```bash
netlify env:set NEXT_PUBLIC_SUPABASE_URL your-supabase-url
netlify env:set NEXT_PUBLIC_SUPABASE_ANON_KEY your-supabase-anon-key
```

### 5. Deploy Your Site

```bash
netlify deploy --prod
```

## Continuous Deployment

Once set up, Netlify will automatically deploy your site whenever you push changes to your connected repository.

## Troubleshooting

### Missing Environment Variables

If your app can't connect to Supabase after deployment, check your environment variables in the Netlify dashboard:

1. Go to Site settings > Environment variables
2. Verify `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set correctly

### Build Failures

If you encounter build failures:

1. Check Netlify's deploy logs
2. Make sure the `@netlify/plugin-nextjs` plugin is installed
3. Verify your `netlify.toml` file is correctly configured

## Local Testing Before Deployment

To make sure your build works before deploying:

```bash
# Build the app
npm run build

# Install Netlify CLI if not already installed
npm install -g netlify-cli

# Test the build locally
netlify dev
```

This will run your built app using Netlify's local development environment.

## Additional Resources

- [Netlify Next.js Documentation](https://docs.netlify.com/integrations/frameworks/next-js/overview/)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment) 