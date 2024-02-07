// const isUserLoggedIn = true

// if(isUserLoggedIn){
//     console.log('Succesfully Loged In');
// }

const temprature = 60

// if(temprature <= 50){
//     console.log(`Less then ${temprature}`);
// }else{
//     console.log('Temprature is grater then 50');
// }

// const score = 90

// if(score > 100){
//     let power = 'fly'
//     console.log(`User power : ${power}`);
// }else{
//      power = "helo"
//     console.log(`User power : ${power}`);
// }

// Implicit If condition

const balance = 1000

// if(balance > 500) console.log('Test'),
// console.log('Test2');


//  Multiple condition 

// if(balance < 500){
//     console.log("Less than 500");
// }else if(balance < 700){
//     console.log("less than 700");
// }else if(balance < 900){
//     console.log('Less then 900');
// }else{
//     console.log('Less than 1200')
// }

const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromGmail = true

if(isUserLoggedIn && debitCard){
    console.log('Allow to buy course');
}

if(loggedInFromGmail || loggedInFromGoogle){
    console.log('User logged In');
}