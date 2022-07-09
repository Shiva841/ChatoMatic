const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    Name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    pic:{
        type:String,
        required:true,
        default:"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
    }
},{timestamps:true});

module.exports = mongoose.model("User",userModel);