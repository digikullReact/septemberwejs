// Addition 
/*
var k=9;
var s=8;
var sum=k+s;
var difference=k-s;
var multiplication=k*s;
var division=k/s

console.log(sum);
console.log(difference);
console.log(multiplication);
console.log(division)


var k1=90;
var s1=18;
var sum1=k1+s1;
var difference1=k1-s1;
var multiplication1=k1*s1;
var division1=k1/s1

console.log(sum1);
console.log(difference1);
console.log(multiplication1);
console.log(division1)
*/


/*
function Addition (a,b){


    console.log(a+b);
}

Addition (1,2)
Addition (10,20)
Addition (11,20)
*/
/*
function ShoppingMall(whatYouwannaBuy){
   let whatYouwannaBuyFrom=whatYouwannaBuy
    
   console.log(whatYouwannaBuyFrom)


}

ShoppingMall("clothes")
ShoppingMall("shoes")
ShoppingMall("dogfood")

ShoppingMall("grocery")
*/
/*
var groceryshopping="grocery";

var Groceryshopping="groceryeee";

console.log(groceryshopping);
*/
//  ----->



//  //function declaration  + function definition  

// function call 

//var a=2;
//var b=3;

//  function declaration +definition
/*
function fnNAme (a,b){ // parameters 


    //  Definition or the task the function gonna be doing ----->


    var sum=a+b;
    console.log(sum);
   // return sum;


}
*/
// function call -->

//var returnValue=fnNAme(2,3)  //arguments -->
//console.log(returnValue);


function Multiplication(a,b){

    var multiply=a*b;

    return multiply;

}

console.log(Multiplication(9,8)); 



// Functions --->
// Write  a function to calculate the division of two numbers 

function   division(p,q){
    var divide=p/q;
    return divide;
}
//console.log(division(78,2))
// Write a function to calculate the product of 5 numbers ;

function ProductOfFiveNumbers(p,q,r,s,t){

   var productOffive=p*q*r*s*t;
   return  productOffive

}

//console.log(ProductOfFiveNumbers(1,2,4,4,8))


// conditionals --->
// if // else

function conditional(){

    // condition is something which gives you result in true or false -->

    // == (equality) ,= (assignment)

    var k=20;  // 

    //console.log(k == 20);
    if(k==20){

        console.log("yes k is 20")

    }else{
        console.log("no its not equal")
    }


   

}
//conditional();


// to check whether the number is even or not 

//Quotient  (/)

//console.log(5/4);  // quotient
// %  -->modulus operator -- > which gives us the remainder
//console.log(5%4)

function checkIfevenNumber(number){

    var remainder=number % 2;

    // conditionals
    if (remainder==0){
        console.log("Number is even");
        //return "Number is even"
    }else{
        return "Number is Odd"
    }



}

//checkIfevenNumber(78);

//console.log(checkIfevenNumber(73));

// Write  a function to check whether the number is  divisible by 11 

// Write a function that takes two numbers,calculate the sum of the numbers in function
// If the sum of the number is even return "Doggo"
// IF the sum of the number is odd return "Catto"


//---Write a function that takes fruitnames ,if fruitname is apple return applejuice
// if the fruit is orange return not apple juice

function shivamExam(percentage){
    if(percentage > 90 ){
        console.log("shivam gets a bike")
    }else{
        console.log("shivam gets bashed")

    }




}

// conditionals 
//fizzbuzz problem 
// loops ,for and while --->


// You have to write  a function ---->
// you have to pass a number as an argument 
// if the number is divisible by 3 ---you have to print fizz
// if the number is divisible by 5 --->you have to print buzz
// if the number is divisible by both 3 and 5 you have to print fizzbuzz

// && and || operator 


var theday="sunday";
var weather="rainy";
//var salaryCredited="yes";
// if the the day is sunday and weather is sunny then only i will go out 
/*
if(theday=="sunday" && weather=="sunny" && salaryCredited=="yes"  ){
    console.log("i will go out")
}else{
    console.log("i will  not go out")

}

*/

function IamgoingOut(){
    if (theday=="sunday" || weather=="sunny"){
        console.log("I will go out")
    }else{
        console.log("i wont go out")
    }
}

IamgoingOut();



function FizzBuzz(number){
    if(number % 3==0){
        console.log("fizz");
    }
    else if (number%5==0){
        console.log("buzz");
     }
    if (number%5==0 &&  number % 3==0){
        console.log("fizzbuzz");

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

CheckIf(15)

//FizzBuzz(55);

