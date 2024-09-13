const express = require('express');
const { PORT } = require('./config')
const products = require('./routes/products')
const connectDB = require('./database/connection')
const expressApp = require('./express-app')

var app = express();

const StartServer = async () => {

  const app = express();

  await connectDB();

  await expressApp(app);

  app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
  })
    .on('error', (err) => {
      console.log(err);
      process.exit();
    })
}

StartServer()


module.exports = app;
