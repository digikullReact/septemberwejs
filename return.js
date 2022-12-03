

function calculateSumofTwoNumbers(a,b){

    let sum=a+b;
  
    //console.log(sum);  // you are printing out to user
  
    return sum; // returns sends the value to outside world from function ,such that it can be used inside other functions
    /// whenver a return a keyword is encountered ,function stops executing
  
   // console.log(999999); // this code wont be executed
  
    
  }
  
  function double(){
    let r=calculateSumofTwoNumbers(7,8);
    console.log(r*2); // gives output to the user
  
    return r*2 ;  // if i want to use it in other function so we will return from it
    
  }
  
   
   double();
  


    //double();
// searching in the array
function arrValue(arr, value) {

    for (var i = 0; i < arr.length; i++) {
  
      if (value == arr[i]) {
  
        return i;  // both for loop and function will exit
  
        //console.log(i);
  
      } 
    }
     return -1;  // so if any value doesn't match in the above for loop then in the end it will return -1
  }
  
  console.log(arrValue([11, 22, 33, 55, 44, 77], 77));
  


  // Reversing a string an


  function Reversestring(str){

    let rev="";
    for (let i=str.length-1;i>=0;i--){  // strings are like arrays 
      rev=rev+str[i];  // we are adding here by iterating 
  
      
    }
  
  
  return rev;  // we are returnin the reversed string
    
  }
  
  let returnedvalue=Reversestring("shubham");
  console.log(returnedvalue)