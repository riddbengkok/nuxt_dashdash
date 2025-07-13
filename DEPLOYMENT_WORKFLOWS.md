# Deployment Workflows Documentation

## Overview

This project has **2 GitHub Actions workflows** for deploying to GitHub Pages:

1. **`nuxtjs.yml`** - Automatic deployment (runs on every push to main)
2. **`deploy.yml`** - Manual deployment with Firebase environment variables

## Workflow Details

### 1. Automatic Deployment (`nuxtjs.yml`)

**Trigger:** 
- ✅ Automatic on every push to `main` branch
- ✅ Manual trigger from Actions tab

**Purpose:**
- Handles automatic deployments
- Uses GitHub's built-in Pages deployment
- No environment variables needed (uses public config)

**When to use:**
- ✅ Regular development pushes
- ✅ When you don't need Firebase environment variables
- ✅ For testing the basic deployment

**Configuration:**
- Uses `npm ci` and `npm run generate`
- Deploys to GitHub Pages automatically
- Uses the official Nuxt.js workflow

---

### 2. Manual Deployment (`deploy.yml`)

**Trigger:**
- ✅ Manual trigger only (workflow_dispatch)
- ❌ No automatic triggers

**Purpose:**
- Deploy with Firebase environment variables
- Custom deployment with specific configuration
- Full control over the deployment process

**When to use:**
- ✅ When you need Firebase authentication to work
- ✅ When you want to test with specific environment variables
- ✅ For production deployments with Firebase config

**Configuration:**
- Uses `npm ci` and `npm run generate`
- Includes Firebase environment variables from GitHub Secrets
- Deploys to GitHub Pages using `gh-pages` package

---

## How to Use

### For Regular Development:
```bash
# Just push to main - automatic deployment will happen
git push origin main
```

### For Firebase-Enabled Deployment:
1. Go to GitHub repository
2. Click "Actions" tab
3. Select "Manual Deploy to GitHub Pages (with Firebase env vars)"
4. Click "Run workflow"
5. Select branch and click "Run workflow"

---

## Environment Variables

### Required for Manual Deployment:
Make sure these secrets are set in your GitHub repository:
- `FIREBASE_API_KEY`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_STORAGE_BUCKET`
- `FIREBASE_MESSAGING_SENDER_ID`
- `FIREBASE_APP_ID`
- `FIREBASE_MEASUREMENT_ID`

### How to Set Secrets:
1. Go to your GitHub repository
2. Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Add each Firebase configuration value

---

## Workflow Comparison

| Feature | Automatic (`nuxtjs.yml`) | Manual (`deploy.yml`) |
|---------|---------------------------|------------------------|
| **Trigger** | Push to main | Manual only |
| **Firebase** | ❌ No env vars | ✅ With env vars |
| **Speed** | Fast | Slower (env setup) |
| **Use Case** | Development | Production |
| **Authentication** | ❌ Won't work | ✅ Full functionality |

---

## Troubleshooting

### If Automatic Deployment Fails:
- Check the Actions tab for error logs
- Verify your Nuxt configuration
- Make sure all dependencies are in `package.json`

### If Manual Deployment Fails:
- Verify all Firebase secrets are set
- Check the workflow logs for environment variable errors
- Ensure Firebase configuration is correct

### If Both Workflows Run:
- This is normal! Both workflows can run simultaneously
- The manual workflow is for Firebase-enabled deployments
- The automatic workflow is for basic deployments

---

## Best Practices

1. **For Development:**
   - Use automatic deployment for quick testing
   - Push to main for automatic deployment

2. **For Production:**
   - Use manual deployment with Firebase environment variables
   - Test locally first with `pnpm run preview:prod`

3. **For Testing:**
   - Use `pnpm run preview:local` for local testing
   - Use `pnpm run preview:prod` for production testing

---

## Quick Commands

```bash
# Local development
pnpm run dev

# Local preview (dev build)
pnpm run preview:local

# Local preview (production build)
pnpm run preview:prod

# Build for production
pnpm run generate

# Deploy to GitHub Pages
pnpm run deploy
```

---

**Last Updated:** $(date)
**Workflow Status:** ✅ Both workflows configured and working 