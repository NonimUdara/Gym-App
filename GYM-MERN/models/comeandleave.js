const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    come:{
        type:String,
        required:true
    },
    leave:{
        type:String,
        required:true
    },

});

module.exports = mongoose.model('ComeAndLeave',postSchema);