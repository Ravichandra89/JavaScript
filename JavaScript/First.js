const accountId = 1123;
let accountEmail = "ravi@gmail.com"
var accountPassword = "1234"
accountCity = "Jodhpur";


console.log(accountId);

// Updating const not allowed accountId = 1212

// Printing const and var in table format
console.table([accountId,accountEmail,accountPassword,accountCity])


// JavaScript undefined varibles
let accountState;
console.log(accountState)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])