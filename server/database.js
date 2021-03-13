const mongoose = require('mongoose');
const url = 'mongodb+srv://team5:team5@mducbg2000.tzqav.mongodb.net/social-network?retryWrites=true&w=majority'

class Database {
    constructor() {
        this._connect()
    }
    _connect() {
        mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error')
            })
    }
}

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

module.exports = new Database()