const express = require('express');
const bodyParser = require('body-parser');
const pdfExtractHandler = require('./pdf-extract.js'); // Ensure this path is correct

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Define your API endpoint
app.post('/extract', pdfExtractHandler);  // Directly use pdfExtractHandler as the route handler

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
