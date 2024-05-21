var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
    var item = num_1[_i];
    if (item == 1) {
        console.log("".concat(item, "st"));
    }
    else if (item == 2) {
        console.log("".concat(item, "nd"));
    }
    else if (item == 3) {
        console.log("".concat(item, "rd"));
    }
    else {
        console.log("".concat(item, "th"));
    }
}
