const express = require('express');

const app = express();
const PORT = process.env.PORT || 3100;

// Middleware to parse JSON requests
app.use(express.json());

// CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Headers', '*'); // Allow any headers
  next();
});

// Proxy endpoint for GET requests
app.get('/', async (req, res) => {
  try {
    const { epgid } = req.query;
    if (!epgid) {
      return res.status(400).json({ error: 'epgid parameter is required' });
    }

    // Call the external API
    const url = `https://tm.tapi.videoready.tv/content-detail/pub/api/v2/channels/schedule?date=1-3-2024`;
    const headers = {
      platform: 'web',
      'Content-Type': 'application/json',
      referer: 'https://watch.tataplay.com/',
      origin: 'https://watch.tataplay.com',
    };
    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify({ id: epgid }), // Constructing the JSON payload with epgid
    };

    const response = await fetch(url, options);
    const data = await response.json();
    res.json(data.data.epg);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
