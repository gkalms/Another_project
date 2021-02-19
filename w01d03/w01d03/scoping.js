// let, const, var
/**
1. let variable = "kalms" 
2. var variable = "kalms"
// 'let' and 'var' do the same thing; they are mutable i.e the defined varables can be reassigned
Difference between let and var is scope. 
Let can either be global or local varaible. Local scope is when it is defined within the function curly brackets

Example

Let scopeExample1 = 1; //this variable exists outsid eof the function below, but can be still be called inside
Function printgreeting(){
    let scope2 = 10 // this variable ony exists within and for this function; cannot be refrenced outside by other code
    console.log(scopeExample1)
}
console.log(scope2)

3. const variable = "kalms" // this variable should not chnage
example
const name = "ash"
name = "ash" //this would error as variable name has already been defined.

*/