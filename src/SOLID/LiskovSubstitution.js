//Requires subclasses to be able to replace their superclasses

class Animal {
  LegCount(){};
}

class Lion extends Animal {
  LegCount() {
    return 'Lion has 4 legs';
  }
}

const animal = [new Lion];

const countLegs = (animals) => {
  animals.forEach(animal => {
    console.log(animal.LegCount());
  });
}

countLegs(animal)