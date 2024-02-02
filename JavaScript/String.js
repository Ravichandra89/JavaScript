const name = "Ravi"
const val = 10

// console.log(name +" "+ val + " Chandra")

console.log(`Hello my name is ${name} and my repocount is ${val}`)

// String Methods
const gameName = new String("Ravi-Ch-com")

console.log(gameName[0])
console.log(gameName[4])

console.log(gameName.toUpperCase())
console.log(gameName.length)

console.log(gameName.charAt(2))

const newstr = gameName.substring(0,4)
console.log(newstr)

const another = gameName.slice(-8,4)
console.log(another)

//  Space removing
const StringOne = "    hitesh     "
console.log(StringOne)
console.log(StringOne.trim())


//  Replace method
const url = "Https://ravi.com/ravi%30chandra"
console.log(url.replace("%30","-"))

console.log(url.includes('sundar'))

console.log(gameName.split('-'))