const router = require('express').Router();
let User = require('../models/user.model');

//first end point
//handles http get requests
//root url ie, localhost5000
router.route('/').get((req, res) => {  
    User.find()                        //gets a list of all the users from mongoosedb in json form
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: '+ err ));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('User added! '))
        .catch(err => res.status(400).json('Error '+err));
});

module.exports = router;