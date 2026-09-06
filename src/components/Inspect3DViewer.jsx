import React, { useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import gsap from 'gsap';

function Hotspot({ position, label, onClick }) {
  return (
    <mesh position={position} onClick={onClick}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshBasicMaterial color="#ff6b6b" wireframe />
      <sprite position={[0, 2.5, 0]}>
        <spriteMaterial>
          <canvasTexture attach="map" />
        </spriteMaterial>
      </sprite>
    </mesh>
  );
}

function ModelScene({ modelUrl }) {
  const group = useRef();
  try {
    const { scene } = useGLTF(modelUrl);
    return <primitive ref={group} object={scene} />;
  } catch (err) {
    return (
      <mesh>
        <boxGeometry args={[20, 30, 10]} />
        <meshPhongMaterial color="#8b7355" />
      </mesh>
    );
  }
}

export default function Inspect3DViewer({ modelUrl = '/models/placeholder_pen.glb', hotspots = [], onClose, onSelect }) {
  const [selected, setSelected] = useState(null);
  const cameraRef = useRef();

  const flyTo = (targetPos = [0, 0, 0], duration = 1.2) => {
    const cam = cameraRef.current;
    if (!cam) return;
    
    const dest = {
      x: targetPos[0] + 120,
      y: targetPos[1] + 40,
      z: targetPos[2] + 120
    };
    
    gsap.to(cam.position, {
      x: dest.x,
      y: dest.y,
      z: dest.z,
      duration,
      onUpdate: () => cam.lookAt(targetPos[0], targetPos[1], targetPos[2])
    });
  };

  return (
    <div style={styles.container}>
      <button onClick={onClose} style={styles.closeBtn}>✕ Close</button>
      
      <Canvas
        camera={{ position: [150, 50, 150], fov: 45 }}
        style={styles.canvas}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[100, 100, 100]} intensity={0.8} />
        <pointLight position={[-100, 50, -100]} intensity={0.5} color="#fff" />
        
        <ModelScene modelUrl={modelUrl} />
        
        {hotspots.map((h, idx) => (
          <Hotspot
            key={idx}
            position={h.position}
            label={h.name}
            onClick={() => {
              flyTo(h.position);
              setSelected(h);
              onSelect && onSelect(h);
            }}
          />
        ))}
        
        <OrbitControls
          ref={cameraRef}
          autoRotate
          autoRotateSpeed={2}
          enableZoom
          enablePan
        />
      </Canvas>

      {selected && (
        <div style={styles.specPanel}>
          <h3>{selected.name}</h3>
          <div dangerouslySetInnerHTML={{ __html: selected.specHtml }} />
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    zIndex: 1000,
    display: 'flex'
  },
  canvas: {
    flex: 1
  },
  closeBtn: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1001,
    padding: '10px 15px',
    backgroundColor: '#ff6b6b',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  specPanel: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    color: '#fff',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '300px',
    border: '2px solid #ff6b6b',
    fontFamily: 'monospace',
    fontSize: '13px'
  }
};
