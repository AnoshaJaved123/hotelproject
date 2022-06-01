const express = require('express');
const router = express.Router();
const HouseKeeping = require('../Module/housekeeping');



const { body, validationResult } = require('express-validator');
// const fetchuser = require('../Middleware/fetchemployee')


// app.get('/api', (req, res) => res.send('Its working!'));

router.get('/fetchhk', async (req, res) => {
    try {
        const housekeeping = await HouseKeeping.find({});
        res.json(housekeeping)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});



      router.post('/createhk', [
        body('name', 'Enter a valid name').isLength({ min: 3 }),], async  (req, res) => {
        try {
            // const { name, email, password } = req.body;
             // If there are errors, return Bad request and the errors
             const errors = validationResult(req);
             if (!errors.isEmpty()) {
                 return res.status(400).json({ errors: errors.array() });
             }
             const housekeeping = await HouseKeeping.create({
                        name: req.body.name,
                       status: req.body.status,
                        room:req.body.room
                      })

            res.json(housekeeping)
        } catch (error) {
            console.error(error.message);
            res.status(502).send("Internal Server Error");
        }
          });


//           // ROUTE 4: Delete an existing employee using: DELETE "/api/notes/deletenote". Login required
router.delete('/deletehk/:id',  async (req, res) => {
    try {
        // Find the note to be delete and delete it
        // let employee = await Employee.findById(req.params.id);
        let housekeeping = await HouseKeeping.findById(req.params.id);

        if (!housekeeping) { return res.status(402).send("Not Found") }

       
        housekeeping = await HouseKeeping.findByIdAndDelete(req.params.id)
        res.json({ "Success": "housekeeping has been deleted", housekeeping: housekeeping });
    } catch (error) {
        console.error(error.message);
        res.status(505).send("Internal Server Error");
    }
})
      

      module.exports = router;

     
   
  
  