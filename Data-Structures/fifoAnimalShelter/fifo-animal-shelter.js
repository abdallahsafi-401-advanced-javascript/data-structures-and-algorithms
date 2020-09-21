'use strict';

module.exports = class AnimalShelter {
  constructor() {
    this.cat = [];
    this.dog = [];
  }

  enqueue(animal) {
    if (animal.type === 'cat') {
      this.cat.push(animal);
      return undefined;
    }
    this.dog.push(animal);
    return undefined;
  }

  dequeue(pref) {
    let longestTime = 0;
    let adoptAnimal = null;

    if (this.cat.length >= this.dog.length) {
      longestTime = this.cat[0]; 
    } else {
      longestTime = this.dog[0]; 
    }
    if (pref !== 'dog' && pref !== 'cat') {
      return longestTime;
    }
    if (pref === 'cat') {
      adoptAnimal = this.cat[0]; 
      return adoptAnimal;
    }
    adoptAnimal = this.dog[0]; 
    return adoptAnimal;
  }
};