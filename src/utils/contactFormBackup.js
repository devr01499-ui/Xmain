// Backup contact form using EmailJS as fallback
export const sendEmailViaBackup = async (formData) => {
  try {
    // Using a simple fetch to a public API that can send emails
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'service_admirerx',
        template_id: 'template_contact',
        user_id: 'user_admirerx',
        template_params: {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || 'Not provided',
          phone: formData.phone,
          service: formData.service || 'Not specified',
          message: formData.message,
          to_email: 'Management@admirerx.net'
        }
      })
    });

    if (response.ok) {
      return { success: true, message: 'Message sent via backup service!' };
    } else {
      throw new Error('Backup service failed');
    }
  } catch (error) {
    console.error('Backup email service failed:', error);
    throw error;
  }
};

// Alternative: Send to a webhook service
export const sendEmailViaWebhook = async (formData) => {
  try {
    const webhookUrl = 'https://hooks.zapier.com/hooks/catch/1234567890/abcdefghijklmnop/';
    
    const response = await fetch(webhookUrl, {
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
        timestamp: new Date().toISOString()
      })
    });

    if (response.ok) {
      return { success: true, message: 'Message sent via webhook!' };
    } else {
      throw new Error('Webhook service failed');
    }
  } catch (error) {
    console.error('Webhook service failed:', error);
    throw error;
  }
};

// Simple mailto fallback
export const sendEmailViaMailto = (formData) => {
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
  
  window.open(mailtoUrl, '_blank');
  
  return { success: true, message: 'Opened email client. Please send the email manually.' };
};
