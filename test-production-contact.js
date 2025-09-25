const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const testProductionContactForm = async () => {
  const testData = {
    name: 'Production Test User',
    email: 'test@admirerx.com',
    phone: '+1234567890',
    company: 'AdmirerX Test Company',
    service: 'custom-website',
    message: 'This is a production test to verify the enhanced contact form system is working properly with all optimizations.'
  };

  try {
    console.log('🚀 Testing PRODUCTION contact form...');
    console.log('📧 Sending test data:', testData);
    
    const startTime = Date.now();
    
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });

    const result = await response.json();
    const processingTime = Date.now() - startTime;
    
    if (response.ok) {
      console.log('✅ PRODUCTION contact form test SUCCESSFUL!');
      console.log('📨 Response:', result);
      console.log(`⏱️  Processing time: ${processingTime}ms`);
    } else {
      console.log('❌ PRODUCTION contact form test FAILED!');
      console.log('📨 Error:', result);
      console.log(`⏱️  Processing time: ${processingTime}ms`);
    }
  } catch (error) {
    console.log('❌ PRODUCTION contact form test ERROR:', error.message);
  }
};

testProductionContactForm();
