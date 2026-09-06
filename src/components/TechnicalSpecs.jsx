import React from 'react';

const specs = [
  { component: 'HV Electrode', spec: '5–10 kV, pulsed' },
  { component: 'Dielectric Quartz Tube', spec: 'Borosilicate, dielectric barrier' },
  { component: 'Micro-Nozzle', spec: '0.5 mm aperture' },
  { component: 'Gas Inlet', spec: 'Ar/He blends' },
  { component: 'Standoff Range', spec: '2–15 mm' },
  { component: 'Traverse Speed', spec: '5–30 mm/s' },
  { component: 'Output Power', spec: '~10–50 W' },
  { component: 'Gas Flow Rate', spec: '5–20 L/min' }
];

export default function TechnicalSpecs() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Technical Specifications</h2>
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.headerRow}>
                <th style={styles.headerCell}>Component / Parameter</th>
                <th style={styles.headerCell}>Specification</th>
              </tr>
            </thead>
            <tbody>
              {specs.map((item, idx) => (
                <tr key={idx} style={idx % 2 === 0 ? styles.rowEven : styles.rowOdd}>
                  <td style={styles.cell}>{item.component}</td>
                  <td style={styles.cell}>{item.spec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div style={styles.notes}>
          <h3>Safety & Compliance</h3>
          <ul style={styles.list}>
            <li>Non-thermal operation preserves material integrity</li>
            <li>Biocompatible for medical applications</li>
            <li>Meets electrical safety standards (IEC 60601)</li>
            <li>CE marked for European markets</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '60px 20px',
    backgroundColor: '#f9f9f9'
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto'
  },
  heading: {
    fontSize: '32px',
    marginBottom: '40px',
    textAlign: 'center',
    color: '#333'
  },
  tableWrapper: {
    overflowX: 'auto',
    marginBottom: '40px'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
  },
  headerRow: {
    backgroundColor: '#ff6b6b'
  },
  headerCell: {
    padding: '15px',
    textAlign: 'left',
    color: '#fff',
    fontWeight: 'bold',
    borderRight: '1px solid #e0e0e0'
  },
  rowEven: {
    backgroundColor: '#f9f9f9'
  },
  rowOdd: {
    backgroundColor: '#fff'
  },
  cell: {
    padding: '15px',
    borderRight: '1px solid #e0e0e0',
    borderBottom: '1px solid #e0e0e0',
    fontSize: '14px'
  },
  notes: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
  },
  list: {
    listStyle: 'none',
    paddingLeft: 0,
    marginTop: '15px'
  }
};
