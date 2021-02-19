const mongoose = require("mongoose");
const fruitSchema = mongoose.Schema({
    name: String,
    color: String,
    readyToEat: Boolean,
    age: Number,
});


module.exports = mongoose.model("FruitDatabase",fruitSchema);