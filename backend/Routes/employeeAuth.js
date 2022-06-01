const express = require('express');
const router = express.Router();
const Employee = require('../Module/employee');
var bcrypt = require('bcryptjs');
var jwt = require("jsonwebtoken");




const { body, validationResult } = require('express-validator');
// const fetchuser = require('../Middleware/fetchemployee')


// app.get('/api', (req, res) => res.send('Its working!'));

router.get('/fetchemployee', async (req, res) => {
    try {
        const employee = await Employee.find({});
        res.json(employee)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});


//correct route
    //   router.post('/createemployee', [
    //     body('name', 'Enter a valid name').isLength({ min: 3 }),
    //     body('password', 'password must be atleast 5 characters').isLength({ min: 5 }),], async  (req, res) => {
    //     try {
    //         // const { name, email, password } = req.body;
    //          // If there are errors, return Bad request and the errors
    //          const errors = validationResult(req);
    //          if (!errors.isEmpty()) {
    //              return res.status(400).json({ errors: errors.array() });
    //          }
    //          const employee = await Employee.create({
    //                     name: req.body.name,
    //                     email: req.body.email,
    //                     password: req.body.password,
    //                   })

    //         res.json(employee)
    //     } catch (error) {
    //         console.error(error.message);
    //         res.status(502).send("Internal Server Error");
    //     }
    //       });


    router.post("/createemployee",
    [
      body("name", "Enter a valid name").isLength({ min: 3 }),
      body("email", "Enter a valid Email").isEmail(),
      body("password", "Enter a valid password").isLength({ min: 5 }),
    ],
    async (req, res) => {
      //if there are error return bad request and errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
  
      //check whether the user  with this email exist already
      try {
      let employee = await Employee.findOne({ email: req.body.email });
      if (employee) {
        console.log(employee);
        return res
          .status(400)
          .json({ error: "sorry user with this email already exist " });
      }
  
      //secure pasword using bycrypt
  
      const salt = await bcrypt.genSaltSync(10);
      const secpass = await bcrypt.hash(req.body.password, salt);
  
      //create a new user
      employee = await Employee.create({
        name: req.body.name,
        email: req.body.email,
        password: secpass,
      });
  
      /////////jasonwebtoken///////////
      const JWT_SEC = "This project belongs to $AnoshaJaved"; //token string
      // use id as a token
      const data = {
        employee: {
          id: employee.id,
        },
      };
  
      const authtoken = jwt.sign(data, JWT_SEC);
      res.json(authtoken);
    }
    catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  
      
    })
  
  
  
          

// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required


router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
  ], async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { email, password } = req.body;
    try {
      let employee = await Employee.findOne({ email });
      if (!employee) {
        success = false;
        return res.status(400).json({ error: "Please try to login with correct credentials" });
      }
  
      const paswordCompare = await bcrypt.compare(password, employee.password);
      if (!paswordCompare) {
        success = false
        return res.status(400).json({ success, error: "Please try to login with correct credentials" });
      }
  
      const data = {
        employee: {
          id: employee.id
        }
      }
      const JWT_SEC = "This project belongs to $AnoshaJaved";
      const authtoken = jwt.sign(data,  JWT_SEC);
      success = true;
      res.json({ success, authtoken })
  
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
   // To Get Employee Details By Employee ID
 router.route('/fetchuserid/:id').get(function (req, res) {
  let id = req.params.id;
  Employee.findById(id, function (err, employee) {
  res.json(employee);
  });
  });

  
  })
  

      module.exports = router;

     
   
  
  