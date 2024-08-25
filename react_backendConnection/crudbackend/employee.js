import mongoose from 'mongoose';

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

export default mongoose.model("employee", EmployeeSchema);