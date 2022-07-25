class RetiredForagerBee extends ForagerBee {
  // TODO..

  // constructor
  constructor () {
    // super to be able to access 'this' in subclass
    super ();

    // new or updated properties
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';

  }

  // methods
  // This method returns a string
  forage () {
    return 'I am too old, let me play cards instead';
  }

  // This method adds something to the treasureChest array
  gamble (treasure) {
    this.treasureChest.push(treasure);
  }
};
