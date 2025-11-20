let anything: any;
anything = 213;
(anything as number).toFixed(2);
// console.log((anything as number).toFixed(2));

const kgToMGConverter = (
  input: string | number
): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  }
  if (typeof input === "string") {
    const [value] = input.split(" ");
    return `Converted output is: ${Number(value) * 1000}`;
  }
};
const result1 = kgToMGConverter(2) as number;
const result2 = kgToMGConverter("2 kg") as string;
console.log({ result1, result2 });

type CustomError = {
  message: string;
};

try {
} catch (error) {
  console.log((error as CustomError).message);
}
