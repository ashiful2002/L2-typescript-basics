type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNumber: string;
  address: {
    division: string;
    city: string;
  };
};

type IsAdmin = boolean;
type Name = string;

//type alias in functions
type AddFunc = (num1: number, num2: number) => number;
// confusing
const add: AddFunc = (num1, num2) => {
  return num1 + num2;
};

const user1: User = {
  id: 12,
  name: {
    firstName: "Ashiful",
    lastName: "Islam",
  },
  gender: "male",
  contactNumber: "01745454",
  address: {
    division: "Dhaka",
    city: "Azimpur",
  },
};
const user2: User = {
  id: 12,
  name: {
    firstName: "nasim",
    lastName: "mahmud",
  },
  gender: "male",
  contactNumber: "01734554",
  address: {
    division: "dhaka",
    city: "gazipur",
  },
};

const isAdmin: IsAdmin = false;
const name: Name = "ashiful islam";
