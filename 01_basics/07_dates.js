// let myDate = new Date()

// console.log(myDate)

// console.log(myDate.toString())


// console.log(myDate.toDateString())

// console.log(myDate.toISOString())

// console.log(myDate.toLocaleDateString())

// console.log(myDate.toLocaleTimeString())

// console.log(myDate.toUTCString())


// let myCreatedDate = new Date(2025,0,25, 5,3,22,33)
// let myCreatedDate = new Date("2025-01-14")

// let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate.toLocaleString())

// let myTimeStamp = Date.now()
// let myCreatedDate = new Date("01-14-2025")


// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime())
// console.log(Math.round(Date.now()/1000))


// let newDate = new Date()

// console.log(newDate.getHours())


let newDate = new Date();
// console.log("Local Hour:", newDate.getHours());


// console.log("UTC hour:", newDate.getUTCHours());
let newDate2 = newDate.toLocaleString("en-BD", { timeZone: "UTC+06:00" });

// newDate.toLocaleString('default',{
//     weekday:"long",
//     timeZone: "Asia/Dhaka"
// })

console.log(newDate.getHours(newDate2))