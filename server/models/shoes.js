const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
    brand: {type: String},
    price: {type: Number},
    description: {type: String},
    img: {type: String},
    img2: {type: String},
    img3: {type: String},
    img4: {type: String},
    product: {type: String},
    invAmount: {type: Number, required: true},
    
});

//make an instance of the fruitSchema
const shoes = mongoose.model('theShoes', shoeSchema);

module.exports = shoes;