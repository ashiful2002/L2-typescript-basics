const createArrayString = (value: string) => {
  return [value];
};

const createArrayWithNumber = (value: number) => [value];
const createArrayWithUserObj = (value: { id: number; name: string }) => [value];

const createArrayWithGeneric = <T>(value: T) => [value];

const arrString = createArrayWithGeneric("apple");

const arrObj = createArrayWithGeneric({ id: 23, name: "23" });

const createArrayWithTuple = (param1: string, param2: string) => {
  return [param1, param2];
};

const createArrayTuppleWithGeneric = <X, Y>(param1: X, param2: Y) => {
  return [param1, param2];
};
const res1 = createArrayTuppleWithGeneric("asdf", false);
const res2 = createArrayTuppleWithGeneric(222, { name: "saf" });

const addStudentToCourse = <T>(studentInfo: T)=>{
    return {
        course: "Next Level", 
        ...studentInfo
    }
}

const studentInfo1 = {
  id: 123,
  name: "Mukto",
  hasPen: true,
};
const studentInfo2 = {
  id: 123,
  name: "Mukto",
  hasCar: true,
  isMarried: true,
};


const result1 = addStudentToCourse(studentInfo2)
console.log(result1);
