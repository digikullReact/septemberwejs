/*class Node{
    constructor(val){
      this.data=val;  // this is the value
      this.next=null;  // so the address of next node or block
      
    }
    
  }
  
  class LinkedList{
    constructor(){
     this.head=null;
      this.tail=null;
      this.length=0;
      
    }
  
    addNode(value){
      let node=new Node(value);
  
      // We have to check here whether this is the first node or not
    if (this.head==null){
  
      // this means we have no node in the linked list yet
      this.head=node;
      this.tail=node;
  
      
    }else{
      // todo --->you have to add the new node when there is already a node here 
  
      this.tail.next=node;
      this.tail=node;
      
    }
  
     this.length++; 
      
    }
    
  }
  
  const ll=new LinkedList();
  ll.addNode("t31111");
  ll.addNode("t31112");
  
  ll.addNode("t31113");
  
  ll.addNode("t31114");
  
  
  console.log(JSON.stringify(ll));
  */
  
///  Linked List withouttails  


class Node{
    constructor(value){
      this.value=value;
      this.next=null;
    }
  
  }
  
  class LinkedList{
    constructor(){
      this.head=null;
    }
  
    addItem(data){
      const node=new Node(data);
      // first case when linked list is empty --->
      // A null head is the sign of empty linked list
  
      if (this.head==null){
        this.head=node;
        
      }else{
       // last item of the node in the linked list has next has null
        const iterator=this.head;  // starting point 
       while(  iterator.next!=null){
         
  
         
          // you guys have to do  change the iterator value by accessing next property
         /// process we have to do the process
       }
        
      }
  
      
      
    }
    
  }
  
  const ll=new LinkedList();