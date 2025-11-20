type RichPeoplesVehicle = {
  car: string;
  bike: string;
  cng: string;
};
// string literal type

type MyVehicle1 = "bike" | "car" | "cng";

type MyVehicle2 = keyof RichPeoplesVehicle;

const MyVehicle: MyVehicle1 = "bike";
const CarName: MyVehicle2 = "car";

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user: User = {
  id: 122,
  name: "Ashiful",
  address: {
    city: "dhaka",
  },
};
// const  myId  = user.id
const myId = user["id"];
const myName = user["name"];
const address = user["address"];
// console.log({ myId, myName, address });

const getPropertyFromObj = <Z>(obj: Z, key: keyof Z) => {
  return obj[key];
};

const result = getPropertyFromObj(user, "name");
console.log(result);

const product = {
  brand: "HP",
};
const result3 = getPropertyFromObj(product, "brand");
console.log(result3);
