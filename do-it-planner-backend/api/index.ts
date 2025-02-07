//const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Exprs on Vercel'));

app.listen(3333, () => console.log('Server ready on port 3333.'));

module.exports = app;
