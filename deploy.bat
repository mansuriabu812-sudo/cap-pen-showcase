@echo off
echo 🚀 CAP Pen Showcase - Vercel Deployment Setup
echo.

REM Check if Vercel CLI is installed
where vercel >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo 📦 Installing Vercel CLI...
    npm install -g vercel
)

echo ✅ Vercel CLI is ready
echo.
echo 📝 Deploying to Vercel...
echo.

REM Login to Vercel
vercel login

echo.
echo 🔧 Configuring project...
echo.

REM Deploy
vercel

echo.
echo ✨ Deployment complete!
echo.
echo 📋 Next steps:
echo 1. Visit your Vercel dashboard to add environment variables
echo 2. Set REACT_APP_API_URL to your Vercel deployment URL
echo 3. Replace placeholder assets in public/models and public/videos
echo.
echo 👨‍💻 Developer: Abubakker Mansuri
echo 🔗 LinkedIn: https://www.linkedin.com/in/abubakker-mansuri-3ba70b316
echo.
pause
