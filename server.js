const express = require('express')
const app = express()
const port = 8000;
const path = require('path');
const bodyParser = require('body-parser');
var client = require('./client/client');
var api = require('./server/api');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client/login')));
app.use(express.static(path.join(__dirname, '/public')))


app.use('/', client);
app.use('/api', api);


app.listen(port, () => console.log(`Example app listening on port port!`))
console.log('Server running at http://127.0.0.1:8000/');


