const express = require('express');
const proxy = require('express-http-proxy');

const app = express();

// Proxy untuk Auth Service
app.use('/auth/login', proxy('http://localhost:3001', {
  proxyReqPathResolver: (req) => req.originalUrl,
}));

app.use('/auth/register', proxy('http://localhost:3001', {
  proxyReqPathResolver: (req) => req.originalUrl,
}));

// Proxy untuk User Service
app.use('/api/users', proxy('http://localhost:3000', {
  proxyReqPathResolver: (req) => req.originalUrl,
}));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`API Gateway berjalan di port ${PORT}`);
});
