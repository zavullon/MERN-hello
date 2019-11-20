const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({username : 'fag'});
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
