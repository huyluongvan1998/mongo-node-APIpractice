const express = require('express');
const router = express.Router();
const User = require('../../Model/User');
const {check, validationResult} = require('express-validator');

//@ TEST ROUTE
// GET ROUTE
//@DESCRIPTION: TEST GET ROUTE.
router.post('/',[
    check('firstName', 'Enter your First Name').notEmpty(),
    check('lastName', 'Enter your Last Name').notEmpty(),
    check('gender', 'Enter your gender').notEmpty(),
    check('email', 'Enter your Email').isEmail(),
], async (req, res) => {
    try {
        const errors = validationResult(req);
       if(!errors.isEmpty()){
           return res.status(400).json({ errors : errors.array()});
       }
       const {
           firstName,
           lastName,
           age,
           gender,
           tandcs,
           email
       } = req.body;

       //Find if the user existed
       const result = await User.findOne({ email })
       if(result){
        res.status(401).json({ msg: 'User already Exist'});
    }

        const user = new User({
            firstName,
            lastName,
            age,
            gender,
            tandcs,
            email
        });

        res.json(user);
        await user.save();

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: 'Server Error!'});
    }
})

module.exports = router;
