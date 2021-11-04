const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    _id : {
        type: mongoose.Types.ObjectId,
        required: true
    },
    name : {
        type: String,
        required: true
    },
    address : {
        type: String,
        required: true
    },
    rate : {
        type: Array,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    opentime: {
        type: Date
    },
    contact_number: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    discount_rate: {
        type: Number,
        required: true
    },
    instagram: {
        type: String,
        required: true
    },
    createAt: {
        type: Date
    },
    
    updateAt: {
        type: Date
    },
});

itemSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});

module.exports = mongoose.model("Item", itemSchema);