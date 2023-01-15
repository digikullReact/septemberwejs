// Prototype chaining ---->
function Human(name){
    this.name=name;
  }
  
  Human.prototype.getName=function(){
    return this.name;
  }
  
  const h1=new Human("john");
  /*h1.getName=function(){
    console.log(99292929292929);
  }*/
  
  console.log(h1);
  console.log(h1.getName());
  
  const h2=new Human("joe");
  /*
  h2.getName=function(){
    return this.name;
  }
  */
  
  
  
  console.log(h2.getName());
  
  const h3=new Human("loui");
  console.log(h3.getName());
  
  
  class Vehicle{
    
  }
  
  Vehicle.prototype.print=function(){
    console.log(9);
  }
  
  new Vehicle().print();



  // How to attach properties to prototype when the constructor function or class is not given
// or you just have the object
/*
Object.prototype.getName=function(){
  return this.name
}
*/



let obj={
    name:"john"
  }
  
  obj.__proto__.getName=function(){
    return this.name;
  }
  
  let obj2={
    name:"Juna"
  }
  
  //console.log(obj.getName(),obj2.getName());
  //console.log(obj.__proto__===Object.prototype)


  // How to attach properties to prototype when the constructor function or class is not given
// or you just have the object
/*
Object.prototype.getName=function(){
  return this.name
}
*/





let suraj={
    name:"john"
  }
  
  // custom method
  suraj.__proto__.getName=function(){
    return this.name;
  }
  
  let obj4={
    name:"Juna"
  }
  
  console.log(suraj.getName(),obj2.getName());
  console.log(suraj.__proto__===Object.prototype)
  
  /// Ways to create custom methods
  
  class A{
    print(){
      
    }
  }
  
  
  function Hi(name){
    this.name=name
    this.getName=function(){
      return this.name
    }
  }
  
  console.log(new Hi("Abhay").getName())