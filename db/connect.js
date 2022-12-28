const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://furan:furan123@cluster0.lyy09nu.mongodb.net/?retryWrites=true&w=majority'

const connectDB = (url) => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB;
