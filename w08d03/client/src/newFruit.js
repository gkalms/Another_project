// name, color, readyToEat, age

import { async } from "regenerator-runtime";

const form = `
<form id="form-fruit">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" placeholder="Enter Fruit name" name="name">
  </div>
  <div class="form-group">
    <label for="color">Color</label>
    <input type="text" class="form-control" id="color" placeholder="Enter color of the fruit" name="color">
  </div>
  <div class="form-group">
    <label for="age">Age</label>
    <input type="text" class="form-control" id="age" placeholder="Enter fruit's age" name="age">
  </div>
  <fieldset class="form-group">
    <legend class="col-form-label">Ready to Eat?</legend>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" id="readyToEatYes" name ="readyToEat" value="true">
      <label class="form-check-label" for="readyToEatYes">Yes</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" id="readyToEatNo" name ="readyToEat" value="false">
      <label class="form-check-label" for="readyToEatNo">No</label>
    </div>
  </fieldset>
  <div class="form-group">
    <label for="categoryId">Category</label>
    <select name="categoryId" id="categories"></select>
  </div>
  <button type="submit" class="btn btn-primary">Create Fruit</button>
</form>
`;

const newFruit = () => {
  const categoryResponse = $.ajax({
    // this gets all data back from category document
    type: "GET",
    url: "api/fruits/category/all",
  }).done((fruitCategories) => {
    // define a variable = optionhtml
    let optionsHtml = "";
    // creates a for loop with values from the category
    fruitCategories.forEach((fruitEl) => {
      // this adds the category ID and name pair to a drop down list (the 'select' tag in html); with each loop it adds to the drop down list
      optionsHtml += `<option value=${fruitEl._id}>${fruitEl.name}</option>`;
    })
    $('#categories').append(optionsHtml);
  });

  // form submit handler logic
  $(document).on("submit", "#form-fruit", async (e) => {
    e.preventDefault();
    console.log($("#name").val());
    console.log($("#color").val());
    console.log($("#age").val());
    console.log($(`input[name="readyToEat"]:checked`).val());
    console.log($('#categories').val());
    console.log("Data entered");

    // this is the object that gets sent as part of the post request
    const requestBody = {
      name: $("#name").val(),
      color: $("#color").val(),
      age: $("#age").val(),
      readyToEat: $(`input[name="readyToEat"]:checked`).val(),
      categoryId: ($('#categories')).val()
    };
    console.log("requestBody", requestBody);

    // Making the call to post request
    const response = await $.ajax({
      type: "POST", // This could also work for GET
      url: "/api/fruits/new-fruit",
      contentType: "application/json",
      data: JSON.stringify(requestBody),
    });
    console.log("response", response);
    // Logging response back to the console
    console.log(`This is the response I get back!: ${response}`);
  });
  return form;
};

export default newFruit;

