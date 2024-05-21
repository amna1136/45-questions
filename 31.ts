let username = [
  "Awais",
  "Amna",
  "Amais",
  "Shumaila",
  "Najoomi",
  "Sana",
  "admin",
];
let len = username.length;

username.splice(0, len);

if (username.length == 0) {
  console.log("We need more users!!");
}
