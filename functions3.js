//what is a variable --> it is a storage point of your data (either primitive or non primitive)


// variable creation --->
var myCat="tubby";
var myNumber=78;
var iamGroot=false;

/*
var num1=2;
var num2=4;
var sum=num1+num2;
console.log(sum);
*/

//console.log(sum);
// function definition

    // All your logic goes



function  calculateSum (){
    var num1=2;
    var num2=4;
    var sum=num1+num2;
    
    var squareOfsum=sum*sum;
    var cubeofSquareOFsum=squareOfsum*squareOfsum*squareOfsum
    console.log(cubeofSquareOFsum);

    

}

//invoke the function or call the function 
calculateSum();
calculateSum();
calculateSum();
calculateSum();
calculateSum();

// first purpose of the function -->it keeps your code clean and isolated from the rest of the code

// second purpose of the function it helps you reuse the logic

/*
var num2=8;
var num3=9;
var sum3=num2+num3;
console.log(sum3);

var num29=80;
var num39=90;
var sum39=num2+num3;
console.log(sum39);

var num2y=88;
var num3b=98;
var sum35=num2+num3;
console.log(sum35);
*/


function summing(a,b){  // parameters
    var sum=a+b;
    console.log(sum);

}


summing("dodod",9);  // arguments
summing(80,90);
summing(88,98);
/*
function userInput(){
  var value1=prompt("Enter First number ?")
  var value2=prompt("Enter First number ?")

  console.log(Number(value1)+Number(value2));


}

userInput();
*/

function partyPlate(c1,c2,c3,c4,c5){
    console.log(c1,c2,c3,c4,c5)

}



//me

partyPlate("rasoguulla","malai paneer","rajama","rice","rotis","iii")

// shivam

partyPlate("choley","choley","choley","rice","roti");

var k=9;
k="uiii";
console.log(k);


/// Write a function that calculates product of two numbers ( 2*2  )

function Product(a,b){
    var p=a*b;
    console.log(p)

}
Product(4,5)

// Write  a function that calculates the cube of a number

function cube(num){
    var cubi=num*num*num;
    console.log(cubi);

}

cube(2)
//Write  a function that calculates the square  of a number

function square(num){
    var s=num*num;
    console.log(s);

}

square(20)

// Write a function that prints fizz if the number you pass is divisible by 3 ,
// it prints buzz if the number you pass is divisble by 5
// if the number is divisble by both 3 and 5 print fizzbuz 
//   %
//console.log(4%2==0);

// 