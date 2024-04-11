// Define Variety
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
// Test for equality and inequality with strings
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
console.log("Is apple is not equal to apple?");
console.log(apple != "apple");
// Tests using Lowercase Function
console.log("Is APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("Is APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
// Numerical tests
// Equal to
console.log("Is ten is equal to twenty?");
console.log(ten == twenty);
// Not Equal to
console.log("Is ten is not equal to twenty?");
console.log(ten != twenty);
// Greater than
console.log("Is ten is greater than zero?");
console.log(ten > 0);
// Less than
console.log("Is twenty is less than 10?");
console.log(twenty < 10);
// Greater than or equal to
console.log("Is ten is greater than or equal to 5?");
console.log(ten >= 5);
// Less than or equal to
console.log("Is twenty is less than or equal to 10?");
console.log(twenty <= 10);
// Tests usging "and" & "or" Operators
// Using && (and)
console.log("twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
// Using || (or)
console.log("20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
// Test wheather an item is include in array
console.log("Is orange include in my Fruits array");
console.log(fruits.includes("orange"));
// not Include
console.log("Is orange not include in my Fruits array");
console.log(fruits.includes("orange"));
