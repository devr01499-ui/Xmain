const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function testContactFormEmail() {
  console.log('🧪 Testing Contact Form Email Delivery...');
  
  const testData = {
    name: 'Test User - Email Check',
    company: 'Test Company',
    email: 'devr01499@gmail.com', // Send to your email for testing
    phone: '+1234567890',
    service: 'customer-support',
    message: 'This is a test message to verify email delivery is working. Please confirm you received this email.'
  };

  console.log('📤 Test Data:', testData);

  try {
    // Test the production backend first
    console.log('🔄 Testing production backend...');
    const response = await fetch('https://admirerx-backend.vercel.app/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    console.log('📊 Response Status:', response.status);
    const result = await response.json();
    console.log('📋 Response Body:', JSON.stringify(result, null, 2));

    if (response.ok) {
      console.log('✅ Production backend responded successfully');
      console.log('📧 Check your email: devr01499@gmail.com');
    } else {
      console.log('❌ Production backend failed, trying Formspree...');
      
      // Try Formspree as backup
      const formspreeResponse = await fetch('https://formspree.io/f/xpwgkqyz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: testData.name,
          email: testData.email,
          company: testData.company,
          phone: testData.phone,
          service: testData.service,
          message: testData.message,
          _subject: `Contact Form Test from ${testData.name}`,
          _replyto: testData.email
        }),
      });

      console.log('📊 Formspree Status:', formspreeResponse.status);
      if (formspreeResponse.ok) {
        console.log('✅ Formspree backup worked');
        console.log('📧 Check your email: devr01499@gmail.com');
      } else {
        console.log('❌ Both services failed');
      }
    }

  } catch (error) {
    console.error('💥 Test Error:', error.message);
  }
}

testContactFormEmail();
