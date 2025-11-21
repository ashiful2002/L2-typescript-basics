class Person {
  getSleep() {
    console.log(`I am a normal Happy person and sleep 8 hours`);
  }
}
class Student extends Person {
  getSleep() {
    console.log(`I am a Student and sleep 7 hours`);
  }
}
class NextLevelDeveloper extends Person {
  getSleep() {
    console.log(`I am a Student and sleep 5 hours`);
  }
}
const getSleepingHours = (param: Person) => {
  param.getSleep();
};
const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();
getSleepingHours(person1);
getSleepingHours(person2);
getSleepingHours(person3);



class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    return this.height * this.width;
  }
}

const getArea = (shape: Shape) => {
  console.log("Area:", shape.getArea());
};

const shape1 = new Shape();
const shape2 = new Circle(12);
const shape3 = new Rectangle(11, 22);

getArea(shape1); // 0
getArea(shape2); // 452.389...
getArea(shape3); // 242
