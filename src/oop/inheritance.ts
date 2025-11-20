class Person {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  goSleep(sleepingHours: number) {
    console.log(`${this.name} ${sleepingHours} ghonta ghumay`);
  }
}
class Student extends Person {}
const nasim = new Student("nasim", 8, "rowmari");
class Teacher extends Person {
  designation: string; 

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);  
    this.designation = designation;
  }
}
const teacher1 = new Teacher("amit hasan", 12, "khalek lane", "photographer");
