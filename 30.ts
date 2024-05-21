let username = [
  "Awais",
  "Amna",
  "Amais",
  "Shumaila",
  "Najoomi",
  "Sana",
  "admin",
];

// for (let element = 0; element < username.length; element++) {
//   if (username[element] == "admin") {
//     console.log("Hello admin, would you like to see status report.");
//   } else {
//     console.log(username[element], ", Hello thanks for logging in");
//   }
// }

username.forEach((element) => {
  if (element == "admin") {
    console.log("Hello admin, would you like to see status report.");
  } else {
    console.log(element, ", Hello thanks for logging in");
  }
});
