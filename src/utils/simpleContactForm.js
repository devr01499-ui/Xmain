// Simple, reliable contact form using multiple fallback methods
export const submitContactForm = async (formData) => {
  console.log('📤 Submitting contact form...', formData);

  // Method 1: Try our backend first
  try {
    const response = await fetch('https://admirerx-backend.vercel.app/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      signal: AbortSignal.timeout(5000) // 5 second timeout
    });

    if (response.ok) {
      const result = await response.json();
      console.log('✅ Backend success:', result);
      return { success: true, message: result.message || 'Message sent successfully!' };
    }
  } catch (error) {
    console.warn('⚠️ Backend failed:', error.message);
  }

  // Method 2: Use Formspree (free service)
  try {
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
      signal: AbortSignal.timeout(5000)
    });

    if (response.ok) {
      console.log('✅ Formspree success');
      return { success: true, message: 'Message sent successfully! We will get back to you soon.' };
    }
  } catch (error) {
    console.warn('⚠️ Formspree failed:', error.message);
  }

  // Method 3: Use Netlify Forms (if deployed on Netlify)
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'form-name': 'contact',
        name: formData.name,
        email: formData.email,
        company: formData.company || 'Not provided',
        phone: formData.phone,
        service: formData.service || 'Not specified',
        message: formData.message
      }),
      signal: AbortSignal.timeout(5000)
    });

    if (response.ok) {
      console.log('✅ Netlify Forms success');
      return { success: true, message: 'Message sent successfully! We will get back to you soon.' };
    }
  } catch (error) {
    console.warn('⚠️ Netlify Forms failed:', error.message);
  }

  // Method 4: Use mailto as final fallback
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

  const mailtoUrl = `mailto:Management@admirerx.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  // Open mailto in new tab
  window.open(mailtoUrl, '_blank');
  
  return { 
    success: true, 
    message: 'Email client opened. Please send the email manually to Management@admirerx.net' 
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
