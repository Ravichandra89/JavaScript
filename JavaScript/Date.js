//  Creating object of the Date
// let myDate = new Date()
// // console.log(myDate)
// console.table([myDate.toString(),myDate.getTime(),myDate.toISOString(),myDate.toLocaleString(),myDate.toLocaleDateString()])

// console.log(myDate.getFullYear())

// Set the default


// let newDate = new Date(2023,0,23)
let newDate = new Date("20230-01-14")
console.log(newDate);

//  LocalString
newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: 'Indian'
})