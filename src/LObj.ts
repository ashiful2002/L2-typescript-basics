// non premitive or referance type: object

type userType = {
  organizartion?: string;
  // literal type
  defineAstype?: "hello world";
  //   readonly types or access modofiers
  readonly accessType?: "fixed value";
  firstName: string;
  // declared optional type
  middleName?: string;
  lastName: string;
  isMarried?: boolean;
};
let user: userType = {
  firstName: "ashiful",
  middleName: "islam",
  lastName: "mukto",
};

let user2: userType = {
  firstName: "jhankar",
  lastName: "mahbub",
  isMarried: false,
  organizartion: "Programing hero",
  defineAstype: "hello world",
};

user2.organizartion = "Next Level";
// user2.defineAstype = "hello world adsf";
console.log(user2);
