//Problem 1
class Animal {
    constructor(eyes, limbs, tail) {
      this.numEyes = eyes;
      this.numLimbs = limbs;
      this.hasTail = tail;
    }
    printNumOfLimbs() {
      console.log(`Number of limbs ${this.numLimbs}`);
    }
  }
  const basekalms = new Animal(2,4, true);
  basekalms.printNumOfLimbs()


  //Problem 2
 class Cat extends Animal {
     constructor(eyes, limbs, tail, name, breed, eyecolor) {
         super(eyes, limbs, tail);
         this.catName = name;
         this.catBreed = breed;
        this.catseyecolor = eyecolor
         }
     printName() {
     console.log(`My cat's name is ${this.catName}`);
         };
     }
 }
 const basegeorgie = new Cat(2,4,false,"lulu", "moggy", "blue");
 basegeorgie.printName()


 //Teachers's example
//  class Animal {
//     constructor(eyes, limbs, tail, breedOfAnimal) {
//       this.numOfEyes = eyes;
//       this.numOfLimbs = limbs;
//       this.hasTail = tail;
//       this.breed = breedOfAnimal;
//     }
  
//     printNumberOfLimbs() {
//       console.log(`This animal has ${this.numOfLimbs} limbs`);
//     }
//     showBreed() {
//       console.log(`This animal is a  ${this.breed}`);
//     }
//   }
  
//   class Cat extends Animal {
//     constructor(eyes, limbs, tail, name, eyeColor, breedOfAnimal) {
//       super(eyes, limbs, tail);
//       this.catName = name;
//       this.catEyeColor = eyeColor;
//       this.breed = breedOfAnimal;
//     }
//     printName() {
//       console.log(
//         `Hi, my name is ${this.catName} and I am the most intelligent cat in Melbourne`
//       );
//     }
//   }
  
//   // class Dog extends Animal {
//   //   constructor(eyes, limbs, tail, name, breed, bestFriend) {
//   //     super(eyes, limbs, tail);
//   //     this.dogName = name;
//   //     this.dogBreed = breed;
//   //     this.dogBestFriend = bestFriend;
//   //   }
  
//   //   printNameAndBestFriendsName() {
//   //     console.log(
//   //       `Hi, my name is ${this.dogName} and my best friend's name is ${this.dogBestFriend}`
//   //     );
//   //   }
//   // }
  
//   const baseAnimal = new Animal(2, 4, false, "birman");
//   baseAnimal.printNumberOfLimbs();
//   baseAnimal.showBreed();
  
//   const kitty = new Cat(2, 4, true, "Snow", "blue", "maine coon");
//   kitty.printName();
//   kitty.showBreed();
