// Prototype chaining  --->

//how to use Object.create();

//Object.prototype.car="Sedan";

let grandfather={
    // name:"John",
     bunglow:"2 bhk flat",
     //car:"Mercedes",
     getLand:function(){
       console.log("2 Acres land");
     }
   }
   
   let father=Object.create(grandfather);
   
   //father.name="Joe";
   
   father.bunglow="9 bhk flat";
   //father.car="Land rover"
   //console.log(father);
   //console.log(father.bunglow);
   //console.log(father.car);
   
   
   
   let child=Object.create(father);
   
   //child.name="Johnny"
   
   //console.log(child.name);
   
   
   
   class A {
   
     constructor(name){
       this.name=name;
     }
   
     printHi(){
       console.log("hii");
     }
     
   }
   
   //const aobject=new A();
   
   //aobject.printHi();
   
   
   
   
   
   class B extends A{
   
       constructor(){
         super();  // it will instantiate the parent class  ,and it wil create the internally in the memory the object of A class as well
      
     }
       printHi(){
       console.log("hii there From b");
     }
     
   }
   
   //const bobject=new B();
   
   //bobject.printHi();
   
   class C extends B{
   
       constructor(){
         super();  // it will instantiate the parent class  ,and it wil create the internally in the memory the object of B class as well
      
     }
   
       printHi(){
       console.log("hii there From C");
     }
     
     
   }
   
   const cobject=new C();
   
   cobject.printHi();