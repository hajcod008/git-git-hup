const express = require('express');
const cors = require('cors');
const config = require('./utils/initializer');
const dotenv = require('dotenv').config({ path: __dirname + '/.env' });
const app = express();
const morgan = require('morgan');
const fs = require('fs');
const bodyParser = require('body-parser');
//const seviceName = fs.readdirSync('./services')
app.use('/upload' , express.static(__dirname + '/upload/'));
app.use(morgan('dev'));
const path =require('path');
app.use(express.json({ limit:'50mb' }));
const register = require('./services/routes');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors());




// serviceNames.forEach(serviceName => {
//     const service = require(`./services/${serviceName}/routes.js`)
//     app.use('/api', service)
// });
app.use(register)
 
 if (dotenv.error) {
     throw dotenv.error;
 }


 //running confing
 config.Initialize().then(() =>console.log('mongodb connction successfully'));   
 //run server
  const port = process.env.SERVER_PORT || 5000;

 app.listen(port,() => {
 console.log(`App running on port ${port}`);
 });
//console.log('salam gol !');