//   You have to convert this callback to promise and then the promise into async await


function CheckStringIsPallindrome(str, cb) {
    setTimeout(() => {
      let strRrv = str.split("").reverse().join("");
      if (strRrv == str) {
        cb(null, "Pallindorme")
      } else {
        cb(new Error("No"), null)
  
      }
  
    }, 3000)
  
  
  
  }
  
  function CheckStringIsPallindromePromise(str) {
  
    return new Promise(function(res, rej) {
      setTimeout(() => {
        let strRrv = str.split("").reverse().join("");
        if (strRrv == str) {
          res("Pallindrome")
          // cb(null,"Pallindorme")
        } else {
          // cb(new Error("No"),null)
          rej("Not Pallindrome")
  
        }
  
      }, 3000)
  
    })
  
  
  
  
  }
  
  
  function CheckStringIsPallindromePromise2(str) {
  
    return new Promise(function(res, rej) {
      setTimeout(() => {
        let strRrv = str.split("").reverse().join("");
        if (strRrv == str) {
          res("Pallindrome")
          // cb(null,"Pallindorme")
        } else {
          // cb(new Error("No"),null)
          rej("Not Pallindrome")
  
        }
  
      }, 4000)
  
    })
  
  
  
  
  }
  // Convert above code into promise and then to async await
  
  /*
  CheckStringIsPallindrome("arora",function(err,result){
    console.log(err,result);
  })
  */
  
  
  /*
  CheckStringIsPallindromePromise("arora").then(function(data){
    console.log(data);
  }).catch(err=>{
    console.log(err);
  })
  */
  
  
  // async function returns a promise
  
  async function Check() {
    try {
      const t0 = performance.now();
      /*
          let result=await CheckStringIsPallindromePromise("arora");
             let result2=await CheckStringIsPallindromePromise("arora");
      
      */
      let c = await Promise.all([CheckStringIsPallindromePromise2("arora"), CheckStringIsPallindromePromise("arora"), CheckStringIsPallindromePromise("arora")])
  
      console.log(c);
  
  
      //console.log(result);
      //console.log(result2);
      const t1 = performance.now();
      console.log(`Call to doSomething took ${(t1 - t0) / 1000} seconds.`);
  
      //return result
    }
    catch (err) {
      //console.log("error",err);
    }
  
  
  }
  
  Check()
  //console.log(d);
  /*
  function sum(){
    return 2+2
  }
  
  let f=sum();
  
  console.log(f);
  */
  
  // Promise.all 
  // Promise.race
  /*
  class A{
    getData(){
      console.log(9);
    }
  }
  
  class B extends A{
  constructor(){
    super();
  }
    
    getData(){
      console.log(199);
    }
  
  }
  
  const a=new A();
  a.getData();
  
  const c=new B();
  
  c.getData();
  */