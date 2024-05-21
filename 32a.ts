let current_users: string[] = ["Amna", "Awais", "Sana", "Nida", "Suji"];

let new_user: string[] = [
  "Awais",
  "John",
  "Amna",
  "Alina",
  "Ayesha",
  "Zoya",
  "SUNDAR",
];

function checkUsernameAvailability(username: string): boolean {
  return !current_users.some(
    (existingUser) => existingUser.toLowerCase() === username.toLowerCase()
  );
}

for (let name of new_user) {
  const isAvailable = checkUsernameAvailability(name);
  if (isAvailable) {
    console.log(`Username "${name}" is available.`);
  } else {
    console.log(
      `Username "${name}" is already taken. Please choose a new one.`
    );
  }
}
