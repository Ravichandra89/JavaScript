const user = {
    username: "ravi",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to JavaScript`);
        console.log(this)
    }
}

user.welcomeMessage()
// Changine username
user.username = "sam"
user.welcomeMessage()

//  Outside this is empty 
console.log(this)

// function key(){
//     let username = "Chandra",
//     console.log(this.username);
// }

// key()

const keys = function() {
    let username = 'Chandra'
    console.log(this.username);
}

// Arrow method
const chai = () => {
    let username = 'Chandra'
    console.log(this);
}

// Arros function with arguments

const AddTwoNum = (num1,num2) => {
    return num1+num2
}

let result = AddTwoNum(1,2)
// console.log(result);

// Implicit return function 

const TwoNum = (num1,num2) => (num1+num2)

// console.log(TwoNum(3,4));

// myArray = [1,2,4,5,5]
// console.log(myArray.foreach())