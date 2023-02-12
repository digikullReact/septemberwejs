


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
  
  }
  // -----------------------
  const stk=new Queue();
  
  stk.enqueue(9);
  stk.enqueue(99);
  stk.enqueue(19);
  stk.enqueue({name:"Vinay"});
  console.log(stk);
  stk.dequeue();  // 7899
  //stk.dequeue();  // 19
  
  console.log(stk);
  //console.log(stk.peek());
  //console.log(stk);