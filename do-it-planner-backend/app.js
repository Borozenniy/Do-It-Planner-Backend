const express = require('express');
const app = express();
const http = require('http');
const mongoose = require('mongoose');
const port = 3000;
const cors = require('cors');
require('dotenv').config({ path: '.env' });

const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//* CORS
app.use(
  cors({
    origin: 'http://localhost:5173', // Дозволяє запити з вашого фронтенду
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Дозволені HTTP-методи
    credentials: true, // Дозволяє відправку cookie, якщо потрібно
  })
);

app.use(express.json()); // Для парсингу JSON тіла запиту

//* MongoDB Connection

mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.use('/users', require('./routes/userRoutes'));
app.use('/goals', require('./routes/goalRoutes'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
