import React from 'react';

const videos = [
  {
    title: 'Bio-Sterilization',
    badge: '6-Log Reduction',
    src: '/videos/sterilization.mp4',
    description: 'Demonstrates 6-log (99.9999%) reduction in superbug populations'
  },
  {
    title: 'Surface Activation',
    badge: 'Contact Angle Shift',
    src: '/videos/activation.mp4',
    description: 'Shows dramatic improvement in surface wettability and adhesion'
  },
  {
    title: 'Thermal Safety',
    badge: 'Non-Thermal Jet',
    src: '/videos/thermal_safety.mp4',
    description: 'Temperature-sensitive materials remain unharmed during treatment'
  }
];

function VideoCard({ title, badge, src, description }) {
  return (
    <div style={styles.card}>
      <div style={styles.badgeContainer}>
        <span style={styles.badge}>{badge}</span>
      </div>
      <video
        src={src}
        autoPlay
        loop
        muted
        style={styles.video}
        onError={() => console.warn(`Video failed to load: ${src}`)}
      />
      <div style={styles.info}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function VideoShowcase() {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Application Demonstrations</h2>
      <div style={styles.grid}>
        {videos.map((video, idx) => (
          <VideoCard key={idx} {...video} />
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '60px 20px',
    backgroundColor: '#f9f9f9'
  },
  heading: {
    fontSize: '32px',
    marginBottom: '40px',
    textAlign: 'center',
    color: '#333'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer'
  },
  badgeContainer: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    zIndex: 10
  },
  badge: {
    backgroundColor: '#ff6b6b',
    color: '#fff',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  video: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    backgroundColor: '#000'
  },
  info: {
    padding: '20px'
  }
};
