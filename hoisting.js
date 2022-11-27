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