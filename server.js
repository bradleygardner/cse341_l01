const mongodb = require('./db/db')
const dotenv = require('dotenv')
dotenv.config();

const express = require('express');
const app = express();
 
app.use('/', require('./routes'))

const port = 8080;

mongodb.startdb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(process.env.PORT || port, () => {
      console.log('Web Server is listening at port ' + (process.env.PORT || port));
    });
  }
});
 
