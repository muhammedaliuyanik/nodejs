const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
        trim: true
    },
    password:{
        type: String,
        require: true,
        unique: true
    },
    email:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Auth', authSchema)