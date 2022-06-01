const mongoose = require('mongoose');
const mongoURL ="mongodb+srv://Anosha:umerusman12@newcluster.9iuxj.mongodb.net/hotel";

const connettoMongo = ()=>{
    mongoose.connect(mongoURL, ()=>{
        console.log("connected to mongo successfully");
    })
}

module.exports= connettoMongo;
