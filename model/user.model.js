const mongoose = require('mongoose');

const db = require('../config/db');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:[true,'Please enter a Email']
    },
    password:{
        type: String,
        required:[true,'Please enter a Password']
    }
});

const userModel = db.model('users',userSchema);

module.exports = userModel;