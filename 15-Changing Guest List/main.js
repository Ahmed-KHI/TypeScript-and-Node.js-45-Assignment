"use strict";
let guestList = ["Fidel Castro", "Che Guevara", "Vladimir Lenin", "Leon Trotsky"];
let dontCome = guestList[0];
console.log(dontCome, "do not have to come");
guestList.splice(0, 1, "Raúl Castro");
guestList.forEach(guest => console.log(`Hi ${guest}, Would u like to Dinner with me?`));
