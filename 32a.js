var current_users = ["Amna", "Awais", "Sana", "Nida", "Suji"];
var new_user = [
    "Awais",
    "John",
    "Amna",
    "Alina",
    "Ayesha",
    "Zoya",
    "SUNDAR",
];
function checkUsernameAvailability(username) {
    return !current_users.some(function (existingUser) { return existingUser.toLowerCase() === username.toLowerCase(); });
}
for (var _i = 0, new_user_1 = new_user; _i < new_user_1.length; _i++) {
    var name_1 = new_user_1[_i];
    var isAvailable = checkUsernameAvailability(name_1);
    if (isAvailable) {
        console.log("Username \"".concat(name_1, "\" is available."));
    }
    else {
        console.log("Username \"".concat(name_1, "\" is already taken. Please choose a new one."));
    }
}
