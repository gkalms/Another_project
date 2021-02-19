// name, color, readyToEat, age

const form = `
<form id="form-fruit">
  <div class="form-group">
    <label for="fruitId">Fruit Id</label>
    <input type="text" class="form-control" id="fruitId" placeholder="Enter fruit Id" name="fruitId">
  </div>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" placeholder="Enter a fruit name" name="name">
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
  <button type="submit" class="btn btn-primary">Update Fruit</button>
</form>
`;

const updateFruit = () => {
  // category logic
  const categoryResponse = $.ajax({
    type: "GET",
    url: "/api/fruits/category/all",
  }).done((fruitCategories) => {
    console.log("fruitCategories", fruitCategories);
    let optionsHtml = "";
    fruitCategories.forEach((fruitEl) => {
      console.log("fruitEl", fruitEl);
      optionsHtml += `<option value=${fruitEl._id}>${fruitEl.name}</option>`;
      console.log("optionsHtml", optionsHtml);
    });
    console.log("optionsHtml", optionsHtml);
    $("#categories").append(optionsHtml);
  });

  // form submit handler logic
  $(document).on("submit", "#form-fruit", async (e) => {
    e.preventDefault();
    console.log($("#fruitId").val());
    console.log($("#name").val());
    console.log($("#color").val());
    console.log($("#age").val());
    console.log($(`input[name="readyToEat"]:checked`).val());
    console.log($("#categories").val());
    console.log("Data entered");

    // this is the object that gets sent as part of the post request
    const requestBody = {
      name: $("#name").val(),
      color: $("#color").val(),
      age: $("#age").val(),
      readyToEat: $(`input[name="readyToEat"]:checked`).val(),
      categoryId: $("#categories").val(),
    };
    console.log("requestBody", requestBody);

    // Making the call to post request
    const response = await $.ajax({
      type: "PATCH", // OR GET
      url: `/api/fruits/update-fruit/${$("#fruitId").val()}`,
      contentType: "application/json",
      data: JSON.stringify(requestBody),
    });
    // console.log("response", response);
    // Logging response back to the console
    console.log(`This is the response I get back!: ${response}`);
  });

  return form;
};

export default updateFruit;


