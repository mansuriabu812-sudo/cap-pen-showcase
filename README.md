# CAP Pen Showcase Website

A professional, interactive product showcase for Cold Atmospheric Plasma (CAP) Pen technology featuring 3D product visualization, plasma simulation, and virtual testing capabilities.

## Features

### 1. Interactive 3D Product Viewer
- Full 360° rotation of the CAP Pen assembly
- Hotspot markers for component inspection
- Real-time component specifications panel
- Camera fly-to animations using GSAP
- Orbit controls for intuitive navigation

### 2. Operating Methodology Stepper
- 4-step animated breakdown:
  1. Gas Ionization
  2. Plume Projection
  3. ROS/RNS Generation
  4. Cell Membrane Lysis
- Educational modal with step descriptions
- Navigation controls (Back/Next)

### 3. Application Video Gallery
- Video showcase cards with badges:
  - **Bio-sterilization**: 6-Log Superbug Reduction
  - **Surface Activation**: Contact Angle Enhancement
  - **Thermal Safety**: Non-Thermal Plasma Jet
- Looping video playback
- Responsive grid layout

### 4. 2D Plasma Simulator
- Interactive real-time canvas visualization
- Parameters:
  - Standoff Gap (mm)
  - Traverse Speed (mm/s)
  - Substrate Selection (PEEK, Titanium, PDMS, Glass)
- Visual plume rendering based on parameters
- Clearance zone prediction

### 5. Virtual Testing Portal
- Request feasibility assessment form
- Inputs:
  - Substrate type
  - Process speed
  - Target application
- Backend heuristic scoring system
- Results preview with recommendations

### 6. Technical Documentation
- Specifications table
- Component details and specs
- Operating parameters
- Safety information

## Project Structure

```
cap-pen-showcase/
├── public/
│   ├── models/
│   │   └── placeholder_pen.glb
│   ├── videos/
│   │   ├── sterilization.mp4
│   │   ├── activation.mp4
│   │   └── thermal_safety.mp4
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Inspect3DViewer.jsx
│   │   ├── MethodologyModal.jsx
│   │   ├── VideoShowcase.jsx
│   │   ├── PlasmaSimulator2D.jsx
│   │   ├── VirtualTestModal.jsx
│   │   ├── TechnicalSpecs.jsx
│   │   ├── ContactForm.jsx
│   │   └── Navigation.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── index.js
├── server/
│   ├── api/
│   │   ├── virtual-tests.js
│   │   └── contact.js
│   └── index.js
├── .env.example
├── .gitignore
└── package.json
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/mansuriabu812-sudo/cap-pen-showcase.git
cd cap-pen-showcase
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Add your assets:
- Replace `public/models/placeholder_pen.glb` with your CAP Pen 3D model
- Replace video files in `public/videos/` with your application demonstrations

## Running the Project

### Development Mode
```bash
npm run dev
```
This starts both the React development server (port 3000) and Express backend (port 5000).

### Frontend Only
```bash
npm run client
```
Starts on http://localhost:3000

### Backend Only
```bash
npm run server
```
Starts on http://localhost:5000

### Production Build
```bash
npm run build
```

## API Endpoints

### POST /api/virtual-tests
Request feasibility assessment for CAP Pen application.

**Request Body:**
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
  "feasibilityScore": 65,
  "verdict": "Likely feasible",
  "recommendations": [
    "Increase traverse speed to 20 mm/s for optimal coverage",
    "Consider PEEK substrate for better durability"
  ]
}
```

### POST /api/contact
Submit a contact inquiry.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1-555-0123",
  "company": "Research Lab",
  "message": "Interested in CAP Pen demo",
  "inquiryType": "demo"
}
```

## Technologies Used

- **Frontend**: React 18, React Three Fiber, Three.js, GSAP
- **Backend**: Express.js, Node.js
- **3D Visualization**: Three.js with orbit controls
- **Animations**: GSAP for smooth camera transitions
- **Styling**: CSS3 with responsive design
- **Forms**: React hooks for state management

## Customization

### Adding New Components
1. Create component in `src/components/`
2. Import in `src/App.jsx`
3. Add routing if needed

### Updating Methodology Steps
Edit the `steps` array in `src/components/MethodologyModal.jsx`

### Modifying Plasma Simulator
Adjust simulation parameters in `src/components/PlasmaSimulator2D.jsx`

### Changing Hotspots
Update the `hotspots` array in `src/App.jsx` with new component positions and specs

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import repository in Vercel dashboard
3. Set environment variables
4. Deploy

### Netlify
```bash
npm run build
# Deploy the build/ folder
```

### Docker
```bash
docker build -t cap-pen-showcase .
docker run -p 3000:3000 -p 5000:5000 cap-pen-showcase
```

## Environment Variables

Create a `.env` file with:
```
REACT_APP_API_URL=http://localhost:5000
SERVER_PORT=5000
NODE_ENV=development
```

## Contributing

Contributions welcome! Please:
1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT License - See LICENSE file for details

## Support

For questions or issues, please open a GitHub issue or contact the development team.

---

**Last Updated**: 2025
**Version**: 1.0.0
