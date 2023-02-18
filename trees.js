/// BST tree implementation ---->

class Node{
    constructor(value){
      this.value=value;
      this.left=null;
      this.right=null
      }
    
  }
  
  class BinarySearchTree{
  
    constructor(){
      this.root=null
    }
  insert(value){
   const node=new Node(value);
    if(this.root==null){
      /// no element in the tree yet 
      this.root=node;
      return this;
      
    }
  
    // iterative implementation of insertion 
    let current =this.root;
    while(true){
      // infinite loop because we dnt where the tree would end 
  
  if(value==current.value) return undefined;
      
    if(value < current.value){
       if(current.left==null){
        current.left=node;
        return this;  // breai
      }
  
      current=current.left
      
    }else if (value > current.value){
      if(current.right==null){
        current.right=node;
        return this;  // loop is breaking here 
      }
        current=current.right;
    }
  
    
    }
  
  }
  
  }
    
  
  
  const bst=new BinarySearchTree();
  bst.insert(90);
  bst.insert(85);
  
  
  
    console.log(bst)
    