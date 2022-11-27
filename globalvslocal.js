// var has a functional scope 
// let and const have a block scope
//  Block scope ---- >{}
// function scope = {}+function

{
    // block scope 
}

if (true){
    let k=9;
}

function hj (){

    // its a function scope
}
function foo(){
    var h=9;  //function scope

  if (true){

    var c=9;  // look for nearest curly brackets that will tell you the scope
  }

 //console.log(c) ; // yes  we can access it

}
//console.log(c);
//console.log(h); // h cannot be accessed outside the function // will throw an error

function foo(){

    if (true){
    
      if(true){
        var k=9;
      }
      
    }
    console.log(k);// 
      
    }
    
    //foo();
    
    //console.log(k);
    
    function foo2(){
    
      function gh(){
    
      if(true){
        var k=9;
        // ---
      }
    
      console.log(k);
    }
    
      gh();
    
    
      
    }
    //foo2();
    
    function yu(){
    
    
    
      function hj(){
    
    
        function hk(){
          function httt(){
            var h=9;
          }
    
          console.log(h);  //you cant access it
        }
    
         hk();
      }
    
    
      
    }


    // global variable vs local variable
var a=9; // global variable
let b=8;  // global variable
const c=10;  // global variable
// A global variable is a variable that is accessible throught the script without any issue 


function fg(){
  var p=9; //
  let q=99;
  const r=88;


  function y(){
    // Shubham here ---
      console.log("Insidey",a,b,c);
     console.log("Inside ,pqr",p,q,r);
    function z(){
          console.log("Inside z",a,b,c);
     console.log("Inside z,pqr",p,q,r);
      
    }
    z();
  }
  y();
}
fg();

function jk(){
    console.log(a,b,c);
}
//jk();


// Write a function that reverses a number

function ReverseNumber(num){
   let rev=0;
    while(num>0){
        let f1=num%10; //6
        num=Math.floor(num/10)  // 39 // third part of the loop the way to reach from the starting point ie num to 0
        rev=rev*10+f1;

        // i++ i---
    }
return rev;
}


/**
 * let num=0;

let a=8;
let b=9;
let c=7;

num=num*10+a;  //8
num=num*10+b;  // 89
num =num*10+c;  //897
 */