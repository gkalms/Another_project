class Ship {
    constructor(name, firepower, accuracy, hull) {
    //   console.log("Ship constructor");
      this.name = name;
      this.firepower = firepower;
      this.accuracy = accuracy;
      this.hull = hull;
    }
    attack() {
      console.log("attack");
    }
    takeDamage() {}
  }
  //If not changing anything then type the extend line without repeating constructor and Super part //Not best parctice
  //class EarthShip extends Ship {}
    
  //if chasing or adding properties, add the constructor and Super part
  class EarthShip extends Ship { 
    constructor(name, firepower, accuracy, hull, color) {
    super(name, firepower, accuracy, hull); // this tells it to pass values back to parent properties
     this.color = color;
     this.retreat = false;
    }
  }
  class alienShip extends Ship { 
    constructor(name, firepower, accuracy, hull) {
    super(name, firepower, accuracy, hull);
    }
}

  const earthBattleShip1 = new EarthShip("Assembly", 5, 0.7, 20, "red");
  const earthBattleShip2 = new EarthShip("Entreprise", 4, 0.6, 18, "blue");
  const alien1 = new alienShip("aliens", 3, 0.7, 5);
  console.log(earthBattleShip1);
  console.log(earthBattleShip2);
  earthBattleShip1.attack();