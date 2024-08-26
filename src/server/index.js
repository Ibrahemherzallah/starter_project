// server/index.js
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');
const apiKey = process.env.API_KEY;
const apiUrl = 'https://api.meaningcloud.com/sentiment-2.1';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('dist/index.html'));
});

app.post('/sentiment', async (req, res) => {
  const { url } = req.body;
  
  if (!url) {
    return res.status(400).send({ error: 'URL is required' });
  }

  try {
    const response = await axios.post(apiUrl, null, {
      params: {
        key: apiKey,
        lang: 'en',
        url: url,
      },
    });
    
    res.send(response.data);
  } catch (error) {
    console.error('Error making API request:', error);
    res.status(500).send({ error: 'Error processing request' });
  }
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
