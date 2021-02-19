// let playerTurn = true;

// console.log("Is it the player's turn? " , playerTurn);

// playerTurn = !playerTurn;

// console.log("Is it the player's turn? " , playerTurn);

// playerTurn = !playerTurn;

// console.log("Is it the player's turn? " , playerTurn);

// playerTurn = !playerTurn;

// console.log("Is it the player's turn? " , playerTurn);

//while loop

// let num = 1;
// while (num <= 100) {
//     console.log(num);
//     num+=10;
// };

// let num = 0;
// while (num <= 5000) {
//     console.log(num*num);
//     num+=100;
// };

// let num = 100;
// while (num >= 1) {
//     console.log(num);
//     num-=10;
// };

// for (let i = 999; i <= 9999; i+=1000) {
// console.log(`The number is ${i}`);
// };

// const favFoods = ["mangoes", "meat", "water"];
// console.log(`my favourite foods ${favFoods}`);
// console.log(favFoods[2]);
// console.log(favFoods.length)

// for (let i = 0; i < favFoods.length; i ++){
//     console.log(`i love this meal: ${favFoods[i]}`);
// };

// const drSeuss = ["Cat in the Hat", "Sam I am", "Grinch","Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];
// for (let i = 0; i < drSeuss.length; i ++) {
//     console.log(drSeuss[i]);
// };

// function printBoo () { // same as writing const printBoo = () => {
// 	console.log('======');
// 	console.log('Boo!');
// 	console.log('======');
// };
// printBoo();

// const printMeow = () => {
// 	console.log('======');
// 	console.log('meoow!');
// 	console.log('======');
// };
// printMeow();

// const addSum = () => {
// 	console.log(10 + 10);
// };
//addSum();

// const printTriangle = () => {
//     console.log("#");
//     console.log("##");
//     console.log("###");
//     console.log("####");
//     console.log("#####");
// }
// printTriangle();

// 
class Person {
	constructor(name, age, eyes, hair){
		this.legs = 2;
		this.arms = 2;
		this.name = name;
		this.age = age;
		this.eyes = eyes;
		this.hair = hair;
	}
};
const me = new Person('Matt', 36, 'blue', 'blonde');
console.log(me);


class Hero extends Person {
	constructor(name, age, eyes, hair){
		super(name, age, eyes, hair);
		this.superPowers = ['flight', 'superhuman strength', 'x-ray vision', 'heat vision', 'cold breath', 'super-speed', 'enhanced hearing', 'nigh-invulnerability']
	}
};
const superman = new Hero('Clark Kent', 30, 'blue', 'black')
console.log(superman);

