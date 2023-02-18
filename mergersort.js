// Merge function ---->


function merge(arr1,arr2){

    let i=0; // arr1
    let j=0;  //arr2
    let finalArray=[];
    while(i<arr1.length &&  j<arr2.length){
      if(arr2[j]>arr1[i]){
        
        finalArray.push(arr1[i]);
        i++;
      }else{
              finalArray.push(arr2[j]);
        j++;
      }
  
      
    }
  
      while(i<arr1.length){
      // there are some elements left in the arr1
        finalArray.push(arr1[i])
        i++;
        
    }
  
    while(j<arr2.length){
      // there are some elements left in the arr2       
      finalArray.push(arr2[j])
      j++
  
    }
    ///console.log(i,j);
    // this array is completed
    
  
    return finalArray;
  }
  
  //console.log(merge([9,11],[1,13,16,15]));


  function mergeSort(arr){
    // base conmdition is 
    if (arr.length<=1) {
      return arr;
    }
    let mid=Math.floor(arr.length/2);
    let leftPartArray=arr.slice(0,mid);
    let rightPartArray=arr.slice(mid);
    let arrl=mergeSort(leftPartArray);
    let arrRight=mergeSort(rightPartArray);
    
   return merge(arrl,arrRight)
  
    
    
  }

console.log(mergeSort([11,7,14,1]))

