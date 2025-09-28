// Simple and reliable Telegram bot integration
const TELEGRAM_BOT_TOKEN = '8328726742:AAF9oqzuktH2xQJtdRVAjdYMe0-NUHAilTo';
const TELEGRAM_CHAT_ID = '8328726742'; // You can change this to your actual chat ID

// Send message to Telegram
export const sendToTelegram = async (formData) => {
  console.log('📱 Sending message to Telegram...', formData);

  try {
    // Format the message
    const message = `
🚀 *New Contact Form Submission*

👤 *Name:* ${formData.name}
🏢 *Company:* ${formData.company || 'Not provided'}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone}
🔧 *Service Interest:* ${formData.service || 'Not specified'}

💬 *Message:*
${formData.message}

---
📅 *Submitted:* ${new Date().toLocaleString()}
🌐 *Source:* AdmirerX Website
    `.trim();

    // Send to Telegram
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
        disable_web_page_preview: true
      })
    });

    console.log('📊 Telegram Response Status:', response.status);
    
    if (response.ok) {
      const result = await response.json();
      console.log('✅ Telegram message sent successfully:', result);
      return { 
        success: true, 
        message: 'Message sent successfully! We will get back to you soon via Telegram.' 
      };
    } else {
      const errorData = await response.json();
      console.error('❌ Telegram API error:', errorData);
      throw new Error(`Telegram API error: ${errorData.description || 'Unknown error'}`);
    }
    
  } catch (error) {
    console.error('❌ Telegram send error:', error);
    throw new Error(`Failed to send message: ${error.message}`);
  }
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
