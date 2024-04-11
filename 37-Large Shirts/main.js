// Making a Function
function make_Shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love TypeScript"; }
    console.log("You have ordered a ".concat(size, " shirt with the ").concat(printMessage, " prints on it"));
}
// Calling a Function
make_Shirt();
// Calling a Function now with Medium size and default message
make_Shirt("Medium");
// Calling a Function now with Small size and also Different Print Message
make_Shirt("Small", "I Love Pakistan");
