const mongoose = require('mongoose'); 
const { Schema } = mongoose;
const housekeepingSchema = new Schema({
    room:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "housekeeping"
    },
name:{
    type: String,
    required : true

},
status:{
    type: String,
    required: true
},
room:{
    type: String,
    required: true
}
});
const HouseKeeping =  mongoose.model("housekeeping",housekeepingSchema);
module.exports =  HouseKeeping;


