# GitHub Pages Deployment Guide

## 🚀 Quick Setup

### Step 1: Enable GitHub Pages

1. Go to your repository: https://github.com/kevinriverrrr-sudo/PhotoRemover
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select:
   - **Source:** GitHub Actions
5. Click **Save**

### Step 2: Wait for Deployment

The GitHub Actions workflow will automatically:
1. ✅ Build the project
2. ✅ Deploy to GitHub Pages
3. ✅ Your site will be live at: **https://kevinriverrrr-sudo.github.io/PhotoRemover/**

### Step 3: Check Deployment Status

1. Go to **Actions** tab in your repository
2. You should see "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 1-2 minutes)
4. Once complete, your site is live! 🎉

---

## 🔗 Your Live Site

After deployment completes, your site will be available at:

**🌐 https://kevinriverrrr-sudo.github.io/PhotoRemover/**

---

## 📝 What Was Configured

### 1. Vite Configuration

`vite.config.ts` was updated with base path:
```typescript
export default defineConfig({
  base: '/PhotoRemover/',
  // ...
})
```

### 2. GitHub Actions Workflow

Created `.github/workflows/deploy.yml` that:
- Triggers on push to `main` branch
- Builds the project
- Deploys to GitHub Pages automatically

### 3. .nojekyll File

Added `.nojekyll` to disable Jekyll processing (required for Vite apps)

---

## ⚡ Automatic Deployment

Every time you push to `main` branch:
1. GitHub Actions automatically builds the project
2. Deploys the new version to GitHub Pages
3. Your site updates within 1-2 minutes

**No manual deployment needed!** 🎉

---

## 🔑 Adding API Keys (Optional)

If you want to pre-configure API keys for GitHub Pages:

### Step 1: Add GitHub Secrets

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add your secrets:
   - Name: `VITE_REMOVEBG_API_KEY`
   - Value: Your actual API key
4. Repeat for other services if needed

### Step 2: Update Workflow

Edit `.github/workflows/deploy.yml` and uncomment these lines:

```yaml
env:
  VITE_REMOVEBG_API_KEY: ${{ secrets.VITE_REMOVEBG_API_KEY }}
  VITE_SELECTED_SERVICE: removebg
```

### ⚠️ Security Note

**Frontend environment variables are exposed in the browser!**

For production, it's recommended to:
1. Use a backend proxy (see [SECURITY.md](../SECURITY.md))
2. Or use serverless functions (Vercel/Netlify)
3. Never commit API keys to the repository

---

## 🛠️ Troubleshooting

### Build Failed

1. Check **Actions** tab for error logs
2. Common issues:
   - Dependencies not compatible → Check `package.json`
   - Build errors → Test locally with `npm run build`
   - TypeScript errors → Fix type issues

### Site Not Loading

1. Check if workflow completed successfully
2. Wait a few minutes for DNS propagation
3. Clear browser cache (Ctrl+F5)
4. Check browser console for errors

### 404 Error

1. Make sure `base: '/PhotoRemover/'` is in `vite.config.ts`
2. Verify GitHub Pages is enabled in repository settings
3. Check if `.nojekyll` file exists in root

### Assets Not Loading

1. Check browser console for 404 errors
2. Verify base path is correct in `vite.config.ts`
3. Rebuild and redeploy

---

## 📊 Monitoring

### Check Deployment Status

```bash
# View recent deployments
gh run list --workflow=deploy.yml

# View specific run details
gh run view <run-id>
```

### View Logs

1. Go to **Actions** tab
2. Click on latest workflow run
3. Click on "build" or "deploy" job
4. View detailed logs

---

## 🔄 Manual Redeploy

If you need to redeploy without pushing code:

### Method 1: GitHub UI

1. Go to **Actions** tab
2. Click "Deploy to GitHub Pages" workflow
3. Click **Run workflow** button
4. Select `main` branch
5. Click **Run workflow**

### Method 2: GitHub CLI

```bash
gh workflow run deploy.yml
```

---

## 🌍 Custom Domain (Optional)

To use a custom domain:

### Step 1: Configure DNS

Add these DNS records at your domain provider:

```
Type: CNAME
Name: www (or subdomain)
Value: kevinriverrrr-sudo.github.io
```

### Step 2: Configure GitHub Pages

1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter your domain
3. Click **Save**
4. Wait for DNS check to pass
5. Enable **Enforce HTTPS**

### Step 3: Update Vite Config

Change base path to `/`:

```typescript
export default defineConfig({
  base: '/', // Changed from '/PhotoRemover/'
  // ...
})
```

Commit and push changes.

---

## 📝 Additional Configuration

### Build Optimization

For faster builds, you can:

1. Enable caching in workflow (already enabled)
2. Disable sourcemaps in production:

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    sourcemap: false, // Changed from true
  }
})
```

### Environment-Specific Builds

Create different configs for different environments:

```typescript
// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'github' ? '/PhotoRemover/' : '/',
    // ...
  }
})
```

Build with:
```bash
npm run build -- --mode github
```

---

## ✅ Verification Checklist

After deployment:

- [ ] Site loads at https://kevinriverrrr-sudo.github.io/PhotoRemover/
- [ ] All assets load correctly (CSS, JS, images)
- [ ] 3D background renders properly
- [ ] File upload works
- [ ] No console errors
- [ ] Responsive design works on mobile
- [ ] All navigation links work

---

## 📦 Alternative: Manual Deployment

If you prefer manual deployment:

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add script to package.json
# "deploy": "gh-pages -d dist"

# Build and deploy
npm run build
npm run deploy
```

---

## 📚 Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

## 👏 Success!

Your PhotoRemover app is now live on GitHub Pages! 🎉

Share your site:
- 🌐 https://kevinriverrrr-sudo.github.io/PhotoRemover/

Any issues? Check [Troubleshooting](#-troubleshooting) section or open an issue on GitHub.

---

**Made with ❤️ by [kevinriverrrr-sudo](https://github.com/kevinriverrrr-sudo)**