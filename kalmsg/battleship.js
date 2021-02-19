class Ship {
    constructor(hull, firepower, accuracy, shipName) {
      this.hull = hull;
      this.firepower = firepower;
      this.accuracy = accuracy;
      this.dead = false;
      this.name = shipName;
    }
  
    attack() {
      let attackPoint = Math.random(); // this is a random number used to determine how much the damage amount should be
      console.log(`Attack point generated: ${attackPoint} `);
      let damageAmount = 0;
      if (attackPoint >= this.accuracy) {
        console.log(this.name + " has been attacked successfully");
        damageAmount = (this.firepower * attackPoint).toFixed(2); // toFixed = rounds to 2
        return damageAmount;
      }
      console.log(this.name + " could not be attacked");
      return damageAmount;
    }
  
    takeDamage(damageAmount) {
      this.hull = this.hull - damageAmount;
      console.log(`${this.name} has been damaged!`);
  
      // Check if your ship's life is over
      if (this.hull <= 0) {
        console.log(`${this.name} was destroyed!`);
        this.dead = true;
      }
    }
  }
  
  const testShip = new Ship(20, 5, 0.1, "test ship");
  console.log(testShip);
  
  // const damageAmountToShip = testShip.attack();
  // console.log(`Damage done to this ship was: ${damageAmountToShip} `);
  
  testShip.takeDamage(20);
  console.log(`This is my ship's life/hull after the damage: ${testShip.hull}`);