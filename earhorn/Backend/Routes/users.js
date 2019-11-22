const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('User Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/:id').get((req,res) => {
//     User.findByID(req.params.id)
//         .then(users => res.json(users))
//         .catch(err => res.status(400).json('Error ' + err))
// })

// router.route('/:id').delete((req,res) => {
//     User.findByIDAndDelete(req.params.id)
//         .then(() => res.json('user deleted.'))
//         .catch(err => res.status(400).json('Error ' + err))
// })

// router.route('/update/:id').post((req,res) => {
//     User.findByID(req.params.id)
//         .then(User => {
//             User.username = req.body.username;

//             User.save()
//                 .then(() => res.json('User updated!'))
//                 .catch(err => res.status(400).json('Error ' + err))
//         })
//         .catch(err => res.status(400).json('Error ' + err))
// })   

module.exports = router