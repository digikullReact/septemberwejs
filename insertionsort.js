/// function insertion sort --

function insertionSort(arr){

    for(let i=1;i<arr.length;i++){  // traversal 
       let currentValue=arr[i];
      for (var j=i-1;j>=0;j--){
       // the actual logic says 
         console.log(arr);
  
        if(arr[j]>currentValue){
          arr[j+1]=arr[j];
  
        }  else{
          break;
        }
  
       
      }
      arr[j+1]=currentValue
      }
  
    return arr;
  }
  
  
  function insertionSort2(arr){
  var currentValue;
    for(let i=1;i<arr.length; i++){  // traversal 
       currentValue=arr[i];
      for (var j=i-1;j>=0 && arr[j]>currentValue;j--){
       // the actual logic says 
         arr[j+1]=arr[j];
  
       
      }
      arr[j+1]=currentValue
      }
  
    return arr;
  }
  
  console.log(insertionSort2([11,9,14,12,33,2]))