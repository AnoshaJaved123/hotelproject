const mongoose = require('mongoose'); 
const { Schema } = mongoose;
const roomSchema = new Schema({
    room:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "room"
    },
name:{
    type: String,
    required : true

},
member:{
    type: Number,
    required: true
},
roomnumber:{
    type: Number,
    required: true
},
roomtype:{
    type: String,
    required: true
},
extradisp:{
    type: String,
    required: true
}
});
const Room =  mongoose.model("room",roomSchema);
module.exports =  Room;


