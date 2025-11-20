// type UserRoles = "Admin" | "Editor" | "Viewer";
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "Admin";
    UserRoles["Editor"] = "Editor";
    UserRoles["User"] = "User";
})(UserRoles || (UserRoles = {}));
var canEdit = function (role) {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else {
        return false;
    }
};
var isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);
