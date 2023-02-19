/// BST tree implementation ---->

class Node{
    constructor(value){
      this.value=value;
      this.left=null;
      this.right=null
      }
    
  }
  
  class MaxHeap{
  
    constructor(){
      this.root=null
    }
    insert(value){
      
      const node =new Node(value);
      if(this.root==null){
        this.root=node;
        return this;
      }
  
      let current=this.root;
  
      while(true){
        
  
        if(current.value > value){
          /// then only we will allow to insert
        if(current.left==null){
          current.left=node;
          current= current.left;
        }
        else if (current.right==null){
          current.right=node;
            current= current.right;
        }
          
        }
        return undefined;
  
          
    }
      
      
      
    }
  
  
  }
    
  
  
  const bst=new MaxHeap();
  bst.insert(90);
  bst.insert(85);
  
  bst.insert(75);
  
  
  
    console.log(bst)
    