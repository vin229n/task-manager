const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User',{
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)) {
                throw Error('Email is invlaid!')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if(value.length < 7) {
                throw Error('Password length should be greater than 6')
            }
            else if(value.toLowerCase().includes('password')) {
                throw Error('Password contains the word passowrd!')
            }
        }
    }
})

module.exports = User