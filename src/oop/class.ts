// oop >> class >>> object

// works like a blue print
// class animal {
//   name: string;
//   spacies: string;
//   sound: string;
//   constructor(name: string, spaceies: string, sound: string) {
//     this.name = name;
//     this.spacies = spaceies;
//     this.sound = sound;
//   }
//   makeSound() {
//     console.log(`${this.name} barking dog saldom bites`);
//   }
// }

// const dog = new animal("gulfam", "dog", "ghew ghew");
// console.log(dog.name);
// const cat = new animal("lal chan", "cat", "meao meao");
// console.log(dog.name);

// dog.makeSound();
// cat.makeSound();
class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  makeSound() {
    console.log(`${this.name} the ${this.species} says "${this.sound}"`);
  }
}
const dog = new Animal("Gulfam", "dog", "ghew ghew");
const cat = new Animal("Lal Chan", "cat", "meao meao");
dog.makeSound();
cat.makeSound();
