const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const cors = require("cors");

//connect to mongoose can also be written as
// const whatdayisit = "w0903"
//mongoose.connect('mongodb://localhost:27017/${whatdayisit}', {

// Initialise mongoose - connect to mongodb
mongoose.connect("mongodb://localhost:27017/w10d01", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Initialise app object
const app = express();
app.use(
  session({
    secret: "This is a random secret example",
    resave: false,
    saveUninitialized: false,
  })
);

// This is the port your application will use
const port = 3000;

// Import all routers
const internalRouter = require("./routes/internalRoutes");
const fruitRouter = require("./routes/fruitRoutes");
const userRouter = require("./routes/userRoutes");

// Add middleware to be able to read and understand json files
app.use(express.json());
app.use(cors()); //Cross Origin Resource Sharing - allows two diffrent servers (fronend & backend)to talk to each other via Ajax

// Tell express that it needs to use the routers we have initialised
app.use("/internal", internalRouter);
app.use("/api/fruits", fruitRouter);
app.use("/api/users", userRouter);

// Start your server by listening for requests
app.listen(port, () =>
  console.log(`Fruit app listening at http://localhost:${port}`)
);
