const express = require('express');
const bodyParser = require('body-parser');
const pdfExtractHandler = require('./pdf-extract.js'); // Assuming this is your file name.

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Define your API endpoint
app.get('/extract', async (req, res) => {
    try {
        const { pdfpath, docname } = req.body;
        const result = await pdfExtractHandler({ body: { pdfpath, docname } });
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
