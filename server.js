const express = require('express');
const path = require('path');

const app = express();
const PORT = 3004;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`The Lost Ceremony website running at http://0.0.0.0:${PORT}`);
  console.log(`Access from network: http://Eliass-Mac-mini.local:${PORT}`);
});