
// So loop has 3  general  things 
// first is from where the loop starts 

// way to reach from beginning to end --->

// Where the loop ends


// for loop -->

/**
 * 
 * for (var i=0;i<10;i++){
    /// it contains the code or logic that you want to repeat 

    console.log(1);
    console.log("\n");

}
 */



// pre increment does -->it first increments the value and then assigns the value
// post increment -->it first assigns then increment 


//var c=0;
//++c  // c=1  ,c=1
/*
var i=0;
let str=""

while(i<10){
    str+=i+"\t"  // str=str+1+
    //console.log(1+"\t");
   // console.log("\n");

    ++i
}
console.log(str)
*/



// sum of first 100 natural numbers --  0 -100
/*
var sum=0;
for (var i=0;i<=100;i++){
    sum=sum+i;

}

console.log(sum);

// while loop 
var sum2=0;
var j=0;
while(j<=100){
    sum2=sum2+j;
    j++;
}
console.log(sum2);
*/


// sum of n natural
function sumofNanaturalWithFor(n){

    var sum=0;
for (var i=0;i<=n;i++){
    sum=sum+i;

}

console.log(sum);



}

function sumofNanaturalWithwhile(n){

    var sum2=0;
    var j=0;
    while(j<=n){
        sum2=sum2+j;
        j++;
    }
    console.log(sum2);



}

sumofNanaturalWithwhile(100);
sumofNanaturalWithwhile(1000);
sumofNanaturalWithwhile(89);

// You have to write a function that checks whether the number is prime or not
// you have to print all the prime numbers between 1 - 1000
  //isPrime(1);
  
  // Prime number shoudle have the factors as 1 and itself 
  // if there is any other factor existing then its a not a prime number
  
  //  is a prime number 
  
  // 25
  // 2 3 4 5 6 7 8 9 10 11   ---   24
  
  // it shouled not be divisible by any number except 1 and itself
  
  
  // This is a program to find a number is prime or not
  


function isPrime(num){
    var flagIsprime=true;
  
    if(num==1 || num==0){
      flagIsprime=false;
      
    }
     else{

        // how reduce the complexity of for loop ---> 
  for(var i=2;i<num;i++){
     if (num%i==0){
      flagIsprime=false;
        break;  // it exits the loop // it exits the complete loop
        
        }
    }
  
  
      
    }
    
  
  
  console.log(flagIsprime);
    
  }
  
  
  //isPrime(17);
  //isPrime(89);
  //isPrime(76);
  //isPrime(4);
  
  isPrime(25);
  
