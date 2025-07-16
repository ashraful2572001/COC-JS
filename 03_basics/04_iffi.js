// Immediately Invoked Function Expression (IIFE)



(function chai (){
    console.log("BD CONNECTED")
})();


( (name)=>{
    console.log(`BD CONNECTED TWO ${name}`)
})("ashraful");