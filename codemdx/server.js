
const express = require('express');
const app = express();
const port = 8080;

// Define a route for "/M0012345/"
app.get('/M0012345/', (req, res) => {
  res.send('Hello, this is the response for http://localhost:8080/M0012345/');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});