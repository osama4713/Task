
const express = require("express");
const User = require("../models/users");

const router = express.Router();

router.post('/users' , (req , res) => {

    console.log(req.body);

    const user = new User(req.body)
    user.save()

    .then((user) => (res.status(200).send(user)))
    .catch((e) => (res.status(400).send(e)))
})

router.get('/users', (req, res) => {
    User.find({}).then((users) => {	
        res.status(200).send(users)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

router.get('/users/:id', (req,res) => {

    const _id = req.params.id;

        User.findById(_id).then((users) => {

            if (!users){
                return res.status(404).send("User Not Found")
            }
            res.status(200).send(users)

        }).catch((e) => {
            res.status(500).send(e)
        })
})

module.exports = router ;
