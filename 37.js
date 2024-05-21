function make_shirt(size, message) {
    if (message == "I love Typescript") {
        console.log("Shirts are medium and large");
    }
    else if (message == "Hello world") {
        console.log("Shirts are in ".concat(size, " sizes"));
    }
    else if (message == "Hello Amna") {
        console.log("Shirts are in ".concat(size, " sizes"));
    }
}
make_shirt("large", "I love Typescript");
make_shirt("small", "Hello world");
make_shirt("XXL", "Hello Amna");
