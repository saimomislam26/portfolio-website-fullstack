const express = require('express');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const { User } = require('../models/userSignUp');
const { identity } = require('lodash');
const router = express.Router();

const homePage = (req, res) => {
    res.send("I am from home Page");
}

const signUp = async (req, res) => {
    let user = await User.findOne({ email: req.body.email })
    if (user) return res.status(400).send("Already Registered!!")
    else if (req.body.password !== req.body.cpassword) {
        return res.status(400).send("password are not matched")
    }

    else {
        user = new User(req.body)

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        user.cpassword = await bcrypt.hash(user.cpassword, salt);

        const token = user.generateJWT();
        let result = await user.save();
        res.status(201).send({
            token: token,
            data: _.pick(result, ['_id', 'name', 'phone', 'email', 'work'])
        });
    }

}

const userList = async (req, res) => {
    const user = await User.find().sort({ name: 1 })
    if (!user) return res.send("No user Signed!!")
    res.send(user);
}
const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) return res.status(400).send("fill the empty field");
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).send("This email is not registered");
    const pass = await bcrypt.compare(req.body.password, user.password);
    if (!pass) return res.status(400).send("incorrect Password");

    const token = user.generateJWT();
    const result = await user.save();
    res.send({
        token: token,
        data: _.pick(result, ['name', 'email', 'phone'])
    })

}

router.route('/')
    .get(homePage)
router.route('/register')
    .get(userList)
    .post(signUp)
router.route('/login')
    .post(login)

module.exports = router;


// signup data
// "name":"nanvir",
// "email":"tanvir@gmail.com",
// "phone":"2252223",
// "work":"xyz",
// "password":"1234",
// "cpassword":"1234"