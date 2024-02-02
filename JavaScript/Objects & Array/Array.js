const array = [1,2,3,4,5,6,7]
const myHeros = ['Ravi','Chandra','Rahul','Bhikundia']

const NewArray = new Array(1,2,3,4,5,6)

// Array Methods
array.push(10)
array.push(8)
array.push(9)
array.push(10)
array.pop()
array.push(11)

let ArrLength = array.length()
console.log(ArrLength)

// Unshift Method push array at 0 index
array.unshift(11)
array.shift()

console.table(array.includes(0))
console.log(array.indexOf(3))

// Copy the array into NewArray
const newArray = array.join();
console.log(newArray)

// Slice and Splice()

const sl = newArray.slice(1,3)
console.log(sl)
console.log("A Orignial Array",array)

//  spslice changes the original Array
const myArr2 = array.splice(1,3)
console.log("C ",myArr2)
console.log(myArr2)
