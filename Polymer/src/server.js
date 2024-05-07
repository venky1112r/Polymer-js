const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Configure the proxy middleware
const apiProxy = createProxyMiddleware('/state_district_wise.json', {
  target: 'https://api.covid19india.org',
  changeOrigin: true,
});

// Add the proxy middleware to the app
app.use('/state_district_wise.json', apiProxy);

// Start the server
app.listen(3000, () => {
  console.log('Proxy server listening on port 3000');
});