import React from 'react';

export default function Navigation({ onInspect, onMethodology, onTest, onContact }) {
  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.logo}>
          <h1>CAP Pen</h1>
          <p>Cold Atmospheric Plasma Technology</p>
        </div>
        
        <div style={styles.buttons}>
          <button onClick={onInspect} style={styles.btn}>📦 3D Viewer</button>
          <button onClick={onMethodology} style={styles.btn}>📋 Methodology</button>
          <button onClick={onTest} style={styles.btn}>🧪 Virtual Test</button>
          <button onClick={onContact} style={{ ...styles.btn, backgroundColor: '#ff6b6b' }}>
            📞 Contact
          </button>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: '20px 0',
    borderBottom: '3px solid #ff6b6b',
    position: 'sticky',
    top: 0,
    zIndex: 100
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '30px'
  },
  logo: {
    flex: 1
  },
  buttons: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
    justifyContent: 'flex-end'
  },
  btn: {
    padding: '10px 15px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
    whiteSpace: 'nowrap'
  }
};
