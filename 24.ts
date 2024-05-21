let color1 = "Red";
let nam = ["ali", "ahmed", "hamza"];

let a = " Hello Amna, would you like to learn some Python today?";
let b = a.toLowerCase();
let num1 = 5;
let num2 = 10;

console.log("True Condition \n");

console.log("Color1:", color1 == "Red");
console.log("lowercase :", a.toLowerCase() == b);
console.log(num1 < num2);
console.log(num1 <= num2);
console.log(num1 < num2 && num1 <= num2);
console.log(num1 < num2 || num1 <= num2);
console.log(Array.isArray(nam));

console.log("False Condition \n");

console.log("Color1:", color1 == "Green");
console.log("lowercase :", b == a);
console.log(num1 > num2);
console.log(num1 >= num2);
console.log(num1 > num2 && num1 >= num2);
console.log(num1 > num2 || num1 >= num2);
console.log(Array.isArray(b));
