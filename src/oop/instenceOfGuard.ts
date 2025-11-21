// oop instense of type guard / type narrowing

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sleeps(numOfHours: number) {
    console.log(`${this.name} sleeps ${numOfHours} hours daily`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }
  doStudy(numOfHours: number) {
    console.log(`${this.name} doing ${numOfHours} ghonta study kore`);
  }
}
class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }
  takeClass(numOfHours: number) {
    console.log(`${this.name} takes ${numOfHours} ghonta regularly`);
  }
}
const isStudent = (user: Person) => {
  return user instanceof Student;
};
const isTeacher = (user: Person) => {
  return user instanceof Teacher;
};
const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(12);
  } else if (isTeacher(user)) {
    user.takeClass(23);
  } else {
    user.sleeps(3);
  }
};

const person1 = new Person("mahodi");
const student1 = new Student("mukto");
const teacher1 = new Teacher("mukto");

getUserInfo(person1);
getUserInfo(student1);
getUserInfo(teacher1);
