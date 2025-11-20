// ? :  ternary operator
//?? :nulish coalishing operator
//?. optional chaining
const biyerJonnoEligible = (age: number) => {
  //   if (age >= 21) {
  //     console.log("You are eligible ");
  //   } else {
  //     console.log("You are not eligible");
  //   }

  const result = age >= 21 ? "You are eligible" : "You are not eligible";
  console.log(result);
};

// biyerJonnoEligible(23);

const userTheme = undefined;
const selectTheme = userTheme ?? "Light theme";

const isAuthenTicated = "";
const resultWithTernary = isAuthenTicated ? isAuthenTicated : "You are guiest";
const resultWithNulish = isAuthenTicated ?? " You are guist";

console.log({ resultWithTernary, resultWithNulish });

// previously worked in optional chaining
