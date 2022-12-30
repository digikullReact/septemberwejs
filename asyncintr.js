console.log(9);


for(let i=0;i<100;i++){
  console.log("hello ")
}

setTimeout(function waiterWaitingAtchefpoint(){

  console.log("hello i am async")
  
},7000)


console.log(88);

// Mantras--->
//1-everything except setTimeout ,setInterval ,apicalls(using promises or using callbacks) will work synchronously in js

// 2- JS will execute synchronous code first and then it will execute asynchrnous code post synchronous code has finished executing 

//

//
function foo(cb){

  
    setTimeout(()=>{
        cb("HEloo world")
    },5000)
  
  
    
  }
  
  foo(function(data){
  
    console.log(data);
    
  })

  // Set timeout vs setInterval 
  //settimeout executes the code inside callback once after the delay 
  //setinterval executes the code infinitely inside callback after the delay

  //Async behaviour

let i=0;  // code will execute
/*
setTimeout(()=>{
  i=99;
  
console.log(i); 
  // we will get i=99 in here only 
},1000)
*/



setInterval(()=>{
  i=99;
  
console.log(i); 
  // we will get i=99 in here only 
},2000)

console.log(i);



// es5 function
function foo(f){


  
}
foo();

// arrow functions --->
//=>  fatArrow 

let sum=(f)=> {
  
}

sum();