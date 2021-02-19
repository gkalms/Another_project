console.log("App running");
// $ is a short hand notation for jQuery
console.log("jquery:", $);
console.log("h1 js object", $("#first-heading"));
$("#first-heading").html("Week 04 day 01");
$('#second-example').html("georgie's first try");
// $("h1").html("week04");
const fruits = ["banana", "apple", "cherries", "grapes"];
let listDom = ""; //to create a string, we initialize it as empty
console.log("listDom before loop:", listDom);
for (i = 0; i < fruits.length; i++) {
  listDom += `<li>${fruits[i]}</li>`; // the += is shortcut for append; each fruit element gets appended to list(the variable listDom)
  console.log("loop listDom:", listDom); //shows us state of the variable kistDom after loop of code; 
}
listDom = `<ul>${listDom}</ul>`; //Surround the value of listdom at this point
console.log("list:", listDom);

$("#container").append(listDom);

