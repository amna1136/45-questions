function describe_city(city: String, country: String = "Pakistan") {
  console.log(`${city} is a city of ${country}`);
}

describe_city("Lahore", "Pakistan");
describe_city("Karachi", "Pakistan");
describe_city("Islamabad");
