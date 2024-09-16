const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
    res.send('Hello world!');
});

app.listen(port, () => {
    console.log(`Backend running at http://localhost:${port}/api`);
});
