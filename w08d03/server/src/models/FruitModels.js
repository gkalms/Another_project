const mongoose = require("mongoose");

//define the schema - basically, what fruit object should look like
const fruitSchema = mongoose.Schema({
    name: String,
    color: String,
    readyToEat: Boolean,
    age: Number,
    categoryId: { //use this object to link to category schema
        type:mongoose.Schema.Types.ObjectId,
        ref: "category" //this refers to the 'category' collection
    }
});

//export model to be used by the fruits router
module.exports = mongoose.model("FruitCollection",fruitSchema);