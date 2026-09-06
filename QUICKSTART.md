# Quick Start Guide - CAP Pen Showcase

## 🎯 Get Started in 3 Steps

### Step 1: Clone & Install
```bash
git clone https://github.com/mansuriabu812-sudo/cap-pen-showcase.git
cd cap-pen-showcase
npm install
```

### Step 2: Run Locally
```bash
npm run dev
```

Open http://localhost:3000 in your browser! 🎉

### Step 3: Deploy to Vercel

**On macOS/Linux:**
```bash
chmod +x deploy.sh
./deploy.sh
```

**On Windows:**
```bash
deploy.bat
```

**Or manually:**
1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Click Deploy
4. Done! ✨

---

## 📁 Project Structure

```
cap-pen-showcase/
├── public/
│   ├── models/          # 3D models (replace placeholder_pen.glb)
│   ├── videos/          # Demo videos
│   └── index.html
├── src/
│   ├── components/      # React components
│   ├── styles/          # CSS
│   ├── App.jsx
│   └── index.js
├── server/
│   ├── api/             # Express API routes
│   └── index.js
├── package.json
├── vercel.json          # Vercel config
└── README.md
```

---

## 🎮 Features to Explore

1. **🔍 3D Viewer** - Inspect the CAP Pen assembly
   - Click hotspots to see component specs
   - Orbit controls for full 360° view

2. **📚 Methodology** - How the CAP Pen works
   - 4-step animation breakdown
   - Educational descriptions

3. **🎥 Video Gallery** - Real-world applications
   - Bio-sterilization (6-log reduction)
   - Surface activation
   - Thermal safety

4. **⚡ Plasma Simulator** - Interactive 2D visualization
   - Adjust gap and speed
   - See plume behavior in real-time

5. **🧪 Virtual Test** - Get feasibility scores
   - Submit substrate, speed, application
   - Get AI-powered recommendations

6. **📋 Technical Specs** - Full specifications table
7. **💬 Contact Form** - Send inquiries

---

## 🛠️ Customization

### Replace 3D Model
```bash
# Replace this file with your GLB model:
public/models/placeholder_pen.glb
```

### Replace Videos
```bash
# Add your videos here:
public/videos/sterilization.mp4
public/videos/activation.mp4
public/videos/thermal_safety.mp4
```

### Customize Colors
Edit `src/styles/index.css` or component `styles` objects (default: #ff6b6b red)

### Update Hotspots
Edit `src/App.jsx` - modify the `hotspots` array

---

## 📞 Support

**Developer:** Abubakker Mansuri
**LinkedIn:** https://www.linkedin.com/in/abubakker-mansuri-3ba70b316
**GitHub:** https://github.com/mansuriabu812-sudo/cap-pen-showcase

---

## 📚 Documentation

- **README.md** - Full project documentation
- **DEPLOYMENT.md** - Backend & API details
- **VERCEL_DEPLOYMENT.md** - Vercel setup guide

---

## 🚀 Your App is Ready!

Your CAP Pen showcase is fully configured and ready to deploy. Choose your deployment method above and get it live in minutes!

Happy coding! 💻✨
