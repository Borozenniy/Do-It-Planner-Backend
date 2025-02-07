//const express = require('express');
//const app = express();
//const http = require('http');
//const mongoose = require('mongoose');
//const port = 3000;
//const cors = require('cors');
//require('dotenv').config({ path: '.env' });

//const server = http.createServer(app);

//app.get('/', (req, res) => {
//  res.send('Hello World!');
//});

////* CORS
//app.options('*', cors());

////app.use(
////  cors({
////    origin: '*',
////    methods: ['GET', 'POST', 'PUT', 'DELETE'],
////    allowedHeaders: ['Content-Type', 'Authorization'],
////    credentials: true,
////  })
////);

//app.use(cors());
//// http://localhost:5173

//app.use(express.json()); // Для парсингу JSON тіла запиту
////app.options('*', cors());

////* MongoDB Connection

//mongoose
//  .connect(process.env.MONGODB_URI, {})
//  .then(() => {
//    console.log('MongoDB Connected');
//  })
//  .catch((err) => {
//    console.log(err);
//  });

//app.use('/user', require('./src/routes/userRoutes'));
//app.use('/goal', require('./src/routes/goalRoutes'));
//app.use('/subgoal', require('./src/routes/subgoalRoutes'));

//app.listen(port, () => {
//  console.log(`Example app listening at http://localhost:${port}`);
//});

//module.exports = app;
