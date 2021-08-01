const { Schema, model } = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    }
})

userSchema.methods.generateJWT = function () {
    const token = jwt.sign({
        _id: this._id,
        name: this.name,
        email: this.email,
        phone: this.phone,
        work: this.work
    }, process.env.SECRET_KEY)

    return token;
}

const User = model('user', userSchema);

module.exports.User = User;