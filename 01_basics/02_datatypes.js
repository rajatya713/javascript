"use strict"; //treat all the js code as newer version of js 
//  alert("hello") //will not work as we are using node js and not browser
//the alert method is part of the window which is a browser interface.....node has no window interface.

let name="Rajat" //type:string
let state=null //representation of empty value
let country; //undefined value


//Data types-------------------------
//number => 2^53
//bigint
//string => ""
//boolean => true/false
//null => standalone value (type:object)
//undefined 
//symbol => unique
//object


console.log(typeof(undefined)); //undefined
console.log(typeof(null));      //object
console.log(typeof(NaN));       //number
console.log(NaN===NaN);         //false
console.log(NaN==NaN);          //false


console.log(isNaN(undefined)); //true
console.log(isNaN(null));      //false
console.log(isNaN(true));      //false [true ---> 1]


