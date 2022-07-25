class HoneyMakerBee extends Bee {
  // TODO..
  // constructor function with inherited properties
  constructor () {

    // Must call super constructor in derived class BEFORE accessing 'this' or returning from derived constructor
    super();

    // age property set to age
    this.age = 10;

    // a job property set to make honey
    this.job = 'make honey';

    // a honeyPot property that is set to 0
    this.honeyPot = 0;
  }

  // Methods
  // This method adds 1 to the honeyPot
  makeHoney () {
    this.honeyPot++;
  }

  // This method subtracts 1 from the honeyPot
  giveHoney () {
    this.honeyPot--;
  }

};
