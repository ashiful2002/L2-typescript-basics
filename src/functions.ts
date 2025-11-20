// arrow func , normal func

function add(num1: number, num2: number): number {
  return num1 + num2;
}

// console.log(add(2, 34));

const add2 = (num1: number, num2: number): number => {
  return num1 + num2;
};

// console.log(add2(432, 2334));

const poorUser = {
  name: "ashiful",
  balance: 32,
  addBalance(value: number): number {
    return this.balance + value;
  },
};

// console.log(poorUser.addBalance(22));

const arr1: number[] = [1, 3, 5];

const sqrArray = arr1.map((elem: number): number => {
  return elem * elem;
});

console.log(sqrArray);
