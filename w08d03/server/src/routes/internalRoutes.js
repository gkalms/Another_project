// import express
const { request, response } = require("express");
const express = require("express");

// Create a new router to handle internal routes
const router = express.Router();

// Add a health check route
router.get("/_health", (request, response) => 
response.send("OK"));

// This allows the api to work at root level of internalRouter
router.get("/", (request, response) =>
response.send("Handling root requests to internal routes")
);

//following line sof code are to teach about different endpoints in a route
router.get("/quiz", (request, response) =>
  response.send("This is the answer for the quiz!")
);

router.get("/quiz2", (request, response) =>
  response.send("check what happens now!")
);

// Export your internal router so it can be used by index.js
module.exports = router;
