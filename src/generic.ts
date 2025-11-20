// dynamically generalize
// const friends: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
// const rollNumbers: number[] = [4, 5, 6];
// const inEligibleList: boolean[] = [true, false, true];

type GenericArray<value> = Array<value>;

const friends: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];
const rollNumbers: GenericArray<number> = [4, 5, 6];
const inEligibleList: GenericArray<boolean> = [true, false, true];

type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<string, string> = ["54", "23"];
const coordinates2: Coordinates<number, number> = [54, 23];

type User = { name: string; age: number };
const userList: GenericArray<User> = [
  {
    name: "asdf",
    age: 123,
  },
  {
    name: "null",
    age: 55445,
  },
];
