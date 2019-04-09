const mongoose = require('mongoose') //access db mongodb

mongoose.connect('mongodb://127.0.0.1:27017/nyobaMongoose',{//connect to db
useNewUrlParser: true, //parsing url
useCreateIndex: true, //auto create id
})