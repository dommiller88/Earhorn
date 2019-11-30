const router = require('express').Router();
let Post = require('../models/post.model');

router.route('/').get((req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const spotifyUri = req.body.spotifyUri;
    const username = req.body.username;
    const comment = req.body.comment;
    const profilePicture = req.body.profilePicture;

    const newPost = new Post({spotifyUri, username, comment, profilePicture});

    newPost.save()
        .then(() => res.json('Post Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
    Post.findById(req.params.id)
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error ' + err))
})

router.route('/:id').delete((req,res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('post deleted.'))
        .catch(err => res.status(400).json('Error ' + err))
})

router.route('/update/:id').post((req,res) => {
    Post.findById(req.params.id)
        .then(Post => {
            Post.spotifyUri = req.body.spotifyUri;
            Post.username = req.body.spotifyUri;
            Post.comment = req.body.comment;
            Post.profilePicture = req.body.profilePicture;

            Post.save()
                .then(() => res.json('Post updated!'))
                .catch(err => res.status(400).json('Error ' + err))
        })
        .catch(err => res.status(400).json('Error ' + err))
})   

module.exports = router