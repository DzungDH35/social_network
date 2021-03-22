const express = require('express')
const app = express()
const port = 8000;
const path = require('path');
const bodyParser = require('body-parser');
const client = require('./client/client');
const api = require('./server/api');
const morgan = require('morgan')
const user = require('./server/models/user')
const db = require('./server/database');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/client/public')))
app.use(morgan('dev'));

app.use('/', client);
app.use('/api', api);


app.listen(port, () => console.log(`Example app listening on port port!`))
console.log('Server running at http://127.0.0.1:8000/');


