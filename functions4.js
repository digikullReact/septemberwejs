
// function definition
function fnname ()
  {
     // Goes your logic that you want to run 

    var a=9;
var b=10;
var sum=a+b;
console.log(sum);

    
  }



// function call -->here -->
 fnname();


// parameters and arguments --->

// parameters

function sumOftwonumbers (a,b) // parameters
  {
    
   var sum=a+b;
  console.log(sum);
    
    
    
  }
sumOftwonumbers(2,3); //arguments


// for loop --->

// three things every loop has
// from where the loop start 
// where the loop is finishing
// and how to reach the finish line

//let j=1;
/*
for(var a=5; a<55;a++){
  // we put the code we want to repeat

  console.log("- hello world");
  //j++

  
}
for(var a=55; a>0;a--){
  // we put the code we want to repeat

  console.log("- hello world");
  //j++

  
}
*/


// sum of n natural numbers write the logic

function  sumOfTen() {

    var sum=0; // this is to hold the sum value 
  
    for (let i=1;i<=10; i++){
      
       sum=sum+i              // reassignment
      
    }
    console.log(sum);
    
  }
  sumOfTen() ;





