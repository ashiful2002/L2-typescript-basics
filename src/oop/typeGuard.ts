// typeGuard

//  in typeof

type AlplaNeumeric = number | string;
const add = (num1: AlplaNeumeric, num2: AlplaNeumeric) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1 + num2;
  }
};
console.log(add(2, 3));
console.log(add(2, "32"));
console.log(add("3", 32));

type NormalUser = {
  name: string;
};
type AdminUser = {
  name: string;
  role: "admin";
};

const getUserInfo = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`${user.name} is  an ${user.role}`);
  } else {
    console.log(`${user.name} is a Normal user`);
  }
};

getUserInfo({ name: "nasim", role: "admin" });
getUserInfo({ name: "nasim" });
