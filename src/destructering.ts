// object destructering , array destructering

const user = {
  id: 123,
  name: {
    firstName: "ashiful",
    middleName: "islam",
    lastName: "mukto",
  },
  gender: "male",
  favColor: "red",
};
// name elias
const {
  favColor: muktoFavColor,
  name: { middleName },
} = user;

// console.log(muktoFavColor, middleName);

const friends = ["karim", "rahim", "mannan"];

const [, myBestFriend] = friends;
const [, , bestFriend2] = friends;
console.log(myBestFriend, bestFriend2);
