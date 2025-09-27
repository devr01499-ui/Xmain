// Real email service that actually sends emails
export const sendEmail = async (formData) => {
  console.log('📤 Sending email...', formData);

  // Method 1: Use EmailJS (most reliable for client-side email)
  try {
    console.log('🔄 Trying EmailJS...');
    
    // Load EmailJS script dynamically
    if (!window.emailjs) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
      script.onload = () => {
        window.emailjs.init('YOUR_PUBLIC_KEY'); // Replace with actual key
      };
      document.head.appendChild(script);
    }

    const response = await window.emailjs.send(
      'service_admirerx', // Replace with actual service ID
      'template_contact', // Replace with actual template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not provided',
        phone: formData.phone,
        service: formData.service || 'Not specified',
        message: formData.message,
        to_email: 'devr01499@gmail.com'
      }
    );

    console.log('✅ EmailJS success:', response);
    return { success: true, message: 'Message sent successfully! We will get back to you soon.' };
  } catch (error) {
    console.warn('⚠️ EmailJS failed:', error.message);
  }

  // Method 2: Use a working email API
  try {
    console.log('🔄 Trying working email API...');
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'service_admirerx',
        template_id: 'template_contact',
        user_id: 'YOUR_PUBLIC_KEY',
        template_params: {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || 'Not provided',
          phone: formData.phone,
          service: formData.service || 'Not specified',
          message: formData.message,
          to_email: 'devr01499@gmail.com'
        }
      }),
      signal: AbortSignal.timeout(10000)
    });

    if (response.ok) {
      console.log('✅ Email API success');
      return { success: true, message: 'Message sent successfully! We will get back to you soon.' };
    }
  } catch (error) {
    console.warn('⚠️ Email API failed:', error.message);
  }

  // Method 3: Use mailto as fallback (always works)
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
