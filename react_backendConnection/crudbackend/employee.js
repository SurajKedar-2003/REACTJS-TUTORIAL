const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    fname:{
        type:String
    },
    lname:{
        type: String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
}, {timeStamps:true});

module.exports = mongoose.model("employee", EmployeeSchema);