const express = require("express");
const mongoose = require("mongoose");
const FruitsApi = require("./src/models/FruitDatabaseModel");
const app = express();
mongoose.connect("mongodb://localhost:27017/fruits" , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const port = 3000; // 7702

app.use(express.json()); //add JSON parsing middleware

// internal/basic routes
app.get("/", (req, res) => res.send("Hello World!"));

// health check
app.get("/_health", (req, res) => res.send("OK"));

// smoke test
app.get("/_smokeTest", (req, res) => res.send("OK"));

// Fruits routes

// root fruits routes
app.get("/fruits", (req, res) => res.send("Welcome to the fruits routes"));

// by id
app.get("/fruits/:id", (req, res) => {
  console.log(req.params.id);
  res.send("OK");
});

app.post("/fruits/new-fruit", (req, res) => {
    // todo: change this to have actual logic to add entry to the database
    const requestFromPostman = req.body;
    console.log(requestFromPostman);
  
    // add entry to the database by calling create function
    FruitsApi.create(requestFromPostman).then((data) => {
      console.log("Entry was successfuly created");
      console.log(data);
    });
  
    // send a successful resposne if entry is added
    res.send("OK");
  });

// created a new object: id -> 1
// {name: grapes, age: 2}

app.patch("/fruits/update/:id", (req, res) => {
  // which id should I update
  console.log(req.params.id);

  // what should the new body for that id look like
  console.log(req.body);

  // Success response
  res.send(
    `Object with id:${req.params.id} has been changed to ${JSON.stringify(
      req.body
    )}`
  );
});

app.delete("/fruits/delete/:id", (req, res) => {
  // todo: write delete code
  console.log(req.params.id);

  // Success response
  res.send(`This object with id: ${req.params.id} has been deleted!`);
});

// CRUD
// CREATE - post
// READ - get
// UPDATE - PUT / PATCH
// DELETE - delete

// app.post

// app.get

// arrays

// mongo

app.listen(port, () =>
  console.log(`Fruit app listening at http://localhost:${port}`)
);
