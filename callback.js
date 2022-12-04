// A callback is a function which is passed as an argument to another function call 

// function definition of 
function foo(p,q){   // p is the parameter 

    let sum=p+q;
  
    return sum;
  
    
  }
  
  
  //foo(2,3);  // its a function call so here I pass the arguments --
  
  //foo("hello","world")
  
  
  function callBackScenario(p){
    p();
  
    
  }
  
  callBackScenario(  function cb(){  // cb is a callback function
   // console.log("hi there people")
  
  
  }  );
  /*
   let p =function cb(){
     console.log("hiii");
  
  }
  
  p();
  */
  /*
  function fgh(p1){
    p1("uuuu");
  
  }
  
  fgh( function cb(p){
  
    console.log("hheheheh",p)
  }   )
  
  */
  
  
  // Callback --->
  /*
  function Restaurant(){
     console.log("A");  // 15
  
    
      console.log("B");  //15
      console.log("C");//15 
      console.log("D");//15
  
      console.log("E");
    
  
   
  
    
  }
  */
  
  
  
  
  
  
  
  
  // A callback is a function which is passed as an argument to another function call 
  
  
  function ty(p){
   p();
    
  }
  
  //ty(3);
  
  
  ty( function cb(){  // its our callback function -->
  
    console.log("hello people i am a callback function")
    
  }  )
  



// you have to create a function that calculates the sum of two numbers and prints the result using callback function

function cbsum(a,b,fg){
    let sum=a+b;
  fg(sum)
  
    
  }
  
  cbsum(2,17 ,  function cb (d) {
    console.log(d);
    
  }     )  // its a function call
  
  
  
  
  