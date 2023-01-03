//Errors 



const err2=new Error("datatat");
// HAdnlding error
try{
  throw err; // throwing error
}catch(err){
//  console.log("Error handled")
}


// Reference error -->
// this occurs if you try to access something which doesn;t exists
//const err=new ReferenceError("datatat");
//throw err;

// Syntax error --comes when you have some problem with the syntax of your code
/*function f{
  
}
*/
// Create Custom syntax Error
//const err=new SyntaxError("datatat");
//throw err;

// RangeError 
//let num=10000000000000000000000000000000000;
//console.log(num);
// Range error occurs when you try to go beyond the memory range available

/*
function foo(){
  foo();   // this will lead to range error
}
foo();
*/

//throw new RangeError("ranged error ocuurred");

//Type Error --->

// When you are assigning the wrong type to the variable

throw new TypeError("type  error ocuurred");