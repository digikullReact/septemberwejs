
function sum( a,b ){ // a,b are parameters
  
}

sum(2,3)  // 2 and 3 are arguments


function getIt(cb){  // cb is a parameter
 cb(2,3);
  
}


getIt( function(a,b){
  console.log("It will print",a,b);
  


}  )

function AsynApiToCheckNumberISEven(num,cb){

   // For producing the asynchronous behaviour i am gonna be using setTimeout
// mimicing the async behaviour
  setTimeout(()=>{
    if(num%2==0){
      cb(null,"its even")
    }else{
      cb(new Error("Its not even"),null)
    }
    
  },3000)
  
}

// The callback function where the first parameter is an error is known as error first callback function

AsynApiToCheckNumberISEven(3,function(err,value){
  console.log(err,value);
  
})

// AsynApiToCheckNumberISEven(4,function(err,value){

//   if(err!=null){
//     // PErform sucess operatipon
//       console.log(err,value);
//   }else{
//     console.log("failure operations")
//   }

  
// })


// // Task  here ---->

// You have to asynchronously search for a number in an array ,if the number exist just call the callback with error as null otherwise call the callback with error value

//[1,2,3,4547,18,9]




let arr=[12,3,4,8,99,15]

function FilterAsync(num,cb) {

  setTimeout(()=>{
     for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
     // return true;
      cb(null,"Number found")
    }else{
     cb(new Error(),"Number not found")
    
    }
  }
  
//  return false;
    
  },1000)

 
}
console.log(FilterAsync(99,function(err,value){
  console.log(err,value)
  
}))


// Using return statement 



let arr=[12,3,4,8,99,15]

function FilterAsync(num,cb) {

  setTimeout(()=>{
     for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
     // return true;
     return  cb(null,"Number found")
    }
  }

    cb(new Error(),"Number not found")
  
//  return false;
    
  },1000)

 
}
console.log(FilterAsync(99,function(err,value){
  console.log(err,value)
  
}))

// 

function Compare(obj1,obj2,cb){

  setTimeout(()=>{

    let str1=JSON.stringify(obj1);
    let str2=JSON.stringify(obj2);

    if(str1==str2){
      cb(null,"they are equal")
    }else{
      cb(new Error("Not equal"),null)
    }
    
  },1000)
  
}

Compare({name:"Shubham"},{name:"Shubham"},function(err,value){
  console.log(err,value);
  
})

Compare({name:"Shubha"},{name:"Shubham"},function(err,value){
  console.log(err,value);
  
})