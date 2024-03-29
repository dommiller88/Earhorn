const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const profilePicture = req.body.profilePicture;

    const newUser = new User({username, password, profilePicture});

    newUser.save()
        .then(() => res.json('User Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
    User.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error ' + err))
})

router.route('/:id').delete((req,res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('user deleted.'))
        .catch(err => res.status(400).json('Error ' + err))
})

router.route('/update/:id').post((req,res) => {
    User.findById(req.params.id)
        .then(User => {
            User.username = req.body.username;
            User.password = req.body.password;
            User.profilePicture = req.body.profilePicture;

            User.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error ' + err))
        })
        .catch(err => res.status(400).json('Error ' + err))
})   

module.exports = router