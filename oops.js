// Inheritance in js using classes
/*
class Parent{
  constructor(name){
    this.name=name;
    
  }

  getName(){
    console.log("FromParent")
  }
  
}

class Child extends Parent{
  constructor(){
    super();
    
  }
  
}
const child=new Child();

child.getName();
*/
// Abstraction in js using classes
/*
class User{
  #balance

  constructor(num,name){
    this.#balance=num;
    this.name=name;
    
  }

  getBalance(){
    return this.#balance
  }
  
}

const user1=new User(20000,"John");
console.log(user1.name);
console.log(user1.getBalance());
*/
//["shubham",22];
/**
Packing   all the attibutes in a single entity is what we call as Encapsulation
*/
/*

class Student{

  constructor(age,name,className){
    this.name=name;
    this.age=age;
    this.className=className
    
  }


  
}

console.log(new Student(22,"joe","7"))
*/

class Automobile{
    constructor(wheels){
    this.wheels="whatever"
  }

  getWheels(){
    console.log(this.wheels)
  }

  
}

class Car extends Automobile{
  constructor(wheels){
    super();
    this.wheels=4
  }

    getWheels(){
    console.log(this.wheels)
  }
  
}

class Cycle extends Automobile{
     getWheels(){
    console.log("Cycle has 2 wheels")
  }
  
}

const auto=new Automobile();
const honda=new Car();
auto.getWheels()

honda.getWheels();