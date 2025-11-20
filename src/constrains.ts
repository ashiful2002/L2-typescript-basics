type Student = {id: number, name: string, dateOfBirth: string, class: string}

const addStudentToCourse = <T extends Student>(studentInfo: T)=>{
    return {
        course: "Next Level", 
        ...studentInfo
    }
}
const studentInfo1 = {
  id: 123,
  name: "Mukto",
  hasPen: true,
  dateOfBirth: "23-34-2005", class: "asd"
};
const studentInfo2 = {
  id: 123,
  name: "Mukto",
  hasCar: true,
  isMarried: true,
};
const studentInfo3 = {
  hasWatch: true,
};
const result1 = addStudentToCourse(studentInfo1)
console.log(result1);


// function formatValue(value: string | number | boolean): string | number | boolean {
//   if (typeof value === "string") {
//     return value.toUpperCase();
//   }

//   if (typeof value === "number") {
//     return value * 10;
//   }

//   if (typeof value === "boolean") {
//     return !value;
//   }

//   // This will never happen but added for completeness
//   throw new Error("Invalid type");
// }

// // Sample Outputs
// console.log(formatValue("hello")); // HELLO
// console.log(formatValue(5));       // 50
// console.log(formatValue(true));    // false

// 6-5 Explore Enum
//  theke dekhte hobe
