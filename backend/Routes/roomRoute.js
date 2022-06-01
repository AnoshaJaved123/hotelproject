const express = require('express');
const router = express.Router();
const Room = require('../Module/room');



const { body, validationResult } = require('express-validator');
// const fetchuser = require('../Middleware/fetchemployee')


// app.get('/api', (req, res) => res.send('Its working!'));

router.get('/fetchroom', async (req, res) => {
    try {
        const room = await Room.find({});
        res.json(room)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});



      router.post('/createroom', [
        body('name', 'Enter a valid name').isLength({ min: 3 }),], async  (req, res) => {
        try {
            // const { name, email, password } = req.body;
             // If there are errors, return Bad request and the errors
             const errors = validationResult(req);
             if (!errors.isEmpty()) {
                 return res.status(400).json({ errors: errors.array() });
             }
             const room = await Room.create({
                        name: req.body.name,
                        member: req.body.member,
                        roomnumber: req.body.roomnumber,
                        roomtype: req.body.roomtype,
                        extradisp:req.body.extradisp
                      })

            res.json(room)
        } catch (error) {
            console.error(error.message);
            res.status(502).send("Internal Server Error");
        }
          });


//           // ROUTE 4: Delete an existing employee using: DELETE "/api/notes/deletenote". Login required
router.delete('/deleteroom/:id',  async (req, res) => {
    try {
        // Find the note to be delete and delete it
        // let employee = await Employee.findById(req.params.id);
        let room = await Room.findById(req.params.id);

        if (!room) { return res.status(402).send("Not Found") }

       
        room = await Room.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Room has been deleted", room: room });
    } catch (error) {
        console.error(error.message);
        res.status(505).send("Internal Server Error");
    }
})
      

      module.exports = router;

     
   
  
  