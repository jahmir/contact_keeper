const mongoose = require('mongoose');
const config = require('config')
const db = config.get('mongoURI')

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        })

        console.log('MongoDB Connected...');
    } catch (error) {
        console.log(err.message)
        process.exit(2)
    }
}

module.exports = connectDB