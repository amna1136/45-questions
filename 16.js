var a = ["Ali", "Ahmed", "Bilal"];
console.log(a[0], "is invited in dinner");
console.log(a[1], "is invited in dinner");
console.log(a[2], "can not come in dinner \n");
console.log("New Updated List: \n");
a[2] = "Awais";
console.log(a[0], "is invited in dinner");
console.log(a[1], "is invited in dinner");
console.log(a[2], "is invited in dinner \n");
console.log("Bigger dinner table is found!! \n");
a.unshift("Amna");
a.splice(2, -1, "sana");
a.push("Shumaila");
for (var index = 0; index < a.length; index++) {
    console.log("Updated Invitation People are: ", a[index]);
}
