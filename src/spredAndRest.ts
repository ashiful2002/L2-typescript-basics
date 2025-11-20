const friends = ["rahim", "fahad"];

const schoolFriends = ["abir", "nasim", "fahim"];

const collegeFriends = ["robi", "rabbi"];

// friends.push(schoolFriends);
friends.push(...collegeFriends);
friends.push(...schoolFriends);
// console.log(friends);

const user = {
  name: "swadhin",
  phoneNo: "0170000000",
};
const otherUser = {
  hobby: "outing",
  favouriteColor: "Black",
};

const userInfo = { ...user, ...otherUser };
// rest
// console.log(userInfo);

const sendInvitation = (f1: string, f2: string, f3: string) => {
  console.log(`friend 1 ${f1}`);
  console.log(`friend 1 ${f2}`);
  console.log(`friend 1 ${f3}`);
};
// sendInvitation("nasim", "fahim", "swadhin");

const sendRestInvitaion = (...friends: string[]) => {
  friends.forEach((friend: string) =>
    console.log(`send invitation to: ${friend}`)
  );
};

sendRestInvitaion("abir", "antor", "antu", "angur");
