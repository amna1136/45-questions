var current_user = [
    "Amna",
    "Awais",
    "Sana",
    "Nida",
    "Suji",
    "Shumaila",
    "Shazia",
];
var new_user = ["Awais", "Amna", "Sana", "Alina", "Ayesha", "Zoya", "SUNDAR"];
var len1 = current_user.length;
var len2 = new_user.length;
for (var item1 = 0; item1 < new_user.length; item1++) {
    for (var item2 = item1; item2 < current_user.length; item2++) {
        if (new_user[item1] == current_user[item2]) {
            console.log("Username taken");
        }
        if (new_user[item1] !== current_user[item2]) {
            console.log("Username available");
        }
    }
}
//console.log(new_user.some(item1 => current_user.includes(item1)));
// new_user.forEach((element1) => {
//   current_user.forEach((element2) => {
//     if (element1 === element2) {
//       console.log("Username Already taken try different username.");
//     } else {
//       console.log("Username is available");
//     }
//   });
// });
