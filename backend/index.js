const express = require('express');
const connettoMongo = require('./configdb');
// const Employee = require('./Module/employee');
var cors = require('cors');

connettoMongo();


const app = express();
app.use(cors());

const port = 5003;

app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// })
// POST method route
// app.post('/createemployee',  (req, res) => {
//   Employee.create({
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password,
//     }).then(employee => res.json(employee));
//     });

  // GET method roure



// Available Routes
// app.use('/api/auths', require('./routes/auths'));
// app.use('/api/notes', require('./routes/notes') );
app.use('/api/employeeAuth', require('./Routes/employeeAuth'));
app.use('/api/guestRoute', require('./Routes/guestRoute'));
app.use('/api/roomRoute', require('./Routes/roomRoute'));
app.use('/api/hkRoute', require('./Routes/hkRoute'));





app.listen(port, ()=>{
    console.log(`app is listining on port ${port}`);
})