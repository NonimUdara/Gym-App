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
    request:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Requests',postSchema);