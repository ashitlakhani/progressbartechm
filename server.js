const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
const app = express();
const publicPath = path.resolve(__dirname, 'dist/');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('Server port ', port);
});
