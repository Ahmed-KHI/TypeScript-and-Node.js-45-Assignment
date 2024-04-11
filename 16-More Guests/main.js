"use strict";
// Creating a Guest List Array
let guestList = ["Fidel Castro", "Che Guevara", "Vladimir Lenin", "Leon Trotsky"];
// Making variable for those guest who cant come
let dontCome = guestList[0];
// Print the name of guest who cant come
console.log(dontCome, "do not have to come");
// Add or Remove Values from Guest list Array
guestList.splice(0, 1, "Raúl Castro");
// Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table for Dinner");
// Adding a new value at starting index of array
guestList.unshift("Samuel Adams");
// Adding a new value at ending index of array
guestList.push("Mustafa Kemal Ataturk");
// Adding a new guest at middle index of array
let middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Sun Yat-sen");
// Print Message of Updated List
console.log("Updated List of our Guests");
// Sending an invitation message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`Hi ${oneguest}, Would you like to dinner with me?`));
