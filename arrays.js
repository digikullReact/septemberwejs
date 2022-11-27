//var name="shubham";

// array is a collection of data ,

var num=[1,2,3,1.6,7]; // valid
var f=[1,2,"hello"]; // valid
var arr2=["anem",1,true,undefined,null];  // in js you can have array with different primitive datas as well


// How to iterate over array using for loop --->

// every item of an array is called as elements
// array starts from 0 (index/position starts from 0)

// to get the length of an array --arr.length
// Access the array element indeividually
var arr=["shubham","prakash","ravi"];// homogeneous data ie data of the same type
//console.log(arrofNames[0]) //shubham
//console.log(arrofNames[1]) //prakash
//console.log(arrofNames[2]) // ravi



function PrintArrayitems(arr){

    for (var i=0;i<arr.length;i++){
        console.log(i,arr[i])
    }
    

}
//PrintArrayitems([1,2,3,4,45,55]);
//PrintArrayitems([1,2,3,4,45,55,1919,0,1,"hi"]);

function PrintArrayitemsWhile(arr){
    var i=0;// once
  while(i<arr.length){
    console.log(i,arr[i])
    i++
  }
    

}
var c=[1,2,3,4,45,55];
//PrintArrayitemsWhile(c);
/*
var g=[1,2,3,3]
for (var i=0;i<g.length;i++){
    console.log(i,g[i])
}
*/



function PrintArrayitemsReverse(arr){

    for (var i=arr.length-1;i>=0;i--){
        console.log(i,arr[i])
    }
    

}

function PrintArrayitemsWhileReverse(arr){
    var i=arr.length-1;// once
  while(i>=0){
    console.log(i,arr[i])
    i--
  }
    

}
// for loop -- >prompt --array.push 
PrintArrayitemsWhileReverse([1,9,0,2,222])
//PrintArrayitemsReverse([1,2,3,4,99,89])

// variable declaration
// datatypes (primitive +userdefined)
//conditionals
// operators
//while loop +for loop