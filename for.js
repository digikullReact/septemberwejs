//loops ---->are some piece of code which you use to repeat the process --->

// Programming is all about executing instructions -->

// if i have to execute some instructions multiple times 
// first option is -- write the instruction multiple times

function sum(a,b){

    var sumofNum=a+b;
    return sumofNum;

}
//sum(2,3);

// loops are designed to solve the problem which can be done repeatively

// for loop    // while loop  // do while Loop

for(var i=1; i<=30; i=i+1){
    // inside the curly brackets you write instructions that you want to repeat multiple times
   // console.log(sum(2,3));
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



for(var i=1;i<=100;i++){

    /// whatever you want to do

  //  FizzBuzzCorrect(i)  // would be executed 100 times from 1 -100

    
}

// arrays with loops --->
var i=9;
var k=90;

// array is a collection fo data .like you can have multiple data in the same variable
var tyArray=[91,82,39,40,58,67,79,90,77];  // array length --> . last index is 8
//console.log(tyArray.length);  // the length of the array gives the total number of elments in the array
/*

console.log(tyArray[0]) //91
console.log(tyArray[1]) // 82
console.log(tyArray[2]) //39 
console.log(tyArray[3]) //40
console.log(tyArray[4])  // 58
console.log(tyArray[5])  // 67
console.log(tyArray[6]) //  79  
*/


// this is how we iterate an array 
/*
function hh(){


for(var i=0;i<tyArray.length;i++){
    console.log(tyArray[i])
}


}

hh();

*/


// for all questions use functions

// Print the double of an array   --  [1,23,44] . --->output -->[2,46,88]
// Print the sqyared of an array --> [2,4,8] -->[4,16,64];

// Print the sum of two arrays   --
// . function(arr1,arr2){ } .   --->sum of array -- [1,2,3] ,[4,5,6] . ---> [5,7,9] ; output 

function DoubleAnArray(arr){

    for(var i=0;i<arr.length;i++){
        console.log(2*arr[i]);
    }

}

//DoubleAnArray([1,23,44]);



function squaredOfArray(arr){
    for(var i=0;i<arr.length;i++){
        console.log(arr[i]*arr[i]);
    }

}



//squaredOfArray([22,66,99])

// [1,2,3]  [4,5,6];
// [5,7,9]

function sumOfTwoArr(arr1,arr2){

    

    for(var i=0;i<arr1.length;i++){
        console.log(arr1[i]+arr2[i]);
    }



}

//sumOfTwoArr([1,2,3],[4,5,6]);

// double --  2 times the value ---

// sq


// . ----->find the sum of numbers of an array --> . [1,2,3] -->6 
// [6,7,8] =21

function sumOfanArray(arr){
    var sum=0;  // we will store the sum in here

    for (var i=0;i<arr.length;i++){
       sum=sum+arr[i];


    }
console.log(sum);

}
sumOfanArray([1,2,3])


// write a function to caluclte the product of the array numbers

// Write a function to calculate the sum of  square  of array numbers ---> [1,2,4] . --->1+4+16 ->21