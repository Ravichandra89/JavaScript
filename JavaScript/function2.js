//  Rest or Spread function

function CalculatePrice(val1,val2,...num1){
    console.log();
    return num1
}

// console.log(CalculatePrice(10,20,30,40));

const user = {
    username: 'Hitesh',
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

handleObject(user)

//  HandleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const NewArray = [200,300,400,700]

function ArraySection(getArray){
    return getArray[1]
}

console.log(ArraySection([200,400,500,1000]));

