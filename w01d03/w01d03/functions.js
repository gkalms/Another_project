//10th Tuesday
/**
function doSomething(Big) {
    console.log("ole");
    console.log("konichiwa");
    console.log(Big);
}
doSomething("hujambo");
*/

//12th Thursday
/**
 * function thisIs() {
    console.log(5 == "5");
}
thisIs();

/**
function func2(name) {
    console.log("Hi,this is ", name);
}
func2("georgie");

*/
/**
//Test 1 - create function to output a single name
function myFirstName(name) {
    console.log("Hello I am", name);
}
myFirstName("Georgina");
*/

//Test 2 - Georgie's way
function multiplyTwoNumbers(num1, num2) {
    const multiplicationAnswer = (num1 * num2);
    console.log("Total of multiplication is", multiplicationAnswer); 
}
multiplyTwoNumbers(4,5);

//Teachers way for Test 2
function multiply(number1, number2) {
    //console.log(number1, number2) //Use this to debugging;not for commercial code
    const multiplication = number1 * number2;
    //console.log(multiplication)//normall for debugging purposes, not in commercial code
    return multiplication; 
}
console.log(multiply(9,5));
