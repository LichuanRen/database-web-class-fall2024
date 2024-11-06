const express = require('express')
const app = express()
const port = 3000

// basic routing
app.get('/', (req, res) => {
  res.send('Welcome to the homepage');
});

app.get('/about', (req, res) => {
  res.send('About Us');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Dynamic Route Parameters
app.get('/user/:username', (req, res) => {
  const username = req.params.username;
  res.send(`Hello, ${username}!`);
});

// Handling Query Parameters
app.get('/search', (req, res) => {
  const query = req.query.query;
  if (query) {
    res.send(`You searched for: ${query}`);
  } else {
    res.status(400).send('Please provide a search query.');
  }
});

