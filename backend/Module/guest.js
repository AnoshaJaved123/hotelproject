const mongoose = require('mongoose'); 
const { Schema } = mongoose;
const guestSchema = new Schema({
   
name:{
    type: String,
    required : true

},
email:{
    type: String,
    required: true,
    unique: true
},
phone:{
    type: String,
    required: true,

},
cnic:{
    type: String,
    required: true,
    unique: true

},
status:{
    type: String,
    required: true,

},
room:{
    type: String,
    required: true,

},
date:{
    type: Date,
    default: Date.now
}
});
const Guest =  mongoose.model("guest",guestSchema);
module.exports =  Guest;


