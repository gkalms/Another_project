let things = ["Table", "Chair", "Fan", "Rug"];
let [a, b, c, d, e] = things;
console.log(c); //Output: Fan
console.log(d); //Output: Rug
console.log(e); //Output: undefined
console.log(things);

const [firstPerson, ...restOfTheClass] = [
    "Ash"
  ];
  console.log(firstPerson);
  console.log(restOfTheClass);