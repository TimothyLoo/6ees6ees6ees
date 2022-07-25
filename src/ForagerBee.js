class ForagerBee extends Bee {
  // TODO..
  // constructor
  constructor () {
    // super to inherit
    super ();

    // properties
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];

  }

  // methods
  // This method adds a treasure to the treasureChest array
  forage (treasure) {
    this.treasureChest.push(true);
  }

}
