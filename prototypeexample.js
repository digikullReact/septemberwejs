Array.prototype.forEach=function(cb){

    for(let i=0;i<this.length;i++){
      cb(this[i],i);
    }
    
  }
  
  let arr=[1,2,3,4,5];
  arr.forEach(function(ele,i){
  
    //console.log(ele*2);
    
  });
  
  String.prototype.pallindrome=function(){
  
    let split=this.split("").reverse().join("");
    if (split==this){
      return true;
    }
  
    return false
  
    
  }
  
  let str="arora";
  console.log(str.pallindrome());
  let str2="arora33";
  console.log(str2.pallindrome());