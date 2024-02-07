const userEmail = ""

if(userEmail){
    console.log('Got user email');
}else{
    console.log("Don't Have user email")
}

// falsy
false , 0 ,-0,BigInt,0n,"",null,undefined,NaN

// Truthy
// "0","false" {} [] " "

const emptyObj = {}

if(Object.keys(emptyObj).length == 0){
    console.log('Object is empty');
}


//  To check array empty or not we uses the length function

// Nullish Coalescing Operator (??): null undefined

let val1
val1 = null ?? 10
val1 = undefined ?? 3

console.log(val1);
