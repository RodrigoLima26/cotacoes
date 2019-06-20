const mongoose = require('mongoose');

const connect = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/task-api-test";

mongoose.connect(connect, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});