// Simple and reliable Telegram bot integration
const TELEGRAM_BOT_TOKEN = '8366518884:AAHbdC4Kl_UyvLF4UD187ZU7Z2CUVqv3F2A';
const TELEGRAM_CHAT_ID = '1564118457';

// Send message to Telegram
export const sendToTelegram = async (formData) => {
  console.log('📱 Sending message to Telegram...', formData);

  try {
    // Format the message with better error handling
    const message = `🚀 *New Contact Form Submission*

👤 *Name:* ${formData.name || 'Not provided'}
🏢 *Company:* ${formData.company || 'Not provided'}
📧 *Email:* ${formData.email || 'Not provided'}
📞 *Phone:* ${formData.phone || 'Not provided'}
🔧 *Service Interest:* ${formData.service || 'Not specified'}

💬 *Message:*
${formData.message || 'No message provided'}

---
📅 *Submitted:* ${new Date().toLocaleString()}
🌐 *Source:* AdmirerX Website`.trim();

    console.log('📝 Formatted message:', message);

    // Send to Telegram with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

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
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);
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
      return {
        success: false,
        message: `Telegram API error: ${errorData.description || 'Unknown error'}`
      };
    }
    
  } catch (error) {
    console.error('❌ Telegram send error:', error);
    if (error.name === 'AbortError') {
      return {
        success: false,
        message: 'Request timed out. Please try again.'
      };
    }
    return {
      success: false,
      message: `Failed to send message: ${error.message}`
    };
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
