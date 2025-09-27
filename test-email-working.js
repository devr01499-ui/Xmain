const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function testWorkingEmail() {
  console.log('🧪 Testing Working Email Service...');
  
  const testData = {
    name: 'Test User - Email Verification',
    company: 'Test Company',
    email: 'devr01499@gmail.com',
    phone: '+1234567890',
    service: 'customer-support',
    message: 'This is a test message to verify email delivery is working. Please confirm you received this email at devr01499@gmail.com'
  };

  console.log('📤 Test Data:', testData);

  try {
    // Test Formspree directly
    console.log('🔄 Testing Formspree directly...');
    const response = await fetch('https://formspree.io/f/xpwgkqyz', {
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

    console.log('📊 Response Status:', response.status);
    console.log('📊 Response Headers:', Object.fromEntries(response.headers.entries()));

    if (response.ok) {
      const result = await response.json();
      console.log('✅ Formspree SUCCESS!');
      console.log('📧 Check your email: devr01499@gmail.com');
      console.log('📋 Response:', result);
    } else {
      const errorText = await response.text();
      console.log('❌ Formspree FAILED!');
      console.log('📋 Error Response:', errorText);
    }

  } catch (error) {
    console.error('💥 Test Error:', error.message);
  }
}

testWorkingEmail();
