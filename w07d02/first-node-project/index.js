// console.log("Hi. This is georgie");
// console.log("This is my first node lesson");

const express = require('express')
const app = express()

// class TestClass {
//   constructor() {
//     this.name = "ash";
//   }
// }
// const myObj = TestClass();

//  root path
app.get('/', function (req, res) {
  res.send('node lesson on thursday 17th dec 2020')
})

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
        email:'georgina.kalms@gmail.com',
        ph: '0400400400'
  });
});

// send an object back

const quotes = [
    "kanye west should not be president",
    "trump tower is the best",
  ];
// above object could also work inside the function below.
app.get("/quote", function (req, res) {
    // randomise array elements
    res.send({
      quote: quotes[0],
      url: "https://twitter.com/tweet/123",
    });
  });

console.log("my server has started");
app.listen(3000);