const mongoose = require('mongoose'); 
const { Schema } = mongoose;
const employeeSchema = new Schema({
    employee:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "employee"
    },
name:{
    type: String,
    required : true

},
email:{
    type: String,
    required: true
},
password:{
    type: String,
    required: true,

},
date:{
    type: Date,
    default: Date.now
}
});
const Employee =  mongoose.model("employee",employeeSchema);
module.exports =  Employee;


