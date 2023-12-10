const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://ze11eden23:lfv2Qb78dHCSeyiw@cluster0.btahaoo.mongodb.net/' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose