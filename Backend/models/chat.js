
//chatName
//isGroupChat
//latestMessage
//groupAdmin

const mongoose = require('mongoose');

const chatModel = new mongoose.Schema({
    chatName:{
        type:String,
        trim: true
    },
    isGroupChat:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

module.exports = mongoose.model("Chat",chatModel);