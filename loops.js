// loops --->

// if you want to do some job repeatedly --->
/*
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
*/
function FizzBuzzCorrect(number){
    if (number%5==0 &&  number % 3==0){
        console.log("fizzbuzz");

    }
    else if (number%5==0){
        console.log("buzz");
     }
   else if (number % 3==0){
    console.log("fizz");

} else{
        console.log("Nothing matches");
    }
    



}

/**
 * 
 * First part -- from where it starts 
 * Second --  > How it reaches to the end
 * Third Part ---> When it should stop
 * 
 *  1   
 * int i=                                               100
 */

let apple=1;
for (var basket=0 ;  basket<=100  ; basket=basket+apple){

    console.log("Took one apple"); // 100 times
    // the logic that you want to repeat
    // 

    //FizzBuzzCorrect()
    
}

//console.log("exited from orchid");
// do the fizzbuzz problem for numbers from 1 to 10000;
