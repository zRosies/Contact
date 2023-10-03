const express = require('express');
const bodyParser = require('body-parser');
const mongodb= require('./src/connection/connection');
const cors = require("cors");
const route = require('./src/routes/routes')

const port = process.env.PORT;
const app = express();



app
  .use(bodyParser.json())
  .use(cors({ origin: '*' }))
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', route);

mongodb.initDb((err) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
    }
});