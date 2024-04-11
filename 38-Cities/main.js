// Describe a Function
function describe_city(city, country) {
    if (country === void 0) { country = "France"; }
    console.log("".concat(city, " is in ").concat(country));
}
// Calling the Function
describe_city("Paris");
describe_city("Marseille");
describe_city("Jerusalem", "Israel");
