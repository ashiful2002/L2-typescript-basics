type User = {
  name: string;
  age: number;
};
type Role = {
  role: "admin" | "user";
};
type UserWithRole = User & Role;
// with interface
interface IUser {
  name: string;
  age: number;
}

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const user1: UserWithRole = {
  name: "asdf",
  age: 23,
  role: "user",
};

const user2: IUser = {
  age: 23,
  name: "asdf",
};
const user3: IUserWithRole = {
  name: "asdf",
  age: 23,
  role: "user",
};

type Add = (num1: number, num2: number) => number;

interface IAdd {
  (num1: number, num2: number): number;
}

const add: IAdd = (num1, num2) => {
  return num1 + num2;
};

type Friends = string[];
const friends: Friends = ["A", "B", "C", "D"];
