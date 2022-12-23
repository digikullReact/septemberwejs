let obj={
    key:"9999",
    address:{
      city:"Kanpur",
      zip:"209098",
      state:"UP"
    },
    something:90000,
  
    progarmmingLanguages:["Java","JS","GO","Rust"],
    getLanguages:function(){
      return this.progarmmingLanguages
    }
    
  }
  
  let name={
    key:"888",
    address:{
      city:"Kanpur",
      zip:"209098",
      state:"UP"
    },
  
    progarmmingLanguages:["Java","JS","GO","Rust"],
    getLanguages:function(){
      return this.progarmmingLanguages
    }
    
  }
  
  
  //console.log("hhh",name.address.city);
  let something="key";
  //console.log(obj.key); // u can access the attribute of an object using dot notation
  
  //console.log(obj[something])  ///in the square synatx you can pass the variable name as well ,and it will fetches the value stored in that variablle
  
  // These lines are not same at all
  console.log(obj[something])   // it will look for value stored in something variable object
  console.log(obj.something)  // it will look for the key named something in the object
  /*
  console.log(obj.address.city); // u can access the attribute of an object using dot notation
  
  console.log(obj.getLanguages())
  
  /// How to add dynamic attirbutes
  
  // to add any
  obj.funda="Be happy";
  
  console.log(obj);
  */