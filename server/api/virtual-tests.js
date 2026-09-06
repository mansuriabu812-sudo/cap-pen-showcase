const express = require('express');
const router = express.Router();

// POST endpoint for virtual test requests
router.post('/', (req, res) => {
  try {
    const { substrate = 'PEEK', speed = 10, application = 'Superbug Inactivation' } = req.body || {};
    
    // Heuristic scoring system
    let score = 0;
    
    // Application scoring
    if (application === 'Superbug Inactivation') score += 40;
    if (application === 'Adhesion') score += 35;
    if (application === 'Cleaning') score += 30;
    
    // Substrate scoring
    if (substrate === 'PEEK') score += 25;
    if (substrate === 'Titanium') score += 22;
    if (substrate === 'PDMS') score += 20;
    if (substrate === 'Glass') score += 18;
    
    // Speed scoring
    if (speed >= 15 && speed <= 25) score += 25;
    if (speed >= 10 && speed < 15) score += 20;
    if (speed > 25 && speed <= 30) score += 18;
    if (speed < 10) score += 15;
    
    // Determine verdict
    let verdict;
    if (score > 80) {
      verdict = 'Highly feasible';
    } else if (score > 60) {
      verdict = 'Likely feasible';
    } else if (score > 40) {
      verdict = 'Marginal';
    } else {
      verdict = 'Unlikely';
    }
    
    // Generate recommendations
    const recommendations = [];
    
    if (speed < 15) {
      recommendations.push('Increase traverse speed to 15-20 mm/s for optimal plume coverage');
    }
    if (speed > 25) {
      recommendations.push('Consider reducing speed to 20-25 mm/s for better treatment uniformity');
    }
    if (substrate !== 'PEEK' && application === 'Superbug Inactivation') {
      recommendations.push('PEEK substrate recommended for superior durability in this application');
    }
    if (application === 'Adhesion' && substrate !== 'Titanium') {
      recommendations.push('Titanium substrate provides optimal adhesion improvements');
    }
    
    recommendations.push('Conduct small-scale pilot test before full deployment');
    recommendations.push('Monitor electrode voltage stability for consistent performance');
    
    res.json({
      feasibilityScore: score,
      verdict,
      recommendations,
      timestamp: new Date().toISOString(),
      input: {
        substrate,
        speed,
        application
      }
    });
  } catch (error) {
    console.error('Virtual test error:', error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
