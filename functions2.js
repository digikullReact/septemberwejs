
// You have to write  a function ---->
// you have to pass a number as an argument 
// if the number is divisible by 3 ---you have to print fizz
// if the number is divisible by 5 --->you have to print buzz
// if the number is divisible by both 3 and 5 you have to print fizzbuzz

// && and || operator 

function FizzBuzz(number){
    if(number % 3==0){
        console.log("fizz");
    }
    else if (number%5==0){
        console.log("buzz");
     }
   else  if (number%5==0 &&  number % 3==0){
        console.log("fizzbuzz");

    }else{
        console.log("Nothing matches");
    }
    



}


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

function CheckIf(number){
    if(number % 3==0){
        console.log("fizz");
    }
      if (number%5==0){
        console.log("buzz");
     }
     if (number%5==0 &&  number % 3==0){
        console.log("fizzbuzz");

    }
    



}

//CheckIf(15)
//FizzBuzzCorrect(1);
//FizzBuzzCorrect(200);
//FizzBuzzCorrect(89);