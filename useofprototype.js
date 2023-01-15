// Use of prototypes 
/*
let arr=[1,2,3,4,45];

let arr2=[10,-2,30,4,455];

//arr.sum()// the sum of the array 

Array.prototype.sum=function(){
  let sum =0;

  for(let i=0;i<this.length;i++){
  sum=sum+this[i];
}

  return sum;
}

console.log(arr.sum());
console.log(arr2.sum());
*/

Array.prototype.myforEach=function(cb){

    for(let i=0;i<this.length;i++){
      cb(this[i],i,this);
    }
  
  }
  
  let arr=[1,2,3,34,4];
  
  arr.forEach(function(ele,i,arr){
    console.log(ele,i,arr);
    
  })
  
  arr.myforEach(function(ele,i,arr){
      console.log("custom",ele,i ,arr);
  })



  Object.prototype.land=12000;

let grandfatherObj={
  name:"John",
  land:"2000"
}


let father=Object.create(grandfatherObj);
father.land=90
//console.log(father.land);

let child=Object.create(father);
child.land=9
console.log(child.land);