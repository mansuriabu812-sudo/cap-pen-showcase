# CAP Pen Showcase - Vercel Deployment Guide

## Quick Deploy to Vercel

### Option 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow prompts:**
   - Accept default project settings
   - Set environment variables when prompted
   - Deploy!

### Option 2: Using GitHub Integration (Easier)

1. **Push to GitHub:**
   ```bash
   git push origin develop
   ```

2. **Connect to Vercel:**
   - Go to https://vercel.com/new
   - Select "Import Git Repository"
   - Choose your `cap-pen-showcase` repository
   - Click Import

3. **Configure Project:**
   - Framework: React
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`

4. **Set Environment Variables:**
   - Go to Project Settings → Environment Variables
   - Add:
     ```
     REACT_APP_API_URL=https://your-deployment.vercel.app
     SERVER_PORT=5000
     NODE_ENV=production
     ```

5. **Deploy:**
   - Click Deploy
   - Wait for build to complete
   - Your app is now live!

## Environment Variables for Vercel

Add these in Project Settings → Environment Variables:

```
REACT_APP_API_URL=https://your-app-name.vercel.app
SERVER_PORT=5000
NODE_ENV=production
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL_TO=contact@yourcompany.com
```

## Vercel Configuration

The `vercel.json` file contains:
- Build command
- Development command
- Install command
- Framework detection
- Output directory

## Custom Domain Setup

1. Go to Project Settings → Domains
2. Click "Add Domain"
3. Enter your domain (e.g., cappenshowcase.com)
4. Follow DNS configuration instructions
5. Wait for DNS propagation (can take 24-48 hours)

## Monitoring & Logs

- **View Logs:** `vercel logs`
- **Real-time Logs:** `vercel logs --tail`
- **Dashboard:** https://vercel.com/dashboard

## Troubleshooting

### Build Fails
```bash
vercel logs --tail
# Check for:
# - Missing dependencies
# - Environment variables
# - Node version compatibility
```

### Environment Variables Not Working
1. Redeploy after adding variables
2. Check variable names match code
3. Verify values in Settings → Environment Variables

### API Endpoint Not Found
- Ensure backend routes are properly exported
- Check `server/api/` files are included in deployment
- Verify CORS is configured correctly

## Rollback

If deployment breaks:
```bash
vercel rollback
```

Or via dashboard:
1. Go to Deployments
2. Select previous working deployment
3. Click "Promote to Production"

## Performance Tips

1. **Image Optimization:**
   - Vercel auto-optimizes images
   - Use Next.js Image component if needed

2. **Edge Caching:**
   - Static assets cached globally
   - Configure Cache-Control headers

3. **Serverless Functions:**
   - API routes automatically converted to serverless
   - No cold start delay with Vercel

## Cost

- **Hobby Plan (Free):**
  - 100 GB bandwidth/month
  - Unlimited deployments
  - Perfect for prototypes

- **Pro Plan ($20/month):**
  - 1 TB bandwidth/month
  - Analytics
  - Priority support

## Support & Resources

- **Vercel Docs:** https://vercel.com/docs
- **GitHub Issues:** https://github.com/mansuriabu812-sudo/cap-pen-showcase/issues
- **Developer:** Abubakker Mansuri
- **LinkedIn:** https://www.linkedin.com/in/abubakker-mansuri-3ba70b316

---

**Your app will be live at:** `https://your-app-name.vercel.app` 🚀
