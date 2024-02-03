function myfun() {
    console.log('R');
    console.log('A');
    console.log('V');
    console.log('I');
}

// myfun() 
//  Argumental Function
function addTwoNumbers(num1,num2){
    console.log(num1+num2);
}

// addTwoNumbers(12,12)
function addNumber(num1,num2){
    // let result = num1 + num2;
    // return result;
    return num1+num2;
}

let result = addNumber(10,10)
// console.log(result);

function loginUserMessage(username = "Ravi"){
    if(username == undefined){
        console.log("Please Enter a User Name");
        return
    }
    retuern `${username} just logged in `
}

console.log(loginUserMessage());
console.log(loginUserMessage("Chandra"))