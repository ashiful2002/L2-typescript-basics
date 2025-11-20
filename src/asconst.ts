// type UserRoles = "Admin" | "Editor" | "Viewer";

// enum UserRoles {
//   Admin = "Admin",
//   Editor = "Editor",
//   User = "User",
// }
const UserRoles = {
  Admin: "Admin",
  Editor: "Editor",
  User: "User",
} as const;

const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else {
    return false;
  }
};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);
