// how closure works

// closures --->

// closure is the combination of functions lexical scope and locla scope

function foo(){

  
    let v=9;
  
    let y=8;
  
  
    function beta(){
      let u=99;
      return  function(){
      console.log(v,y,u);
    }
      
    }
  
    return beta}
  
  let j=foo()
  let h=j();
  
  h();

// iife example with settimeout


// IIFE -->immediately invoked function expression
(function(){
  
})()

for(var  i=0;i<10;i++){

  (function(j){
    setTimeout(()=>{
      console.log(j);
  },1000)
  
})(i)

}