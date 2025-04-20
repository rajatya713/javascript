const score = 300

const balance = new Number(10.25)
console.log(balance.toString().length)
console.log(balance.toFixed(1));  //10.3

console.log(balance.toPrecision(1));

const hundreds = 1000000000
console.log(hundreds.toLocaleString());


//------------------Maths-----------------------
console.log(Math.abs(-33.4));  //33.4
console.log(Math.round(4.5));  //5
console.log(Math.floor(4.5));  //4
console.log(Math.ceil(4.5));   //5

console.log(Math.min(3,4,5,6,2,-1));  //-1

console.log(Math.random()); //[0,1)
console.log(Math.floor(Math.random()*10));  //[0,10)
console.log(Math.floor(Math.random()*10 +1));  //[1,10]

const min = 10;
const max = 40;
console.log(Math.floor(Math.random()*(max-min+1))+min);   //[10,40]








