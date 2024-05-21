function make_shirt(size: String, message: String) {
  if (message == "I love Typescript") {
    console.log("Shirts are medium and large");
  } else if (message == "Hello world") {
    console.log(`Shirts are in ${size} sizes`);
  } else if (message == "Hello Amna") {
    console.log(`Shirts are in ${size} sizes`);
  }
}

make_shirt("large", "I love Typescript");
make_shirt("small", "Hello world");
make_shirt("XXL", "Hello Amna");
