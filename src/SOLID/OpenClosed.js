//Classes, Modules, Functions should be opened for extending but should be closed for modification

class Animal {
  constructor(animal) {
    this.animal = animal;
  }

  get getAnimal() {
    return this.animal
  }

  makeSound() {}
}

class Lion extends Animal {
  constructor(animal) {
    super(animal);
  }

  makeSound() {
    return 'Roar!!!';
  }

}

class Squirrel extends Animal {
  constructor(animal) {
    super(animal)
  }

  makeSound() {
    return 'Squeak!'
  }

}

const animals = [
  new Lion('Lion'),
  new Squirrel('Squirrel'),
]

const animalSounds = (animals) => {
  return animals.forEach(animal => {
    console.log(`${animal.getAnimal} say ${animal.makeSound()}`);
  });
}

animalSounds(animals);

class Discount {
  constructor(price, procent) {
    this.price = price;
    this.procent = procent
  }

  get getDiscount() {
    //this.price - this.price * this.procent / 100;
    return this.price * this.procent / 100;
  }

}

class VipDiscount extends Discount {
  constructor(price, procent) {
    super(price, procent);
  }

  get getDiscount() {
    return super.getDiscount * 2;
  }

}

const user = new Discount(100, 20).getDiscount;
const superUser = new VipDiscount(100, 20).getDiscount;
console.log(`USER: ${user}`, `SUPER_USER: ${superUser}`);