const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
    brand: {type: String},
    price: {type: Number},
    description: {type: String},
    img: {type: String},
    product: {type: String},
    stock: {type: Boolean, required: true},
    
});

//make an instance of the fruitSchema
const shoes = mongoose.model('theShoes', shoeSchema);

module.exports = shoes;