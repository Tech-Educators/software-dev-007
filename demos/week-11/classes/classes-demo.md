```js
// These are all animals:
// dog
// cat

// this animal is different because it can fly
// bird

// fur, feathers, flying, 2 legs, 4 legs
class Animal {
  // constructor is just a function that runs once, when you instantiate a new object using the class
  constructor(nameP, legsP) {
    this.name = nameP;
    this.legs = legsP;
  }

  speak() {
    console.log(`${this.name} says hello`);
  }
}

// instantiation (creating an instance of)
const bingo = new Animal("Bingo", 4);
const pete = new Animal("Pete", 8);

bingo.speak();
pete.speak();

// create another animal, that has all the properties of Animal but also new functionaily
class Bird extends Animal {
  constructor(nameP, legsP, canFlyP) {
    super(nameP, legsP); // run the parents constructor
    this.canFly = canFlyP;
  }

  fly() {
    if (this.canFly) {
      console.log(`${this.name} soars through the air.`);
    } else {
      console.log(`${this.name} falls with style.`);
    }
  }
}

const tweety = new Bird("Tweety", 2, true);
const happy = new Bird("Happy", 2, false);

tweety.speak();
tweety.fly();
happy.fly();
```
