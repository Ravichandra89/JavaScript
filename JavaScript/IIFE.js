// Immediately Invoked Function Expressions (IIFE)
// This function used for Immediately run the functio when it created 

(function code(){
    console.log('DB CONNECTED');
})();

//  Argumental 
(function chai(name){
    console.log('I am, ' +name)
})('Ravi');

(function chai(val1,...name){
    console.log(val1);
    console.log(name);
})('Ravi','chandra','rajesh');

