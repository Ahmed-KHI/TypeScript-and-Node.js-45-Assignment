// Define a function with a rest parameter that accept items arguments representing our sandwich
function makeSandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: \n");
    item.forEach(function (singleItem) { return console.log("-" + singleItem); });
    console.log("\nNow Enjoy Sandwich");
}
// Call the function 3 times with 3 different number of arguments
makeSandwich("Egg", "Cheese", "Chicken", "Mayo");
makeSandwich("Bread", "Butter", "Sauce");
makeSandwich("Bread", "Egg", "Lettuce", "Ketchup", "Cheese", "Mayo", "Tomato", "Mayo");
