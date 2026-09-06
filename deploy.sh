#!/bin/bash

echo "🚀 CAP Pen Showcase - Vercel Deployment Setup"
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

echo "✅ Vercel CLI is ready"
echo ""
echo "📝 Deploying to Vercel..."
echo ""

# Login to Vercel if not already logged in
vercel login

echo ""
echo "🔧 Configuring project..."
echo ""

# Deploy
vercel

echo ""
echo "✨ Deployment complete!"
echo ""
echo "📋 Next steps:"
echo "1. Visit your Vercel dashboard to add environment variables"
echo "2. Set REACT_APP_API_URL to your Vercel deployment URL"
echo "3. Replace placeholder assets in public/models and public/videos"
echo ""
echo "👨‍💻 Developer: Abubakker Mansuri"
echo "🔗 LinkedIn: https://www.linkedin.com/in/abubakker-mansuri-3ba70b316"
echo ""
