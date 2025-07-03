// Primitive

//7 types: String, Number, Boolean, null, Undefined, Symbol, BigInt

const score = 100;
const scroreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail = undefined;
let userEmail2;

const id = Symbol('123')
const anotehrId = Symbol('123')

// console.log(id === anotehrId)

const bigNumber = 234343434343534322454n

// Reference (non-primitive)

// Arry, Objects, Functions,

const heros = ["shaktima", "naagraj", "doga"];

let myObj = {
    name: "ashrafu",
    ages: 22,

}


const myFunction = function (){
    // console.log("hello world")
}


// console.log(typeof heros)



//**************************************************************************** */

// Stack (Primitive), heap (non-primitive)

let myYoutubename = "ashrafuldotcome"

let anotherName = myYoutubename

anotherName = "artans"

// console.log(anotherName)
// console.log(myYoutubename)

let userOne = {
    email:"user@google.com",
    upi: "user@ybl"
}


let userTwo = userOne


userTwo.email = "ashra@google.come"

console.log(userOne.email)
console.log(userTwo.email)
