const express = require('express');

const emojis = require('./emojis');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);

module.exports = router;

//const app = require('./app');

//const port = process.env.PORT || 5000;
////const port = 5000;
//app.listen(port, () => {
//  /* eslint-disable no-console */
//  console.log(`Listening: http://localhost:${port}`);
//  /* eslint-enable no-console */
//});
