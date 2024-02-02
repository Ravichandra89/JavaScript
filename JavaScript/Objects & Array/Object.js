//  Object Creation by Object litterals

const myObj = {
    name : "Ravi",
    "full name" : "Chandra",
    age : 18,
    location : "Jodhpur",
    email : "ravi@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(myObj.email)
console.table([myObj['name'],myObj['full name'],myObj['age']])

//  Updating the object values
myObj["email"] = "hitesh@youtube.com"
console.log(myObj["email"])

// Freez the object value
// Object.freeze(myObj)
myObj.email = "Harish@gmail.com"
console.log("Value does not change",myObj.email)

//  Function in JavaScript
myObj.greeting = function(){
    console.log("Hello JS user");
}

// Function with values
myObj.greetingtwo = function(){
    console.log(`Hello Js User , ${this.name}`);
}

console.log(myObj.greeting())
console.log(myObj.greetingtwo())