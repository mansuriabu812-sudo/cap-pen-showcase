import React, { useState } from 'react';

const steps = [
  {
    title: 'Gas Ionization',
    body: 'High-voltage electrical discharge ionizes the gas mixture (Ar/He blend), creating plasma state where electrons separate from atoms.'
  },
  {
    title: 'Plume Projection',
    body: 'Ionized gas is projected through the micro-nozzle (0.5mm aperture) at controlled speed, creating a coherent plasma jet.'
  },
  {
    title: 'ROS/RNS Generation',
    body: 'Reactive oxygen and nitrogen species (ROS/RNS) are generated in the plasma plume, including O3, NO, and atomic oxygen.'
  },
  {
    title: 'Cell Membrane Lysis',
    body: 'ROS/RNS penetrate and oxidize lipid membranes of microbial cells, causing structural damage and cell death.'
  }
];

export default function MethodologyModal({ onClose }) {
  const [index, setIndex] = useState(0);

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.title}>Operating Methodology</h2>
        
        <div style={styles.content}>
          <div style={styles.textPanel}>
            <div style={styles.stepIndicator}>
              Step {index + 1} of {steps.length}
            </div>
            <h3>{steps[index].title}</h3>
            <p>{steps[index].body}</p>
            
            <div style={styles.buttons}>
              <button
                onClick={() => setIndex(Math.max(0, index - 1))}
                disabled={index === 0}
                style={{ ...styles.btn, opacity: index === 0 ? 0.5 : 1 }}
              >
                ← Back
              </button>
              <button
                onClick={() => setIndex(Math.min(steps.length - 1, index + 1))}
                disabled={index === steps.length - 1}
                style={{ ...styles.btn, marginLeft: '10px', opacity: index === steps.length - 1 ? 0.5 : 1 }}
              >
                Next →
              </button>
            </div>
          </div>
          
          <div style={styles.illustrationPanel}>
            <svg viewBox="0 0 200 200" style={styles.placeholder}>
              <rect width="200" height="200" fill="#1e1e1e" />
              <text x="100" y="100" textAnchor="middle" fill="#666" fontSize="14">
                Animated illustration for:
              </text>
              <text x="100" y="120" textAnchor="middle" fill="#666" fontSize="14">
                {steps[index].title}
              </text>
            </svg>
          </div>
        </div>
        
        <button onClick={onClose} style={styles.closeBtn}>Close</button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 500
  },
  modal: {
    backgroundColor: '#2a2a2a',
    color: '#fff',
    padding: '40px',
    borderRadius: '12px',
    maxWidth: '800px',
    width: '90%',
    maxHeight: '80vh',
    overflow: 'auto',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
    border: '2px solid #ff6b6b'
  },
  title: {
    fontSize: '28px',
    marginBottom: '30px',
    textAlign: 'center',
    color: '#ff6b6b'
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px',
    marginBottom: '30px'
  },
  textPanel: {
    display: 'flex',
    flexDirection: 'column'
  },
  stepIndicator: {
    fontSize: '12px',
    color: '#999',
    marginBottom: '10px',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  illustrationPanel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  placeholder: {
    width: '100%',
    height: '200px'
  },
  buttons: {
    display: 'flex',
    marginTop: '20px',
    gap: '10px'
  },
  btn: {
    padding: '10px 20px',
    backgroundColor: '#ff6b6b',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s'
  },
  closeBtn: {
    display: 'block',
    margin: '0 auto',
    padding: '10px 30px',
    backgroundColor: '#666',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px'
  }
};
