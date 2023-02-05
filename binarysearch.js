// linear search --->
/*
let arr=[2,4,9,14,19,21];
let num=90;

function linearSearch(arr,n){
  for(let i=0;i<arr.length;i++){
  if(arr[i]==num){
    //console.log(i);
    return i;
  }
}
  return -1;
}

//console.log(linearSearch(arr,num))

// Worst case would be O(N); --->linear time complexity 
*/
// logn complexity ---->
// Iterative way 
function binarySearch(arr,n){

    let start=0;  // index of array element;
    let end=arr.length-1;
  
    while(start<=end){
      let mid=Math.floor((start+end)/2); // index
  
      if(arr[mid]>n){
        end=mid-1;
        
      }
      else if(arr[mid]<n){
        start=mid+1;
        
        
      } else if(arr[mid]==n){
        return mid;
        
      }
      }
  
    return -1;
    
  }
  
  let arr=[2,4,9,14,19,21];
  let num=210;
  ///console.log(binarySearch(arr,num))


  // ---->

  // Recursive way
  
  let start=0;
  let end=arr.length-1;
  function binarySearchRecursvie(start,end,n){
    let mid=Math.floor((start+end)/2)  // it will be done in every function call
 
    if (start > end) return -1;
    if(arr[mid]>n){
        end=mid-1;
        return binarySearchRecursvie(start,end,n)
      }
      else if(arr[mid]<n){
        start=mid+1;
        return binarySearchRecursvie(start,end,n)
        
      } else if(arr[mid]==n){
        return mid;
        
      }
      //return -1;

  }

  console.log(binarySearchRecursvie(start,end,num))

