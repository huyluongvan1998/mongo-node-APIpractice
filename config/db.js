const config = require('config');
const conn = config.get('mongoUrl');

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('useCreateIndex', true);
        mongoose.connect(conn, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Mongo connected')
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDB;