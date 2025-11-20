const arrayOfNumbers: number[] = [2, 54, 6, 565, 5];

const arrayOfString: string[] = ["1", "34", "3"];
const arrayOfAtringUsingMap: string[] = arrayOfNumbers.map((num) =>
  num.toString()
);
console.log(arrayOfAtringUsingMap);

const user = {
  id: 213,
};
type ArrayOfNum = {
  height: number;
  width: number;
};
type height = ArrayOfNum["height"];

// type AreaOfString = {
//   height: string;
//   width: string;
// };
type Area<T> = {
  [key in keyof T]: number | boolean ;
};
const area1: Area<{ height: string; width: boolean }> = {
  height: 40,
  width: false,
};