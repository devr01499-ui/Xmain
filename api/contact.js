// Vercel serverless function for contact form
const TELEGRAM_BOT_TOKEN = '8366518884:AAHbdC4Kl_UyvLF4UD187ZU7Z2CUVqv3F2A';
const TELEGRAM_CHAT_ID = '1564118457';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('📨 [API] Contact form submission received');
    console.log('📨 [API] Request body:', JSON.stringify(req.body, null, 2));

    const { name, company, email, phone, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      console.error('❌ [API] Validation failed - missing required fields');
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields' 
      });
    }

    // Format message for Telegram
    const telegramMessage = `🚀 *New Contact Form Submission*

👤 *Name:* ${name}
🏢 *Company:* ${company || 'Not provided'}
📧 *Email:* ${email}
📞 *Phone:* ${phone}
🔧 *Service Interest:* ${service || 'Not specified'}

💬 *Message:*
${message}

---
📅 *Submitted:* ${new Date().toLocaleString()}
🌐 *Source:* AdmirerX Website`;

    console.log('📝 [API] Formatted Telegram message:', telegramMessage);

    // Send to Telegram
    const telegramResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'Markdown',
        disable_web_page_preview: true
      })
    });

    console.log('📊 [API] Telegram response status:', telegramResponse.status);

    if (telegramResponse.ok) {
      const telegramResult = await telegramResponse.json();
      console.log('✅ [API] Telegram message sent successfully:', telegramResult);
      
      return res.status(200).json({
        success: true,
        message: 'Your message has been sent successfully.'
      });
    } else {
      const errorData = await telegramResponse.json();
      console.error('❌ [API] Telegram API error:', errorData);
      
      return res.status(500).json({
        success: false,
        error: `Telegram API error: ${errorData.description || 'Unknown error'}`
      });
    }

  } catch (error) {
    console.error('❌ [API] Server error:', error);
    console.error('❌ [API] Error stack:', error.stack);
    
    return res.status(500).json({
      success: false,
      error: 'Something went wrong. Please try again.'
    });
  }
}
