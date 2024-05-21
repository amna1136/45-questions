function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is a city of ").concat(country));
}
describe_city("Lahore", "Pakistan");
describe_city("Karachi", "Pakistan");
describe_city("Islamabad");
