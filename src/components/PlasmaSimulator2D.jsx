import React, { useRef, useState, useEffect } from 'react';

export default function PlasmaSimulator2D() {
  const canvasRef = useRef();
  const [gap, setGap] = useState(5);
  const [speed, setSpeed] = useState(10);
  const [substrate, setSubstrate] = useState('PEEK');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const W = 700;
    const H = 260;
    
    canvas.width = W;
    canvas.height = H;
    ctx.clearRect(0, 0, W, H);

    // Visual heuristics based on parameters
    const sigma = Math.max(8, 30 - gap * 1.5);
    const amplitude = Math.min(1.0, 0.5 + (15 - speed) * 0.02 + (15 - gap) * 0.02);

    // Substrate area
    ctx.fillStyle = '#f5f5f5';
    ctx.fillRect(0, H - 44, W, 44);
    ctx.fillStyle = '#222';
    ctx.font = '12px monospace';
    ctx.fillText(`${substrate} — Gap ${gap}mm — Speed ${speed}mm/s`, 12, H - 18);

    // Plume center
    const centerY = H / 2 - 10;
    
    // Draw plume with Gaussian spread
    for (let x = 0; x < W; x++) {
      for (let y = 0; y < H - 44; y++) {
        const dx = Math.abs(x - 50);
        const dy = Math.abs(y - centerY);
        const distance = Math.sqrt(dx * dx + dy * dy);
        const intensity = amplitude * Math.exp(-(distance * distance) / (2 * sigma * sigma));
        
        if (intensity > 0.1) {
          const alpha = Math.min(1, intensity);
          ctx.fillStyle = `rgba(255, 100, 100, ${alpha * 0.6})`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }

    // Draw nozzle
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(50, centerY, 3, 0, Math.PI * 2);
    ctx.stroke();

    // Labels
    ctx.fillStyle = '#666';
    ctx.font = '11px sans-serif';
    ctx.fillText('Nozzle', 20, centerY - 15);
    ctx.fillText('Plasma Plume', 100, centerY - 30);
    ctx.fillText('Substrate', 50, H - 10);
  }, [gap, speed, substrate]);

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>2D Plasma Simulator</h2>
      <div style={styles.container}>
        <div style={styles.canvasContainer}>
          <canvas ref={canvasRef} style={styles.canvas} />
        </div>
        
        <div style={styles.controls}>
          <div style={styles.control}>
            <label>Standoff Gap: <strong>{gap} mm</strong></label>
            <input
              type="range"
              min="2"
              max="15"
              value={gap}
              onChange={(e) => setGap(+e.target.value)}
              style={styles.slider}
            />
          </div>
          
          <div style={styles.control}>
            <label>Traverse Speed: <strong>{speed} mm/s</strong></label>
            <input
              type="range"
              min="5"
              max="30"
              value={speed}
              onChange={(e) => setSpeed(+e.target.value)}
              style={styles.slider}
            />
          </div>
          
          <div style={styles.control}>
            <label>Substrate</label>
            <select
              value={substrate}
              onChange={(e) => setSubstrate(e.target.value)}
              style={styles.select}
            >
              <option>PEEK</option>
              <option>Titanium</option>
              <option>PDMS</option>
              <option>Glass</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '60px 20px',
    backgroundColor: '#fff'
  },
  heading: {
    fontSize: '32px',
    marginBottom: '40px',
    textAlign: 'center',
    color: '#333'
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '30px',
    maxWidth: '1000px',
    margin: '0 auto',
    alignItems: 'start'
  },
  canvasContainer: {
    backgroundColor: '#fafafa',
    borderRadius: '8px',
    padding: '20px',
    border: '2px solid #e0e0e0'
  },
  canvas: {
    width: '100%',
    height: 'auto',
    display: 'block'
  },
  controls: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px'
  },
  control: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  slider: {
    width: '100%',
    height: '6px',
    borderRadius: '3px',
    background: '#ddd',
    outline: 'none',
    WebkitAppearance: 'slider-horizontal'
  },
  select: {
    padding: '8px 12px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '14px',
    backgroundColor: '#fff',
    cursor: 'pointer'
  }
};
