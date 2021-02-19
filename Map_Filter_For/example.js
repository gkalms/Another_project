const arrayExample = [1, 2, 3];

// [1,2,3]
// const mysteryVariable = arrayExample.map((num) => {
//     return num + 1;
//   });
//   // const mysteryVariable = arrayExample.map((num) => num + 1);
//   console.log("-------------This is the map example--------------");
//   console.log(arrayExample);
//   console.log(mysteryVariable);
//   console.log("-------------------------------------------------------");


//   Breakout example 1
// const input = [1, 2, 3, 4, 5, "end"];

// const output = input.map((num) => {
//     if (typeof num !== "number") {
//         return num;
//     }

//     if (num % 2 === 0) {
//         num = 1;
//     }

//     else {
//         num = 0;
//     }
//     return num;
// });

// console.log(input);
// console.log(output);

// Breakout example 2

// add new key values, and some from diffrent varaiables
const input2 = [
    {
      name: "Ash",
      age: 10,
    },
    {
      name: "Stacey",
      age: 5,
    },
  ];

  const input3 = [
    {
      name: "Kalms",
      age: 12,
    }
  ];

const staticobject = "GA";

const output2 = input2.map((ele) => {
    return {
        name: ele.name,
        age: ele.age,
        time: new Date(),
        data: {stringified: `${ele.name} ${ele.age}`},
        class: staticobject,
        othername: input3 //adding data froma separate object
    };
});

console.log(input2);
console.log(output2);