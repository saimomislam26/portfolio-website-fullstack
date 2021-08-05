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
    },
    date: {
        type: String,
        default: Date.now()
    },
    messages: [
        {
            name: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            message: {
                type: String,
                required: true
            },
        }
    ],
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }

    ]
})

userSchema.methods.generateJWT = function () {
    const token = jwt.sign({
        _id: this._id,
        name: this.name,
        email: this.email,
        phone: this.phone,
        work: this.work
    }, process.env.SECRET_KEY)
    this.tokens = this.tokens.concat({ token: token });

    return token;
}

//stored messages
userSchema.methods.addMessage = async function (name, email, message) {
    try {
        this.messages = this.messages.concat({ name, email, message });
        await this.save();
        return this.messages
    } catch (err) {
        console.log(err)
    }
}

const User = model('user', userSchema);

module.exports.User = User;