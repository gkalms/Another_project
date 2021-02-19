// fruit Id

const form = `
<form id="form-fruit">
  <div class="form-group">
    <label for="fruitId">Fruit Id</label>
    <input type="text" class="form-control" id="fruitId" placeholder="Enter fruit Id" name="fruitId">
  </div>
  <button type="submit" class="btn btn-primary">Delete Fruit</button>
</form>
`;


const deleteFruit = () => {
    // category logic
    const categoryResponse = $.ajax({
      type: "GET",
      url: "/api/fruits/category/all",
    }).done((fruitCategories) => {
      console.log("fruitCategories", fruitCategories);
    })
  
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

    // Making the call to delete request
    const response = await $.ajax({
      type: "DELETE",
      url: `/api/fruits/delete-fruit/${$("#fruitId").val()}`,
      contentType: "application/json",
      data: JSON.stringify(requestBody),
    });
    // Logging response back to the console
    console.log(`This is the response I get back!: ${response}`);
  });

  return form;
    };

export default deleteFruit;


