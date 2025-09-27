const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function testContactForm() {
  console.log('🧪 Testing Contact Form Locally...');
  
  const testData = {
    name: 'Test User',
    company: 'Test Company',
    email: 'test@example.com',
    phone: '+1234567890',
    service: 'customer-support',
    message: 'This is a test message from local test script.'
  };

  try {
    console.log('📤 Sending test data to local backend...');
    
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    console.log('📊 Response Status:', response.status);
    console.log('📊 Response Headers:', Object.fromEntries(response.headers.entries()));

    const result = await response.json();
    console.log('📋 Response Body:', JSON.stringify(result, null, 2));

    if (response.ok) {
      console.log('✅ Contact form test PASSED!');
    } else {
      console.log('❌ Contact form test FAILED!');
    }

  } catch (error) {
    console.error('💥 Test Error:', error.message);
    console.error('🔍 Full Error:', error);
  }
}

// Wait a moment for server to start
setTimeout(testContactForm, 3000);
