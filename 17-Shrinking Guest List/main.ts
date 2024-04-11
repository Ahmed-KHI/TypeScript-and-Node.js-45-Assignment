// Creating a Guest List Array
let guestList = ["Fidel Castro", "Che Guevara", "Vladimir Lenin", "Leon Trotsky"];

// Making variable for those guest who can't come
let dontCome = guestList[0];

// Print the name of guest who can't come
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
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Sun Yat-sen");

// Print Message of Updated List
console.log("Updated List of our Guests");

// Sending an invitation message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`Hi ${oneguest}, Would you like to dinner with me?`));


// Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so i can only invite two Guests to dinner with me");

// Using while-loop to remove guests from the array until only two names remain
while(guestList.length > 2) {
let removedGuest = guestList.pop();
console.log(`Sorry, ${removedGuest} I can't invite you to Dinner`);
}

// Sending invitations to the last two guests on the list
console.log("Invitations to the last 2 Guests");
guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner`)); 

// Remmoving last two Guests from the list
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);