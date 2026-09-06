import React, { useState } from 'react';

export default function VirtualTestModal({ onClose }) {
  const [form, setForm] = useState({
    substrate: 'PEEK',
    speed: 10,
    application: 'Superbug Inactivation'
  });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/virtual-tests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const json = await res.json();
      setResult(json);
    } catch (err) {
      setResult({ error: err.message || 'Network error' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.title}>Request Virtual Test</h2>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label>Substrate</label>
            <select
              value={form.substrate}
              onChange={(e) => setForm({ ...form, substrate: e.target.value })}
              style={styles.input}
            >
              <option>PEEK</option>
              <option>Titanium</option>
              <option>PDMS</option>
              <option>Glass</option>
            </select>
          </div>
          
          <div style={styles.formGroup}>
            <label>Process Speed (mm/s)</label>
            <input
              type="number"
              min="5"
              max="30"
              value={form.speed}
              onChange={(e) => setForm({ ...form, speed: +e.target.value })}
              style={styles.input}
            />
          </div>
          
          <div style={styles.formGroup}>
            <label>Target Application</label>
            <select
              value={form.application}
              onChange={(e) => setForm({ ...form, application: e.target.value })}
              style={styles.input}
            >
              <option>Superbug Inactivation</option>
              <option>Adhesion</option>
              <option>Cleaning</option>
            </select>
          </div>
          
          <div style={styles.buttons}>
            <button type="button" onClick={onClose} style={styles.cancelBtn}>
              Cancel
            </button>
            <button type="submit" disabled={submitting} style={styles.submitBtn}>
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>

        {result && (
          <div style={styles.resultPanel}>
            <h3>Feasibility Assessment Preview</h3>
            <pre style={styles.resultContent}>
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
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
    maxWidth: '500px',
    width: '90%',
    maxHeight: '80vh',
    overflow: 'auto',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
    border: '2px solid #ff6b6b'
  },
  title: {
    fontSize: '24px',
    marginBottom: '25px',
    textAlign: 'center',
    color: '#ff6b6b'
  },
  form: {
    marginBottom: '25px'
  },
  formGroup: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #555',
    backgroundColor: '#1e1e1e',
    color: '#fff',
    fontSize: '14px',
    marginTop: '5px'
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    marginTop: '25px'
  },
  cancelBtn: {
    padding: '10px 20px',
    backgroundColor: '#666',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold'
  },
  submitBtn: {
    padding: '10px 20px',
    backgroundColor: '#ff6b6b',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold'
  },
  resultPanel: {
    backgroundColor: '#1e1e1e',
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #444',
    marginTop: '20px'
  },
  resultContent: {
    backgroundColor: '#000',
    color: '#0f0',
    padding: '15px',
    borderRadius: '4px',
    fontSize: '12px',
    overflow: 'auto',
    maxHeight: '200px',
    fontFamily: 'monospace'
  }
};
