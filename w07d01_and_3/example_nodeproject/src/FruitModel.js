const mongoose = require('mongoose');
const Schema = mongoose.Schema
const fruitSchema = new Schema({
    name: String,
    color: String,
    readyToEat: Boolean
});
const fruitModel = mongoose.model("Fruit",fruitSchema);
module.exports = fruitModel;