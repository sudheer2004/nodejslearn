const mongoose = require('mongoose');
const mongoUrl = 'mongodb://127.0.0.1:27017/hotels'
mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;
db.on('connected',()=>{
    console.log('mongodb connection established sucessfully');
});
module.exports=db;
