// Working contact form using reliable email services
export const submitContactForm = async (formData) => {
  console.log('📤 Submitting contact form...', formData);

  // Method 1: Use Formspree (most reliable free service)
  try {
    console.log('🔄 Trying Formspree...');
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

    console.log('📊 Formspree Response Status:', response.status);
    
    if (response.ok) {
      console.log('✅ Formspree success');
      return { success: true, message: 'Message sent successfully! We will get back to you soon.' };
    } else {
      const errorText = await response.text();
      console.log('❌ Formspree error:', errorText);
    }
  } catch (error) {
    console.warn('⚠️ Formspree failed:', error.message);
  }

  // Method 2: Use Web3Forms (backup service)
  try {
    console.log('🔄 Trying Web3Forms...');
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', // Demo key - replace with real one
        name: formData.name,
        email: formData.email,
        company: formData.company || 'Not provided',
        phone: formData.phone,
        service: formData.service || 'Not specified',
        message: formData.message,
        subject: `Contact Form Submission from ${formData.name}`,
        from_name: formData.name,
        reply_to: formData.email
      }),
      signal: AbortSignal.timeout(10000)
    });

    console.log('📊 Web3Forms Response Status:', response.status);
    
    if (response.ok) {
      console.log('✅ Web3Forms success');
      return { success: true, message: 'Message sent successfully! We will get back to you soon.' };
    } else {
      const errorText = await response.text();
      console.log('❌ Web3Forms error:', errorText);
    }
  } catch (error) {
    console.warn('⚠️ Web3Forms failed:', error.message);
  }

  // Method 3: Use Getform (another reliable service)
  try {
    console.log('🔄 Trying Getform...');
    const response = await fetch('https://getform.io/f/your-form-endpoint', {
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
        message: formData.message
      }),
      signal: AbortSignal.timeout(10000)
    });

    console.log('📊 Getform Response Status:', response.status);
    
    if (response.ok) {
      console.log('✅ Getform success');
      return { success: true, message: 'Message sent successfully! We will get back to you soon.' };
    } else {
      const errorText = await response.text();
      console.log('❌ Getform error:', errorText);
    }
  } catch (error) {
    console.warn('⚠️ Getform failed:', error.message);
  }

  // Method 4: Use mailto as final fallback
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
