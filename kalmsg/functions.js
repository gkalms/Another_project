/* 
- function which sums two inputs 
- and returns the sum
- once function built, we will call that function and store in varaiable
- we will log the variable via console.log
*/

//Lesson 1
/** 
function addTwoNumbers(x,y) {
    //curly brackets creates a scope - everthing within curly brackets
    return 1; //we are testing that code only refres to the return bit
}
const firstTest = addTwoNumbers(1,2); //Note this will return 1 irrespective of input

console.log(firstTest);
*/

//lesson 1_b
/*
function addTwoNumbers(x,y) {
    //curly brackets creates a scope - everthing within curly brackets
    return x + y;
}
const firstTest = addTwoNumbers(1,2); //Note this will return 1 irrespective of input

console.log(firstTest);
*/

//Test 1
 function myName(firstname, surname) {
     return "Hi, my name is " + firstname + " " + surname; // can also be written as return 'Hi my name is ${firtsname} ${surname}';
 }
const myDetails = myName("Georgie","Kalms");
console.log(myDetails);