// const e = require("express");
// const { response } = require("express");
const express = require('express'); //express is a function
const mongoose = require('mongoose');
const modelFruit = require('./FruitModel');


mongoose.connect('mongodb://localhost:27017/fruitsProject', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// const { request, response } = require('express');

const app = express(); //app is an object; 
app.use(express.json())
// const fruits = [
//     {
//         id: 55,
//         name: "apple",
//         color: "red",
//         readyToEat: true,
//     },
//     {
//         id: 9,
//         name: "pear",
//         color: "green",
//         readyToEat: false,
//     },
//     {
//         id: 100,
//         name: "banana",
//         color: "yellow",
//         readyToEat: true,
//     },
// ];

// http://localhost:3000/ - this refers to you home base url; then you can add PUT, GET etc depending on required function
//express routes e.g '/', '/hi'

// POST function
app.post('/fruits', (request, response) => {
    console.log("request body", request.body);
    modelFruit.create(request.body).then((data) => {
        console.log("data:", data);
        response.send(data);
    });
});

// GET function; testing Responses
app.get("/", (request, response) => { //"get" is a method - this like an event(e.g Click) where user lands on a url and a functin runs
    response.send("Hello express");
});

// /fruits/12 and fruits/red
app.get("/fruits/:fruitId", (request, response) => {
    console.log("request.params:", request.params);
    modelFruit.findById(request.params.fruitId).then((data) => {
        console.log("get /fruits/:fruitId -", data);
        if (data) {
            response.send(data);
        } else {
            response.status(404).send("Fruit not found");
        }
    }).catch((error) => {
        console.log("error:", error);
        response.status(404).send("Fruit by this ID not found");
    });
});

app.get("/hi", (request, response) => {
    response.send("Hi, from express");
});

// using name
app.get('/name', function (req, res) {
    res.send('Georgie kalms')
})
// email path
app.get('/email', function (req, res) {
    res.send('georgina.kalms@gmail.com')
})

// send an object back
app.get('/test-object', function (req, res) {
    res.send({
        name: 'georgie',
        email: 'georgina.kalms@gmail.com',
        ph: '0400400400'
    });
});

// send an object back

const quotes = [
    "kanye west should not be president",
    "trump tower is gaudy",
];
// above object could also work inside the function below.
app.get("/quote", function (req, res) {
    // const quotes = [
    //     "kanye west should not be president",
    //     "trump tower is the best",
    //   ];
    // randomise array elements
    res.send({
        quote: quotes[0],
        url: "https://twitter.com/tweet/123",
    });
});

app.get("/fruits", (request, response) => {
    modelFruit.find().then((data) => {
        console.log("get /fruits:", data);
        response.send(data);
    });
});

app.get('/fruits/:id', (request, response) => {
    console.log("request parameter's log", request.params);
    request.params.id;
    response.send(fruits);
});

app.get("/fruits/:fruitId", (request, response) => {
    console.log("request.params:", request.params);
    const matchedFruit = fruits.find((el) => {
        console.log("el:", el);
        if (el.id == request.params.fruitId) {
            return true;
        }
    });
    if (matchedFruit) {
        response.send(matchedFruit);
    } else {
        response.status(404).send("Fruit not found");
    }
    console.log("matched fruit:", matchedFruit)
    response.send(matchedFruit);
});

//   Get color
app.get("/fruits/color/:fruitColor", (request, response) => {
    console.log("request.params:", request.params);
    const matchedColor = fruits.find((el) => {
        console.log("el:", el);
        if (el.color == request.params.fruitColor) {
            return true;
        }
    });
    if (matchedColor) {
        response.send(matchedColor);
    } else {
        response.status(404).send("Color not found");
    }
    console.log("matched color:", matchedColor)
    // response.send(matchedColor);
});

app.listen(3000, () => {
    console.log("server is running");
});