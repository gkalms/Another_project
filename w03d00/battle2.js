class Ship {
    constructor(name, firepower, accuracy, hull) {
      console.log("Ship constructor");
      this.name = name;
      this.firepower = firepower;
      this.accuracy = accuracy;
      this.hull = hull;
      this.dead = false;
    }
    attack(enemyShip) {
      console.log("-------attack------");
      if (enemyShip.dead) {
        console.log(`${enemyShip.name} is already destroyed`);
        return;
      }
      const randomAttack = this.getRandomIntInclusive(0.3, 1); // 0.8
      console.log("randomAttack:", randomAttack);
      console.log("this.accuracy:", this.accuracy);
      // generate some random no >= this.accuracy (0.7)
      if (randomAttack >= this.accuracy) {
        // log ship taken a hit
        console.log(`${enemyShip.name} attacked successfully`);
        // calculate damageAmount formula =  this.firepower * randomNo (5 * 0.8 = 4)
        const hullDamageAmount = this.firepower * randomAttack;
        console.log("hullDamageAmount:", hullDamageAmount);
        enemyShip.takeDamage(hullDamageAmount);
      } else {
        console.log(`${enemyShip.name} missed`);
      }
    }
    /**
     * Calculate Hull (reduce this.hull)
     * @params
     *
     */
    takeDamage(damageAmount) {
      this.hull = this.hull - damageAmount;
      console.log(`${this.name} hull:`, this.hull);
      if (this.hull <= 0) {
        console.log(`${this.name} has been destroyed`);
        this.dead = true;
      }
    }
  
    getRandomIntInclusive(min, max) {
      //The maximum is inclusive and the minimum is inclusive
      return parseFloat((Math.random() * (max - min + 1) + min).toFixed(2));
    }
  }
  
  class EarthShip extends Ship {
    constructor(name, firepower, accuracy, hull) {
      console.log("EarthShip constructor:");
      super(name, firepower, accuracy, hull);
      this.retreat = false;
    }
  }
  
  class AlienShip extends Ship {
    constructor(name, firepower, accuracy, hull) {
      super(name, firepower, accuracy, hull);
    }
  }
  
  const earthBattleShip = new EarthShip("USS Assembly", 5, 0.7, 20);
  const aliens = [];
  
  for (let i = 0; i < 3; i++) {
    const alien = new AlienShip(`alien${i}`, 3, 0.7, 5);
    aliens.push(alien);
  }
  
  // aliens = [{dead: false, name: 'alien0',...}, {dead: false, name: 'alien1',...}, {dead: false, name: 'alien2',...}]
  for (let i = aliens.length - 1; i >= 0; i--) {
    while (aliens[i].dead === false) {
      earthBattleShip.attack(aliens[i]);
    }
  }
  console.log("game finished");
  