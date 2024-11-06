const express = require('express');
const app = express();

// Middleware to parse JSON bodies (useful for POST and PUT requests)
app.use(express.json());

// GET request at the home route
app.get('/', (req, res) => {
  res.send('Welcome to the Homepage!');
});

// GET request at "/about"
app.get('/about', (req, res) => {
  res.send('This is the About page.');
});

// POST request at "/submit"
app.post('/submit', (req, res) => {
  const data = req.body;  // Access data sent in the request body
  res.send(`Received your submission: ${JSON.stringify(data)}`);
});

// PUT request at "/update" to update existing data
app.put('/update', (req, res) => {
  const updatedData = req.body;
  res.send(`Updated data: ${JSON.stringify(updatedData)}`);
});

// DELETE request at "/delete/:id" to delete data by ID
app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;  // Access ID parameter in URL
  res.send(`Deleted item with ID: ${id}`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
