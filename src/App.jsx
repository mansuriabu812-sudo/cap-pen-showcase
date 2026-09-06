import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Inspect3DViewer from './components/Inspect3DViewer';
import MethodologyModal from './components/MethodologyModal';
import VideoShowcase from './components/VideoShowcase';
import PlasmaSimulator2D from './components/PlasmaSimulator2D';
import VirtualTestModal from './components/VirtualTestModal';
import TechnicalSpecs from './components/TechnicalSpecs';
import ContactForm from './components/ContactForm';
import './styles/index.css';

function App() {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [methodOpen, setMethodOpen] = useState(false);
  const [testOpen, setTestOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const hotspots = [
    { id: 'he', name: 'HV Electrode', position: [0, 15, 0], specHtml: 'HV Electrode: 5–10 kV, pulsed' },
    { id: 'qt', name: 'Dielectric Quartz Tube', position: [0, 0, 20], specHtml: 'Quartz Tube: borosilicate, dielectric barrier' },
    { id: 'mn', name: 'Micro-Nozzle', position: [10, -5, 5], specHtml: 'Micro-Nozzle: 0.5 mm aperture' },
    { id: 'gi', name: 'Gas Inlet', position: [-12, -3, -8], specHtml: 'Gas Inlet: Ar / He blends' }
  ];

  return (
    <div style={styles.app}>
      <Navigation
        onInspect={() => setViewerOpen(true)}
        onMethodology={() => setMethodOpen(true)}
        onTest={() => setTestOpen(true)}
        onContact={() => setContactOpen(true)}
      />

      <header style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Cold Atmospheric Plasma Pen</h1>
          <p style={styles.heroSubtitle}>Revolutionary Non-Thermal Sterilization & Surface Activation Technology</p>
          <button
            onClick={() => setViewerOpen(true)}
            style={styles.ctaButton}
          >
            Explore 3D Model →
          </button>
        </div>
      </header>

      <VideoShowcase />

      <section style={styles.simulatorSection}>
        <PlasmaSimulator2D />
      </section>

      <TechnicalSpecs />

      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerColumn}>
            <h3>CAP Pen Showcase</h3>
            <p>Interactive demonstration of Cold Atmospheric Plasma technology for sterilization and surface treatment.</p>
          </div>
          <div style={styles.footerColumn}>
            <h3>Quick Links</h3>
            <ul style={styles.footerList}>
              <li><button onClick={() => setViewerOpen(true)} style={styles.footerLink}>3D Viewer</button></li>
              <li><button onClick={() => setMethodOpen(true)} style={styles.footerLink}>Methodology</button></li>
              <li><button onClick={() => setTestOpen(true)} style={styles.footerLink}>Virtual Test</button></li>
              <li><button onClick={() => setContactOpen(true)} style={styles.footerLink}>Contact</button></li>
            </ul>
          </div>
          <div style={styles.footerColumn}>
            <h3>Developer</h3>
            <p><strong>Abubakker Mansuri</strong></p>
            <a
              href="https://www.linkedin.com/in/abubakker-mansuri-3ba70b316"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.linkedinLink}
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p>&copy; 2025 CAP Pen Showcase. Built with React & Three.js. All rights reserved.</p>
        </div>
      </footer>

      {viewerOpen && (
        <Inspect3DViewer
          hotspots={hotspots}
          onClose={() => setViewerOpen(false)}
        />
      )}

      {methodOpen && <MethodologyModal onClose={() => setMethodOpen(false)} />}
      {testOpen && <VirtualTestModal onClose={() => setTestOpen(false)} />}
      {contactOpen && <ContactForm onClose={() => setContactOpen(false)} />}
    </div>
  );
}

const styles = {
  app: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    backgroundColor: '#fff',
    color: '#333'
  },
  hero: {
    background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
    color: '#fff',
    padding: '100px 20px',
    textAlign: 'center'
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  heroTitle: {
    fontSize: '48px',
    marginBottom: '20px',
    fontWeight: 'bold'
  },
  heroSubtitle: {
    fontSize: '20px',
    marginBottom: '30px',
    color: '#ccc'
  },
  ctaButton: {
    padding: '15px 40px',
    backgroundColor: '#ff6b6b',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  simulatorSection: {
    backgroundColor: '#fff'
  },
  footer: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: '60px 20px 20px',
    marginTop: '60px'
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '40px',
    marginBottom: '40px'
  },
  footerColumn: {
    lineHeight: '1.6'
  },
  footerList: {
    listStyle: 'none',
    padding: 0,
    margin: '10px 0 0 0'
  },
  footerLink: {
    background: 'none',
    border: 'none',
    color: '#ff6b6b',
    cursor: 'pointer',
    fontSize: '14px',
    textDecoration: 'underline',
    padding: 0,
    textAlign: 'left'
  },
  linkedinLink: {
    color: '#ff6b6b',
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: '10px',
    fontSize: '14px'
  },
  footerBottom: {
    textAlign: 'center',
    paddingTop: '20px',
    borderTop: '1px solid #444',
    color: '#999',
    fontSize: '12px'
  }
};

export default App;
