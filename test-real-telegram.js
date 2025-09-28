// Test script with your actual Telegram bot details
const TELEGRAM_BOT_TOKEN = '8366518884:AAHbdC4Kl_UyvLF4UD187ZU7Z2CUVqv3F2A';
const TELEGRAM_CHAT_ID = '1564118457';

// Test form data
const testFormData = {
  name: 'AdmirerX Test User',
  company: 'AdmirerX Test Company',
  email: 'test@admirerx.com',
  phone: '+1 (555) 123-4567',
  service: 'custom-website',
  message: 'This is a test message from the AdmirerX website contact form. Testing Telegram integration with @myadmirerxbot! 🚀'
};

console.log('🚀 Testing Telegram Integration with @myadmirerxbot...');
console.log('📱 Bot: @myadmirerxbot');
console.log('🆔 Chat ID:', TELEGRAM_CHAT_ID);
console.log('📊 Test Data:', testFormData);

// Send to Telegram
async function sendToTelegram() {
  try {
    console.log('\n📤 Sending message to Telegram...');
    
    const message = `🚀 *New Contact Form Submission*

👤 *Name:* ${testFormData.name}
🏢 *Company:* ${testFormData.company || 'Not provided'}
📧 *Email:* ${testFormData.email}
📞 *Phone:* ${testFormData.phone}
🔧 *Service Interest:* ${testFormData.service || 'Not specified'}

💬 *Message:*
${testFormData.message}

---
📅 *Submitted:* ${new Date().toLocaleString()}
🌐 *Source:* AdmirerX Website`;

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
      console.log('✅ SUCCESS! Message sent to @myadmirerxbot');
      console.log('📱 Check your Telegram for the message');
      console.log('🎉 Telegram integration is working perfectly!');
    } else {
      const errorData = await response.json();
      console.error('❌ Telegram API error:', errorData);
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

sendToTelegram();
