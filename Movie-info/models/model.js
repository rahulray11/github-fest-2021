const mongoose=require('mongoose')

const Schema=mongoose.Schema({
    name:{
        type:String,
        required:true 
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required:true 
    },
    password:{
        type:String,
        required:true
    },
    dob:{
        type: String,
        required:true
    }
})


module.exports=mongoose.model('col',Schema);
