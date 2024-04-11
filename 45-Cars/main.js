"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function create_car(manufacturer, model, ...options) {
    // Initialize a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add options to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car; // Return the created car object
}
// Example usage
let myCar = create_car("Rolls-Royce", "Phantom", "Color: Belladonna Purple", "Phantom-Suite: true", "Year: 2024");
console.log(myCar);
