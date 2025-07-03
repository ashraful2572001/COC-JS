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
    console.log("hello world")
}


console.log(typeof heros)