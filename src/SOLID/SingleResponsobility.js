class Animal {
  constructor(name) {
    this.name = name;
  }

  get getAnimalName() {
    return this.name;
  }

}

class AnimalDB {
  constructor() {
    this.storage = {}
  }

  get getAnimal(animal) {
    return this.storage[animal]
  }

  set saveAnimal(animal) {
    this.storage[animal] = animal;
  }

}