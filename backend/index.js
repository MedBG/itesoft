const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/index.route');
const config = require('./config/config.js');

let configApp =  global.gConfig;
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json())


app.use(cors());


app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

 // Request headers you wish to allow
 res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, token, language');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next(); 
});

app.use(routes);



app.listen(configApp.node_port, () => {
    console.log(`${configApp.app_name} listening on port ${configApp.node_port}`);
});


module.exports = app;
