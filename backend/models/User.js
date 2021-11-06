const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 6
    },
    name: { 
        type: String, 
        required: true,
        min: 6
    },
    create_at: {
        type: Date,
        default: Date.now()
    },
    passwordHash: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    }
});

module.exports = mongoose.model('User', userSchema);