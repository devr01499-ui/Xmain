const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Email configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: 'devr01499@gmail.com',
    pass: 'dtgx rton ntaq gwqf' // App password
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, company, email, phone, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields' 
      });
    }

    // Email content
    const mailOptions = {
      from: 'devr01499@gmail.com',
      to: 'devr01499@gmail.com',
      subject: `New Contact Form Submission from ${name} - AdmirerX`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1565c0;">New Contact Form Submission</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Service Interest:</strong> ${service || 'Not specified'}</p>
          </div>
          
          <div style="background-color: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1565c0; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This message was sent from the Admirex website contact form.</p>
            <p>Reply directly to this email to respond to the customer.</p>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to customer
    const customerMailOptions = {
      from: 'devr01499@gmail.com',
      to: email,
      subject: 'Thank you for contacting AdmirerX',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1565c0;">Thank you for contacting AdmirerX!</h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for reaching out to us. We have received your message and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Message Summary</h3>
            <p><strong>Service Interest:</strong> ${service || 'Not specified'}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 10px; border-radius: 4px;">${message}</p>
          </div>
          
          <p>In the meantime, feel free to explore our services and learn more about how we can help your business grow.</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p>Best regards,<br>The AdmirerX Team</p>
            <p style="color: #666; font-size: 12px;">
              AdmirerX - Empowering businesses with smart BPO solutions<br>
              Email: devr01499@gmail.com
            </p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(customerMailOptions);

    res.json({ 
      success: true, 
      message: 'Message sent successfully! We will get back to you soon.' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'AdmirerX API is running!',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 AdmirerX Backend Server running on port ${PORT}`);
  console.log(`📧 Email service configured for: devr01499@gmail.com`);
  console.log(`🌐 Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;
