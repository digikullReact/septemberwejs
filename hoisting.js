//Its a default behaviour of js -->
//Hoisting is a process in which the declaration(only declaration) of variable ,function or class is moved to the top of the scope



var c=9;
//Declaration is -- var c;
// initialization is done by js internally and it stores the undefined value in the variable
// assignment -->c=9

// what is the benefit of hoisting --> is you can actually use the variable or function before they are created 

"use strict";

//console.log(c);  // you can acces this variable here because of hoisting

 c=9;
console.log(c);

/*
foo();

function foo(){
  console.log("9999")
}
*/



//let c=9;

//var c=9;

// var c ---->declaration

// c =undefined ---<initialization js does that internally
// c=9  --->assignment -->

//let returnValue=foo()
//console.log(returnValue);


/*
function foo(){
  return 2;
}
*/

// var c; //undefined
//console.log(c);  // initial value of var is accessible
//var c=9;

   //console.log(g);
 
//const  g=9;

// var c  --->declration +initialization
//console.log(c);


//var c=9;  // actual assignement is happening at line no 5



// let c ; -->no initialiazation happens

console.log(c);


const  c=9  // initialization +assignment is happening at this step

// YOU DONT DO HOISTING ,JS INTERPRETER DOES 
// WE SEE THE RESULTS IF HOISTING WHILE ACCESSING THE VARIABLE BEFORE THEY ARE CREATED
// Questions related to hoisting

function foo(){

  if(c){
    console.log("hola")
  }



  var c=9;

}

foo(); // ou


function foo(){
  console.log(c);// undefined  ,because var gets hoisted to the function
  if (true){
  
  
    var c=9;
  }
  console.log(c);  // 9  // as var has functional scope so it is accessible outside the if clause which acts like the block scope
    
  }
  
  foo();