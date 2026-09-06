# CAP Pen Showcase Build & Deployment Guide

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

This starts:
- React dev server on `http://localhost:3000`
- Express API on `http://localhost:5000`

## Production Build

```bash
npm run build
```

## Environment Setup

Create `.env` file:
```
REACT_APP_API_URL=http://localhost:5000
SERVER_PORT=5000
NODE_ENV=development
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL_TO=contact@yourcompany.com
```

## Asset Replacement

### 3D Model
- Replace `public/models/placeholder_pen.glb` with your CAP Pen 3D model
- Model should be optimized for web (< 5MB)
- Format: glTF/GLB with PBR materials recommended

### Videos
- Replace video files in `public/videos/`:
  - `sterilization.mp4` - Bio-sterilization demo
  - `activation.mp4` - Surface activation demo
  - `thermal_safety.mp4` - Thermal safety demo
- Video format: MP4, H.264 codec, ~2-5MB each
- Resolution: 1280x720 or 1920x1080

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repo to Vercel
3. Set environment variables
4. Deploy

### Heroku
```bash
heroku create cap-pen-showcase
git push heroku develop
```

### Docker
```bash
docker build -t cap-pen-showcase .
docker run -p 3000:3000 -p 5000:5000 cap-pen-showcase
```

## API Reference

### GET /api/health
Health check endpoint

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-09-06T13:55:00Z"
}
```

### POST /api/virtual-tests
Request feasibility assessment

**Request:**
```json
{
  "substrate": "PEEK",
  "speed": 15,
  "application": "Superbug Inactivation"
}
```

**Response:**
```json
{
  "feasibilityScore": 85,
  "verdict": "Highly feasible",
  "recommendations": [
    "Conduct small-scale pilot test before full deployment",
    "Monitor electrode voltage stability for consistent performance"
  ],
  "timestamp": "2025-09-06T13:55:00Z",
  "input": {
    "substrate": "PEEK",
    "speed": 15,
    "application": "Superbug Inactivation"
  }
}
```

### POST /api/contact
Submit contact inquiry

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1-555-0123",
  "company": "Research Lab",
  "inquiryType": "demo",
  "message": "Interested in CAP Pen demonstration"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Inquiry submitted successfully",
  "ticketId": "TICKET-1693976100000",
  "timestamp": "2025-09-06T13:55:00Z"
}
```

## Troubleshooting

### React won't start
```bash
rm -rf node_modules package-lock.json
npm install
npm run client
```

### Express API not responding
```bash
npm run server
# Check port 5000 is available
lsof -i :5000
```

### 3D model not loading
- Verify file exists: `public/models/placeholder_pen.glb`
- Check browser console for errors
- Ensure model is valid glTF/GLB format

### Videos not playing
- Check file paths match component imports
- Verify video format is H.264/MP4
- Test video plays in browser directly

## Support

**Developer:** Abubakker Mansuri
**LinkedIn:** https://www.linkedin.com/in/abubakker-mansuri-3ba70b316

For issues or questions, open a GitHub issue or contact via LinkedIn.
