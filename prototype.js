//Prototypes --->
// different ways of creating objects in javascript

//First way is object literal way
let obj={name:"shubham",location:"Delhi"}

// Second way is constructor function way 
// constructor function syntax
function Vehicle(wheels,color){
  this.wheels=wheels;
  this.color=color;

}
// if you want to create an object from the constructor 
// if you have to use the new keyword ,if you are not using the new keyword it would be a normal function call
const car1= new Vehicle(4,"black");  

const car2=new Vehicle(49,"red");
// car 1 and car 2 are objects 

console.log(car1);

console.log(car2);

// Using classes

class  Human{
// constructor is there to give the default values to the object
  constructor(ears,legs){
    this.ears=ears;
    this.legs=legs;
    
  }
  
}

const n1=new Human(2,2)  // n1 is an object


console.log(n1,n2);


// 4th way to create objects in javscript 

// Using Object.create() method
// We will use it so show prototype chaining 




// ------>Adding properties to objects

//Prototypes --->
// different ways of creating objects in javascript

//First way is object literal way
let obj={name:"shubham",location:"Delhi"}

obj.email="shubhamdixit863@gmail.com";

//console.log(obj.email);

// Second way is constructor function way 
// constructor function syntax
function Vehicle(wheels,color){
  this.wheels=wheels;
  this.color=color;

}
// if you want to create an object from the constructor 
// if you have to use the new keyword ,if you are not using the new keyword it would be a normal function call
const car1= new Vehicle(4,"black");  

const car2=new Vehicle(49,"red");


 
//car2.company="honda";  // company property will show only in the car2 object 

// but if you want all the cars to have some property then add the property to the prototype of the constructor function

Vehicle.prototype.company="Skoda";




const car3=new Vehicle(49,"uu");
car3.getData=function(){
  console.log("hey car 3");
}

// car 1 and car 2 are objects 

//console.log(car1.company);

//console.log(car2.company);
//console.log(car3.company);
console.log(car3.getData())


// an object has two properties one which is its own property
// and other is the property that belong to the prototype or parent

// Using classes

class  Human{
// constructor is there to give the default values to the object
  constructor(ears,legs){
    this.ears=ears;
    this.legs=legs;
    
  }
  
}

const n3=new Human(2,2)  // n1 is an object


//console.log(n1,n2);


// 4th way to create objects in javscript 

// Using Object.create() method
// We will use it so show prototype chaining 




// ------>Adding properties to objects


// Adding methods to objects ---->

function Vehicle(color,wheels){

    this.color=color;
    this.wheels=wheels;
    
  }
  
  Vehicle.prototype.getWheels2=function(){
    console.log("hey car from prototype");
  }
  
  
  const car1=new Vehicle("black",3);
  const car2=new Vehicle("red",4);
  
  car2.getWheels=function(){
    console.log("hey car 2");
  }
  
  //car2.getWheels();  // it will work
  car1.getWheels2();  // it will not work because getWheels is the property of the car2 only


  // class syntax -->

  // Adding methods to objects ---->
/*
function Vehicle(color,wheels){

  this.color=color;
  this.wheels=wheels;
  
}

Vehicle.prototype.getWheels2=function(){
  console.log("hey car from prototype");
}


const car1=new Vehicle("black",3);
const car2=new Vehicle("red",4);

car2.getWheels=function(){
  console.log("hey car 2");
}

//car2.getWheels();  // it will work
car1.getWheels2();  // it will not work because getWheels is the property of the car2 only
*/

// Class syntax

class Vehicle{

    constructor(color,wheels){
      
    this.color=color;
    this.wheels=wheels;
    }
  getWheels2(){
     console.log("hey car from prototype");
  }
  
    
  }
  
  
  
  
  const car1=new Vehicle("black",3);
  const car2=new Vehicle("red",4);
  
  
  car2.getWheels=function(){
    console.log("hey car 2");
  }
  
  car2.getWheels2(); 
  car1.getWheels2(); 


// Conclusion

  /**
   * // Js is prototype bases object oriented programming language

// Prototype ---->Object --->and every object that you create it inherits the properties of this Object 

// We learnt about three 4 methods to create objects
// 1--object literal {name:""};
// 2- constructor function 
// function Vehicle(){  -->constructor function

//}

// 3 classess 
/*
class Vehicle{
  
}
*/
// 4- Object.create()  // prototype chaining

// there are two kinds of properties the object has 

// 1- its own property  only be acccessed by that object not by the siblings
// 2- that belongs to the prototype  // can be accessed by all the children of the object 
   */