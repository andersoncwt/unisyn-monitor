
const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();


// Configured to serve static files.
app.use(express.static(path.join(__dirname, '/')));

// Serve the HTML file for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); 
});

//given link by aws
const link = "https://x9zybgnxri.execute-api.eu-north-1.amazonaws.com";


const port = 3003; 
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


