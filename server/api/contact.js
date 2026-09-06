const express = require('express');
const router = express.Router();

// POST endpoint for contact form submissions
router.post('/', (req, res) => {
  try {
    const { name, email, phone, company, inquiryType, message } = req.body;
    
    // Validation
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
    
    // In production, send email via SMTP
    // For now, log to console and return success
    console.log('\n📧 New Contact Inquiry:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone || 'Not provided'}`);
    console.log(`Company: ${company || 'Not provided'}`);
    console.log(`Type: ${inquiryType}`);
    console.log(`Message: ${message}\n`);
    
    // Simulate processing
    const ticketId = `TICKET-${Date.now()}`;
    
    res.json({
      success: true,
      message: 'Inquiry submitted successfully',
      ticketId,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
