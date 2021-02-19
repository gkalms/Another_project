const express = require("express");
const FruitsApi = require("../models/FruitModels");
const CategoryApi = require("../models/CategoryModel");

// Create a new router to handle fruits routes
const router = express.Router();

// Add a health check for fruits routes
router.get("/_health", (request, response) => {
  console.log("session", request.session);
  response.send(" Fruits health routes work OK")
});

// returns all fruit
router.get("/all",(request, response) => {
  FruitsApi.find()
  .populate('categoryId')
  .then((fruits) => {
response.send(fruits);
  }).catch(() => {
    response.status(500).send("unable to query fruits");
  });
});


// creates new fruit
router.post("/new-fruit", (request, response) => {
  // Extract your request body
  const requestBody = request.body;
  // Call your database and add that fruit object to your collection
  FruitsApi.create(requestBody).then((data) => {
    console.log("This fruit was added successfully!");
    console.log(data);
    response.send("This fruit was added successfully!");
  });
});


//Creates category collection via postman
router.post("/category", (request, response) => {
  const requestBody = request.body;
  CategoryApi.create(requestBody).then((data) => {
    response.send(data);
  }).catch(() => {
    response.status(500).send("unable to create category");
  });
});

// update an existing fruit
router.patch("/update-fruit/:id", (request, response) => {
FruitsApi.findByIdAndUpdate(request.params.id, request.body, {new: true, upsert: true}) //'new' if this is true return the new/updated body/object to the api, else return old data/object
.then((data) => {
  console.log("Update succesfull!!");
  response.send(data);
}).catch(() => {
  console.log("Something went wrong");
  response.status(404).send("fruit was not found!!");
});
})

// delete existing fruits[GK]
router.delete("/delete-fruit/:id", (request, response) => {
  FruitsApi.findByIdAndDelete(request.params.id, request.body) 
  .then((data) => {
    console.log("Delete succesfull!!");
    response.send(data);
  }).catch(() => {
    console.log("Something went wrong");
    response.status(404).send("fruit was not found!!");
  });
  })

//get all categories so we can use that information in the UI
router.get("/category/all", (request, response) => {
CategoryApi.find().then((categories) => {
  response.send(categories);
}).catch((error) => {
  console.log('error', error);
  response.status(500).send("cannot load categories");
});
});

module.exports = router;
