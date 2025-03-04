require('dotenv').config({ path: '.env' });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const port = process.env.PORT || 3000;
const { expressjwt } = require('express-jwt');
const jwks = require('jwks-rsa');

//const AUTH_DOMAIN = 'http://localhost:3000';

// Server initialization
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//* CORS
app.options('*', cors());

//app.use(
//  cors({
//    origin: '*',
//    methods: ['GET', 'POST', 'PUT', 'DELETE'],
//    allowedHeaders: ['Content-Type', 'Authorization'],
//    credentials: true,
//  })
//);

app.use(cors());
//* MongoDB Connection

mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((err) => {
    console.log(err);
  });

const checkJwt = expressjwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksUri: `https://${process.env.AUTH_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: process.env.AUDIENCE,
  issuer: `https://${process.env.AUTH_DOMAIN}/`,
  algorithms: ['RS256'],
});
//const checkJwt = expressJwt({
//  secret: jwks.expressJwtSecret({
//    cache: true,
//    rateLimit: true,
//    //jwksRequestsPerMinute: 5,
//    jwksUri: `http://${process.env.AUTH_DOMAIN}/.well-known/jwks.json`,
//  }),
//  audience: process.env.AUDIENCE,
//  issuer: `http://${process.env.AUTH_DOMAIN}/`,
//  algorithms: ['RS256'],
//});

app.get('/protected', checkJwt, (req, res) => {
  res.json({ message: 'Це захищений маршрут!' });
});

app.use('/user', require('./routes/userRoutes'));
app.use('/goal', require('./routes/goalRoutes'));
app.use('/subgoal', require('./routes/subgoalRoutes'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
