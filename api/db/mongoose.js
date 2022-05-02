const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/taskmanager' , {useNewUrlParser:true}).then(()=>{
    console.log("Connected to MongoDB")
}).catch((e)=>{
    console.log("Error while attempting to connect")
    console.log(e)
})



module.exports = {
    mongoose
}

