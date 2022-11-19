// Operators -->
// Arithmetic operators 
// + (addition)
var a=1;
var b=2;
console.log(a+b);  // adds two numbers

var s1="hello";
var s2="world";
console.log(s1+s2); // it concatanates two strings

// - (subtraction)
console.log(a-b);  // it subtracts two numbers
console.log(s1-s2); // NaN


// *  (product)

console.log("Product",a*b);
//console.log(s1*s2); // NaN

// / . (division)

console.log("Divison",a/b);

// % modulo operators --->it gives you the remainder of division of two number

console.log("Modulo of a%b",a%b);  // remainder
console.log("Modulo of b%a",b%a);  //remainder



// Assignment and equality operator 

// = (Single Equal is Assignment operator)
var c=9;  //assignment operators
c=8; // assignment
var k=8;

// ==  (equality operator) it check if two values are equal or not
// and returns either true or false
console.log(k==c);
// === . (equality operator but it checks for type equality as well)

var stringNumber="2";
var integerNumber=2;
console.log("Double Equal",stringNumber==integerNumber);
console.log("Triple Equal",stringNumber===integerNumber);  // also checks for the data type
//console.log(typeof stringNumber )


// post increment and pre increment operator

// ++ 

var c=9;
c++; // c=c+1;  // post increment
console.log(c);

var g=90;
++g;  // pre increment
console.log(g);
// post decremnt and pre decrement 

// --
var f=7;
--f; // pre decrement 
var t=67;
t-- // post decrement 


// Generally you gonna be using them in the loops
var gh=9;
 gh+=2; //gh=gh+2;  
 gh-=2 ;// gh =gh -2;
 gh*=2; // gh=gh*2;
 gh/=2; // gh=gh/2;
console.log(gh);  

// || and &&   !  operators  // conditional operator  // logical operators

//console.log(4%3);
//console.log(1%2);
//console.log(56%89) // returns 56 because 56(dividend) is less than 89(divisor) it returns the dividen
//console.log(-3%1);//will take the sign of the dividend and returns the 0 reminder

function tocheckWhetherNumberIsDisvisiblebytwoand3(num){
   //num%2==0 ;// it will check whether the number is divisble by 2 or not
   //num%3==0 ;// it will chekc whether the number is divsible by 3 or not
/*
   if ( num%2==0  && num%3==0 ){
    console.log("Number is divisble by 2 and 3")

   }else{
    console.log("Number is not  divisble by 2 and 3")

   }
   */

/*
   

   if ( num%2==0  ||  num%3==0 ){
    console.log("Number is divisble by 2 and 3")

   }else{
    console.log("Number is not  divisble by 2 and 3")
   }

   */
   
  
   



}
//tocheckWhetherNumberIsDisvisiblebytwoand3(6);
//tocheckWhetherNumberIsDisvisiblebytwoand3(28);
//tocheckWhetherNumberIsDisvisiblebytwoand3(31);


// !   --> it inverts the value -- > it changes true to false and false to true 
// --> it changes 0 -->1 and 1 -->0

var ty=false;
var ui=!ty;
console.log(ui);