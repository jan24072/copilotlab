//create web server
//create a web server
const express = require('express');
const app = express();
const port = 3000;

//use the public folder to serve static files
app.use(express.static('public'));

//use the comments.js file to handle API requests
app.use('/api/comments', require('./comments.js'));

//start the server
app.listen(port, () => console.log(`Server listening on port ${port}`));
