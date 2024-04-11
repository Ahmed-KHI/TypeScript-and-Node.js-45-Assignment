// Array of Current Users
let current_users = ["Bismarck","einstein","Lincoln","Caesar","Alexander"]

// Array of New Users
let new_users = ["Erdoğan","Putin","Xi Jinping","Einstein","Lincoln"]

// Loop through new_users to check for usernames availability

new_users.forEach(new_one_user => {

// Making a Condition for username already exist and save in our_condition variable
let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

// Print Different Messages Using If-Else Statements
if(our_condition){
console.log(`Sorry ${new_one_user} is already taken!`)
}else{
console.log(`This Username ${new_one_user} is available`)
}
})