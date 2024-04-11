// Creating a Array
let userName = ["Cristiano Ronaldo", "Lionel Messi", "Neymar Jr.", "Admin","James Rodriguez"];

// Using ForEach Loop on Array
userName.forEach(oneUser =>{
if(oneUser === "Admin"){
console.log(`Hello ${oneUser},would you like to see a status report?`)
}else{
console.log(`Hello ${oneUser},thank you for logging in again.`)
}
})