let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const item of num) {
  if (item == 1) {
    console.log(`${item}st`);
  } else if (item == 2) {
    console.log(`${item}nd`);
  } else if (item == 3) {
    console.log(`${item}rd`);
  } else {
    console.log(`${item}th`);
  }
}
