

//const h1=new Human("shubham");







// this is a keyword in js 

// 
// the value inside this keyword can have three different values
//1-if its a constructor function the value of this would be the object being created

/**
 * function Human(name){
    this.name=name;  // this will refere to the object created 
    
}
 * /

// 2- if its anything else then it would be the global object of runtime or execution context

/**
 * function foo(){
    console.log(this);  // here this will be the window object
}
//foo();
 * /
// 3- if the method is binded to any object in that case the value of this would be the object itself
/**
 * let data={
    name:"shubham",
    fn:function(){
        console.log(this);  // here the this will be the object data itself
    }
}

obj.fn();

 * /


/// call bind and apply
/*var name="john";
function foo(){
  console.log(this.name);
}

//foo();

let data={
  name:"Shubham"
}

let data2={
name:"Rahul"
}

function bar(){
console.log(this.point)
}


let data3={
point:"Algo"
}

let data4={
point:"Algo Ds"
}

// What bind does it returns a function reference which is binded to some other object
//let bindeFn = foo.bind(data);
//bindeFn();


// call  just directly invokes the function with the value of this as passed as argument in it 
//foo.call(data)
//foo.call(data2)  // what it will print ??

//bar.apply(data3)
//bar.apply(data4)


// Difference between call and apply --->can be an interview question 

function sum(a,b){

  console.log(this.num+a+b);
}


let o1={
  num:9
}

*/

//sum.call(o1,8,9)  

//sum.apply(o1,[8,9])
// Apply takes arguments in the form of array where as call doesnt otherwise they are same as such they do the same job



// Review ------> Call vs bind vs apply
// these all are function prototype methods and should be called only on functions

function product(a,b){

    console.log(this.value*a*b);
    
  }
  //console.log(product);
  
  let obj={
    value:7
  }
  
  // Using bind
  
  let h=product.bind(obj)  // it will return a new function which attached to obj pased as an argument
  //console.log(h);
  h(2,3);
  
  product.apply(obj,[4,5])
  
  product.call(obj,3,9)
  
  




