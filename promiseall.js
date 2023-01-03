//Prototype in JS 

//Promise.all 

function a1(){

    return new Promise((res,rej)=>{
    
      setTimeout(()=>{
    
        res("hello");
        
      },8000)
    
        
        
      })
    }
    
    function a2(){
    
    return new Promise((res,rej)=>{
    
      setTimeout(()=>{
    
        res("world");
        
      },5000)
    
        
        
      })
    }
    
    // if you independent promises then you can use promise.all to make execution faster
    async function d2(){
     try {
       const t0 = performance.now();
    let s1=await a1();
        let s12=await a2();
       const t1 = performance.now();
    
       console.log(s1+ " "+ s12);
    
       console.log(`Call to doSomething took ${(t1 - t0)/1000}. seconds`);
       
        
      }catch(err){
        
      }
    }
    //d2();
    
    
    async function d3(){
     try {
       const t0 = performance.now();
    //let s1=await a1();
      //  let s12=await a2();
    let result=await Promise.all([a1(),a2()]);
       
       const t1 = performance.now();
    
       console.log(result[0]+ " "+ result[1]);
    
       console.log(`Call to doSomething took ${(t1 - t0)/1000}. seconds`);
       
        
      }catch(err){
        
      }
    }
    d3();