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