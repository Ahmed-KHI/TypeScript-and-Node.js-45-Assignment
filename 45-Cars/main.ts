interface Car {
    manufacturer: string;
    model: string;
    [key: string]: string;
}

function create_car(manufacturer: string, model: string, ...options: string[]): Car {
    // Initialize a car object with manufacturer and model
    let car: Car = {
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
