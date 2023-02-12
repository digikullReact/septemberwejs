
/// stack with arrays --->
// We are utilizing the inbuilt array for creating our stack 
// For stack the only concept that you need to remember is  LIFO behaviour
// if you can bring lifo behaviour with any way using any datastructure or without any datastructure ,you will be able to create a stack
function myStorage(){

    // It does some storage facility for you 
  
    
    
  }
  
  
  class Stack{
    constructor(){
      this.items=[];  /// we will us an empty array to store items
    }
  
    // custom method for stack
  
    push(element){ 
        element();  // executing the method
      return this.items.push(element);
   
      
    }
  
    // removes the first item form the stack
    pop(){
      if(this.items.length>0){
            return this.items.pop();
      }
  
    }
  
    peek(){
      /// gives you the item without removing 
      return this.items[this.items.length-1]
      
    }

    size(){
      return this.items.length;
    }

   
  
  }
  // -----------------------

  //console.log(stk.peek());
  //console.log(stk);


class Queue{
    constructor(){
      this.items=[];  /// we will us an empty array to store items
    }
  
    // custom method for stack
  
    enqueue(element){
      return this.items.push(element);
      
    }
  
    // removes the first item form the stack
    dequeue(){
      if(this.items.length>0){
            return this.items.shift();
      }
  
    }
  
    peek(){
      /// gives you the item without removing 
      return this.items[this.items.length-1]
      
    }

  length(){
    return this.items.length;
  }
  
  }
  // -----------------------
  const stk=new Queue();
  
  stk.enqueue(function(){
    console.log("Hey I am here from queue")
  });
  stk.enqueue(function(){
    console.log("Hey I am here from queue 2")
  });

  stk.enqueue(function(){
    console.log("Hey I am here from queue 3")
  });


const stack=new Stack();
  //console.log(stk.peek());
  //console.log(stk);

/// event loop -->
while(stk.length()>0 &&  stack.size()==0){
console.log(" event Loop works")
  let item=stk.dequeue();
  stack.push(item);
  stack.pop();
  

}