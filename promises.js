function Compare(obj1,obj2,cb){

    setTimeout(()=>{
  
      let str1=JSON.stringify(obj1);
      let str2=JSON.stringify(obj2);
  
      if(str1==str2){
        cb(null,"they are equal")
      }else{
        cb(new Error("Not equal"),null)
      }
      
    },1000)
    
  }
  /*
  
  Compare({name:"Shubham"},{name:"Shubham"},function(err,value){
    console.log(err,value);
    
  })
  
  Compare({name:"Shubha"},{name:"Shubham"},function(err,value){
    console.log(err,value);
    
  })
  */
  
  
  // Promises --->
  // You create a promise by calling up a promise contructor
  function ComparePromise(obj1,obj2){
  
    const comparpromise=new Promise(function(res,rej){
  
      setTimeout(()=>{
  
      let str1=JSON.stringify(obj1);
      let str2=JSON.stringify(obj2);
  
      if(str1==str2){
        res("they are equal")
       // cb(null,"they are equal")
      }else{
        rej("Not equal")
        //cb(new Error("Not equal"),null)
      }
      
    },1000)
    
  })
  
  
    return comparpromise
    
  }
  
  
  
  // You have to utilize tomorrow --
  
  ComparePromise({name:"Shubha"},{name:"Shubham"}).then(function(data){
    console.log(data)
    
  }).catch(err=>{
    console.log("Error",err);
  })
  
  
  
  ComparePromise({name:"Shubham"},{name:"Shubham"}).then(function(data){
    console.log("Data",data)
    
  }).catch(err=>{
    console.log("Error",err);
  })
  
  
  
  
  
  
  

  let arr=[12,3,4,8,99,15]

  function FilterAsync(num,cb) {
  
    setTimeout(()=>{
       for(let i=0;i<arr.length;i++){
      if(arr[i]==num){
       // return true;
       return  cb(null,"Number found")
      }
    }
  
      cb(new Error(),"Number not found")
    
  //  return false;
      
    },1000)
  
   
  }
  /*
  console.log(FilterAsync(99,function(err,value){
    console.log(err,value)
    
  }))
  */
  
  
  function FilterAsyncPromise(num) {
  
    const pr=new Promise(function(res,rej){
  
        setTimeout(()=>{
       for(let i=0;i<arr.length;i++){
      if(arr[i]==num){
       return  res("Number found")
       // return true;
      // return  cb(null,"Number found")
      }
    }
          rej("Number not found")
  
      //cb(new Error(),"Number not found")
    
  //  return false;
      
    },1000)
      
    })
  
  
  return pr;
   
  }
  
   FilterAsyncPromise(8).then(function(data){
     console.log(data);
   }).catch(function(err){
     console.log(err);
   })
  
   FilterAsyncPromise(811).then(function(data){
     console.log(data);
   }).catch(function(err){
     console.log("err",err);
   })