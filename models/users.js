
const mongoose = require("mongoose");

const UsarSchema = new mongoose.Schema({

    FName : {
        type : String ,
        required : true,
        trim : true
    },
    LName : {
        type : String,
        required : true,
        trim : true
    },
    Password : {
        type : String,
        required : true,
        trim: true,
        minlength : 8
    },
    Email : {
        type : String,
        required : true,
        trim : true,
        lowercase : true,
        unique :true
    },
    Age : {
        type : Number,
        default : 18 ,
        trim : true
    },
    City : {
        type : String,
        required : true,
        trim : true
    }

})

const User = mongoose.model( 'User' , UsarSchema )

module.exports = User;