const myObj = {
    name : "Ravi",
    "full name" : "Chandra",
    age : 18,
    location : "Jodhpur",
    email : "ravi@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

myObj.greeting = function(){
    console.log("Hello JS user");
}

console.log(myObj.greeting());
