//singleton

// object literals

//Object.create


const mySym = Symbol("ke1")



const jsUser = {
    name:"Ashraful",
    "full name": "ashraful islam",
    mySym: "mykey1",
    [mySym]: "mykey1",
    [mySym]: "mykey1s",
    age: 18,
    location: "Sylhet",
    email: "ashraful@google.come",
    isLoggedIn:false,
    lastloginDays: ["Monday", "saturday"]
}

// Object.freeze(jsUser)

// jsUser.email = "ashraful@chagpt.come"



// console.log(jsUser.email)

// console.log(jsUser["email"])

// console.log(jsUser["full name"])

// console.log(typeof jsUser[mySym])

// console.log(jsUser)



jsUser.greeting = function(){
    console.log("hello js user")
}
jsUser.greeting2 = function(){
    console.log(`hello js user ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greeting2())
