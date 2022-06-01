const express = require('express');
const connettoMongo = require('./configdb');
// const Employee = require('./Module/employee');
var cors = require('cors');

connettoMongo();


const app = express();
app.use(cors());

const PORT = process.env.PORT || 5003

app.use(express.json())





// Available Routes
// app.use('/api/auths', require('./routes/auths'));
// app.use('/api/notes', require('./routes/notes') );
app.use('/api/employeeAuth', require('./Routes/employeeAuth'));
app.use('/api/guestRoute', require('./Routes/guestRoute'));
app.use('/api/roomRoute', require('./Routes/roomRoute'));
app.use('/api/hkRoute', require('./Routes/hkRoute'));





app.listen(PORT, ()=>{
    console.log(`app is listining on port ${PORT}`);
})