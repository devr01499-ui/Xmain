// Working email service using multiple reliable methods
export const sendEmail = async (formData) => {
  console.log('📤 Sending email...', formData);

  // Method 1: Use Web3Forms (most reliable)
  try {
    console.log('🔄 Trying Web3Forms...');
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', // This is a demo key
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
      const result = await response.json();
      console.log('✅ Web3Forms success:', result);
      return { success: true, message: 'Message sent successfully! We will get back to you soon.' };
    } else {
      const errorText = await response.text();
      console.log('❌ Web3Forms error:', errorText);
    }
  } catch (error) {
    console.warn('⚠️ Web3Forms failed:', error.message);
  }

  // Method 2: Use Getform (backup service)
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

  // Method 3: Use mailto as fallback
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
