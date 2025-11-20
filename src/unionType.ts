// union type

type UserRole = "admin" | "user" | "guest";
type Employee = {
  id: string;
  name: string;
  phoneNo: string;
};
type Manager = {
  designation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const guestRole = (role: UserRole) => {
  if (role === "admin") {
    return "Admin Dashboard";
  } else if (role === "user") {
    return "User Dashboard";
  }
  {
    return "Guiest";
  }
};

guestRole("guest");

// intersection type

const chowdhuriSaheb: EmployeeManager = {
  id: "asdf",
  name: "asdd",
  phoneNo: "01234",
  designation: "manaegr",
  teamSize: 12,
};
