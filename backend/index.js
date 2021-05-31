const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const config = require('./config/config.js');
const Pool = require('pg').Pool
let configApp =  global.gConfig;
const routes = require('./routes/index.route');
app.use(routes);


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.listen(configApp.node_port, () => {
    console.log(`${configApp.app_name} listening on port ${configApp.node_port}`);
});


module.exports = app;
