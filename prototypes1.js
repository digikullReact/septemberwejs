//Different ways to create objects in javascript 

let obj={name:"John",age:20} // Object literal representation

//Usinng constructor function 

// Constructor functions are special functions which are used to create custom objects
// you dont return from constructor functions

function Vehicle(name){
  this.name=name;  // this is representing the object being created

}

//console.log(Vehicle());

const car=new Vehicle("toyota");
const car2=new Vehicle("hundayi");

//console.log(car2);


// class way --->
/*
class Human{
  
}
const h1=new Human("name"); // defualt constructior is being called
console.log(h1);
*/

class Animal{
  //paramterized constructor

  
}
const h=new Animal();
/*
const h2=new Human("name"); // defualt constructior is being called
console.log(h2);
*/

class Human extends Animal{

  constructor(name,age,data){
    super();  // super keyword internally calls the parent class constructor and creates the parent object and store in memory
    this.name=name;
    this.age=age;
    this.data=data;
  }
  
}

const h4=new Human("john",23,"dd","3333");
console.log(h4);


function gh(){
  class Hum{
  
}
  
}
 gh()


 //4th way is using Object.create();
// it is used to create object from existing object

let grandParent={
    name:"John"
  }
  
  let parent=Object.create(grandParent);
  parent.age=89;
  
  //console.log(parent);
  
  let child=Object.create(parent);
  
  console.log(child);
  
  //
  
  const c=new Object();
  c.h="999";
  console.log(c);
  
  // class is just a blue print to create an object
  // objects take memory ,classes dnt take memory 
  // functions are objects
  // constructor functions are equivalent to class which are used to create new custom objects