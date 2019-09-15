const mongoose = require('mongoose')
const validater = require('validator') 

const Task = mongoose.model('Task',{
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = Task