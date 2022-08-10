const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.get('/api/v1/instagram', (req, res) => {
  const instaSocial = {
    username: 'harishkrishnan',
    followers: 66,
    follows: 70,
    date: Date.now(),
  };

  res.status(200).json(instaSocial);
});

app.get('/api/v1/facebook', (req, res) => {
  const instaSocial = {
    username: 'harishkrishnan1993',
    followers: 88,
    follows: 10,
    date: Date.now(),
  };

  res.status(200).json(instaSocial);
});

app.get('/api/v1/linkedin', (req, res) => {
  const instaSocial = {
    username: 'harishkrishnan1993',
    followers: 150,
    follows: 200,
    date: Date.now(),
  };

  res.status(200).json(instaSocial);
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
