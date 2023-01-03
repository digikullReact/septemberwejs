// localstorage

// to set data 
localStorage.setItem("name","aaddii");

// to get Data 

localStorage.getItem("name");

// sessionstorage is temporary it gets removed as soon as you close the browser or close the tab

// to set data 
sessionStorage.setItem("name","aaddii");

// to get Data 

sessionStorage.getItem("name");


// cookies


// how to set cookies

document.cookie="key=anything after this would be the data ,age 12;"
// in abov example  the cookie will have the key as key and the data after the = sign will be set as
// the cookie data

// to get the cookies 
//use document.cookies
let cookies=document.cookie; // it will give you the cookies string
// you an access the separate keys by splitting the string
