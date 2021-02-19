const complexObject = {
    taco: {
        meat: "steak",
        cheese: ["panello", "cheddar", "brie"],
        ingredientCount: {
            Cheese: 1
        },
    },
    characters: [
        {
            name: "Jeff",
            occupation: "manager",
        },
        {
            name: "shelby",
            occupation: "astronaut",
        }
    ]
};

const xracters = complexObject.characters;
const food = complexObject.taco.cheese;
console.log(xracters[0].occupation);
console.log(food[1]);
