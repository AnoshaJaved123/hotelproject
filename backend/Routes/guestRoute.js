const express = require('express');
const router = express.Router();
const Guest = require('../Module/guest');



const { body, validationResult } = require('express-validator');
// const fetchuser = require('../Middleware/fetchemployee')


// app.get('/api', (req, res) => res.send('Its working!'));

router.get('/fetchguest', async (req, res) => {
    try {
        const guest = await Guest.find({});
        res.json(guest)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});



      router.post('/createguest', [
        body('name', 'Enter a valid name').isLength({ min: 3 }),
        body('phone', 'password must be atleast 5 characters').isLength({ min: 5 }),], async  (req, res) => {
        try {
            // const { name, email, password } = req.body;
             // If there are errors, return Bad request and the errors
             const errors = validationResult(req);
             if (!errors.isEmpty()) {
                 return res.status(400).json({ errors: errors.array() });
             }
             const guest = await Guest.create({
                        name: req.body.name,
                        email: req.body.email,
                        phone: req.body.phone,
                        cnic: req.body.cnic,
                        status: req.body.status,
                        room: req.body.room
                      })

            res.json(guest)
        } catch (error) {
            console.error(error.message);
            res.status(502).send("Internal Server Error");
        }
          });


//           // ROUTE 4: Delete an existing employee using: DELETE "/api/notes/deletenote". Login required
router.delete('/deleteguest/:id',  async (req, res) => {
    try {
        // Find the note to be delete and delete it
        // let employee = await Employee.findById(req.params.id);
        let guest = await Guest.findById(req.params.id);

        if (!guest) { return res.status(402).send("Not Found") }

       
        guest = await Guest.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", guest: guest });
    } catch (error) {
        console.error(error.message);
        res.status(505).send("Internal Server Error");
    }
})
      

      module.exports = router;

     
   
  
  