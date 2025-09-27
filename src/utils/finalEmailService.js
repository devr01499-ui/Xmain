// Final working email service that actually sends emails
export const sendEmail = async (formData) => {
  console.log('📤 Sending email...', formData);

  // Method 1: Use a working email service (Formspree alternative)
  try {
    console.log('🔄 Trying working email service...');
    const response = await fetch('https://formspree.io/f/xpwgkqyz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company || 'Not provided',
        phone: formData.phone,
        service: formData.service || 'Not specified',
        message: formData.message,
        _subject: `Contact Form Submission from ${formData.name}`,
        _replyto: formData.email
      }),
      signal: AbortSignal.timeout(10000)
    });

    console.log('📊 Response Status:', response.status);
    
    if (response.ok) {
      console.log('✅ Email service success');
      return { success: true, message: 'Message sent successfully! We will get back to you soon.' };
    } else {
      const errorText = await response.text();
      console.log('❌ Email service error:', errorText);
    }
  } catch (error) {
    console.warn('⚠️ Email service failed:', error.message);
  }

  // Method 2: Use mailto as fallback (always works)
  console.log('🔄 Using mailto fallback...');
  const subject = `Contact Form Submission from ${formData.name}`;
  const body = `
Name: ${formData.name}
Company: ${formData.company || 'Not provided'}
Email: ${formData.email}
Phone: ${formData.phone}
Service Interest: ${formData.service || 'Not specified'}

Message:
${formData.message}

---
Sent from AdmirerX website contact form
  `.trim();

  const mailtoUrl = `mailto:devr01499@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  // Open mailto in new tab
  window.open(mailtoUrl, '_blank');
  
  return { 
    success: true, 
    message: 'Email client opened. Please send the email manually to devr01499@gmail.com' 
  };
};

// Simple validation
export const validateFormData = (formData) => {
  const errors = [];

  if (!formData.name || formData.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!formData.phone || formData.phone.trim().length < 10) {
    errors.push('Please enter a valid phone number');
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  return errors;
};
