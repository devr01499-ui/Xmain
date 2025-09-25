const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enhanced CORS configuration for production
const corsOptions = {
  origin: [
    'https://admirerx.vercel.app',
    'https://www.admirerx.vercel.app',
    'https://admirerx.net',
    'https://www.admirerx.net',
    'http://localhost:3000',
    'http://localhost:3001'
  ],
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// Request logging for production monitoring
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Enhanced email configuration for production reliability
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'devr01499@gmail.com',
    pass: 'dtgx rton ntaq gwqf' // App password
  },
  pool: true, // Use connection pooling
  maxConnections: 5, // Maximum number of connections
  maxMessages: 100, // Maximum number of messages per connection
  rateLimit: 10, // Maximum number of messages per second
  secure: true, // Use TLS
  tls: {
    rejectUnauthorized: false
  }
});

// Verify email configuration on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email configuration error:', error);
  } else {
    console.log('✅ Email server is ready to send messages');
  }
});

// Contact form endpoint with enhanced validation and error handling
app.post('/api/contact', async (req, res) => {
  const startTime = Date.now();
  
  try {
    const { name, company, email, phone, service, message } = req.body;

    // Enhanced validation
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields' 
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please enter a valid email address' 
      });
    }

    // Phone format validation
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please enter a valid phone number' 
      });
    }

    // Sanitize inputs
    const sanitizedName = name.trim().substring(0, 100);
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedPhone = phone.trim();
    const sanitizedCompany = company ? company.trim().substring(0, 100) : '';
    const sanitizedService = service ? service.trim() : '';
    const sanitizedMessage = message.trim().substring(0, 2000);

    // Email content with sanitized data
    const mailOptions = {
      from: 'devr01499@gmail.com',
      to: 'devr01499@gmail.com',
      subject: `New Contact Form Submission from ${sanitizedName} - AdmirerX`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1565c0;">New Contact Form Submission</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${sanitizedName}</p>
            <p><strong>Company:</strong> ${sanitizedCompany || 'Not provided'}</p>
            <p><strong>Email:</strong> ${sanitizedEmail}</p>
            <p><strong>Phone:</strong> ${sanitizedPhone}</p>
            <p><strong>Service Interest:</strong> ${sanitizedService || 'Not specified'}</p>
            <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background-color: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1565c0; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${sanitizedMessage}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This message was sent from the AdmirerX website contact form.</p>
            <p>Reply directly to this email to respond to the customer.</p>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to customer with sanitized data
    const customerMailOptions = {
      from: 'devr01499@gmail.com',
      to: sanitizedEmail,
      subject: 'Thank you for contacting AdmirerX',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1565c0;">Thank you for contacting AdmirerX!</h2>
          
          <p>Dear ${sanitizedName},</p>
          
          <p>Thank you for reaching out to us. We have received your message and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Message Summary</h3>
            <p><strong>Service Interest:</strong> ${sanitizedService || 'Not specified'}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 10px; border-radius: 4px;">${sanitizedMessage}</p>
          </div>
          
          <p>In the meantime, feel free to explore our services and learn more about how we can help your business grow.</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p>Best regards,<br>The AdmirerX Team</p>
            <p style="color: #666; font-size: 12px;">
              AdmirerX - Empowering businesses with smart BPO solutions<br>
              Email: Management@admirerx.net
            </p>
          </div>
        </div>
      `
    };

    // Send both emails in parallel for faster processing
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(customerMailOptions)
    ]);

    const processingTime = Date.now() - startTime;
    console.log(`✅ Contact form processed in ${processingTime}ms for ${sanitizedEmail}`);

    res.json({ 
      success: true, 
      message: 'Message sent successfully! We will get back to you soon.',
      processingTime: `${processingTime}ms`
    });

  } catch (error) {
    const processingTime = Date.now() - startTime;
    console.error(`❌ Contact form error after ${processingTime}ms:`, error);
    
    // Enhanced error handling with specific error types
    if (error.code === 'EAUTH') {
      return res.status(500).json({ 
        success: false, 
        message: 'Email authentication failed. Please contact support.' 
      });
    } else if (error.code === 'ECONNECTION') {
      return res.status(500).json({ 
        success: false, 
        message: 'Connection error. Please try again in a moment.' 
      });
    } else if (error.responseCode === 550) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email address. Please check and try again.' 
      });
    } else {
      return res.status(500).json({ 
        success: false, 
        message: 'Failed to send message. Please try again later.' 
      });
    }
  }
});

// Enhanced health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'AdmirerX API is running!',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    version: '1.0.0'
  });
});

// Rate limiting for contact form (simple implementation)
const contactAttempts = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_ATTEMPTS = 5; // 5 attempts per IP per window

app.use('/api/contact', (req, res, next) => {
  const clientIP = req.ip || req.connection.remoteAddress;
  const now = Date.now();
  
  if (!contactAttempts.has(clientIP)) {
    contactAttempts.set(clientIP, []);
  }
  
  const attempts = contactAttempts.get(clientIP);
  const recentAttempts = attempts.filter(time => now - time < RATE_LIMIT_WINDOW);
  
  if (recentAttempts.length >= MAX_ATTEMPTS) {
    return res.status(429).json({
      success: false,
      message: 'Too many contact form submissions. Please try again later.'
    });
  }
  
  attempts.push(now);
  contactAttempts.set(clientIP, attempts);
  next();
});

// Cleanup old rate limit entries every hour
setInterval(() => {
  const now = Date.now();
  for (const [ip, attempts] of contactAttempts.entries()) {
    const recentAttempts = attempts.filter(time => now - time < RATE_LIMIT_WINDOW);
    if (recentAttempts.length === 0) {
      contactAttempts.delete(ip);
    } else {
      contactAttempts.set(ip, recentAttempts);
    }
  }
}, 60 * 60 * 1000); // Every hour

// Start server
app.listen(PORT, () => {
  console.log(`🚀 AdmirerX Backend Server running on port ${PORT}`);
  console.log(`📧 Email service configured for: devr01499@gmail.com`);
  console.log(`🌐 Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;
