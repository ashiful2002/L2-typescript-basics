//  nullable

const getUser = (input: string | null) => {
  if (input) {
    console.log(`from DB: ${input}`);
  } else {
    console.log("all data from db");
  }
};

getUser(null);

// unknown
const disCountCalculator = (input: unknown) => {
  if (typeof input === "number") {
    const disCountPrice = input * 0.1;
    console.log(disCountPrice);
  } else if (typeof input === "string") {
    const [disCountPrice] = input.split(" ");
    console.log(Number(disCountPrice) * 0.1);
  } else {
    console.log("wrong input");
  }
};

disCountCalculator(100);
disCountCalculator("100 tk");
disCountCalculator(null);

const throrError = (msg: string): never => {
  throw new Error(msg);
};

throrError("asfd");

