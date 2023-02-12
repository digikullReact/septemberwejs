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
  
  }
  // -----------------------
  const stk=new Stack();
  
  stk.push(9);
  stk.push(99);
  stk.push(19);
  stk.push({name:"Vinay"});
  console.log(stk);
  stk.pop();  // 7899
  stk.pop();  // 19
  stk.pop();  // 99
  console.log(stk);
  //console.log(stk.peek());
  //console.log(stk);