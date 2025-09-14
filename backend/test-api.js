#!/usr/bin/env node

// Simple API test script
const http = require('http');

const testEndpoint = (path, port = 5001) => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: port,
      path: path,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve({ status: res.statusCode, data: parsed });
        } catch (e) {
          resolve({ status: res.statusCode, data: data });
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.setTimeout(5000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    req.end();
  });
};

const runTests = async () => {
  console.log('🧪 Testing API endpoints...\n');

  const tests = [
    { name: 'Health Check', path: '/health' },
    { name: 'Services API', path: '/api/services' },
    { name: 'Categories API', path: '/api/services/categories' },
    { name: 'Leads API', path: '/api/leads' }
  ];

  for (const test of tests) {
    try {
      console.log(`Testing ${test.name}...`);
      const result = await testEndpoint(test.path);
      console.log(`✅ ${test.name}: Status ${result.status}`);
      if (result.data && typeof result.data === 'object') {
        console.log(`   Response: ${JSON.stringify(result.data).substring(0, 100)}...`);
      }
    } catch (error) {
      console.log(`❌ ${test.name}: ${error.message}`);
    }
    console.log('');
  }

  console.log('🏁 Test completed!');
};

if (require.main === module) {
  runTests();
}

module.exports = { testEndpoint };
