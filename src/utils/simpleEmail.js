// Simple, working email solution
export const sendEmail = async (formData) => {
  console.log('📤 Sending email...', formData);

  // Method 1: Use mailto (always works)
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
