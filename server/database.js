const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const db = mongoose.createConnection(process.env.DB_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true
});


module.exports = db ;