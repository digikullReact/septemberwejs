// scopes js   --->functional scopes and block scopes

//var f=90;
//let g=90;
//const k =88;

// var and let -- >var has a functional scope and let has a block scope

function scope1(){
    var c=9;  // var has a functional scope so c can only be accesed inside this function


}

//console.log(c);
/*
if (true){
    var k=9;
}
*/
//let i=-1;
/*
while (i<0){
    var k=99;

    i++;

}
*/
/*
for (let i=0;i<10;i++){
    var k="hello people"
}
*/
//console.log("K here",k);

function foo(){


    {
        //var t=99;
  
     function fgj() {
        var hh=90;
      }
  
      //console.log(hh);  //output ??  // 11
  
      
    }
  
    
  }
   foo();
  
  //console.log(k); //output -->  9
  
  /*
  {
    let j=9;
    const k=99
  }
  */
  
  //console.log(j);  // --out
  /*
  function n(){
  
    let h=9;
    const j=99;
  
   
  }
  */
  
  function gh(){
    const megha="Megha";
  }
  
  console.log(megha);  //
  

  // var has a functional scope   ---> function(){}
  // let and const have a block scope ---->{}