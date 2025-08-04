const axios = require('axios');

async function addINRCurrency() {
  try {
    console.log('🔐 Logging into Medusa Admin...');
    
    // Login to get admin token
    const loginResponse = await axios.post('http://localhost:9000/admin/auth/token', {
      email: 'admin@medusa-test.com', // Replace with your admin email
      password: 'supersecret' // Replace with your admin password
    });
    
    const token = loginResponse.data.access_token;
    console.log('✅ Login successful');
    
    // Get current store configuration
    console.log('📋 Getting current store configuration...');
    const storeResponse = await axios.get('http://localhost:9000/admin/store', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    
    const store = storeResponse.data.store;
    console.log('Current currencies:', store.currencies);
    
    // Check if INR already exists
    const hasINR = store.currencies.some(currency => currency.code === 'inr');
    
    if (hasINR) {
      console.log('✅ INR currency already exists in store');
      return;
    }
    
    // Add INR to supported currencies
    console.log('💰 Adding INR currency...');
    const updatedCurrencies = [
      ...store.currencies.map(c => c.code),
      'inr'
    ];
    
    const updateResponse = await axios.post(`http://localhost:9000/admin/store`, {
      currencies: updatedCurrencies
    }, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    
    console.log('✅ INR currency added successfully!');
    console.log('Updated store currencies:', updateResponse.data.store.currencies);
    
  } catch (error) {
    console.error('❌ Error:', error.response?.data || error.message);
  }
}

addINRCurrency();
