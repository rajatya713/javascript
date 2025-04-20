const arr = [1,24,5,3,true,"rajat"]
const arr1= new Array(1,2,3,"payal")

console.log(arr);


// Arrays in js are resizeable
// Mix of data types.

//Array copies create shallow copy ---> same reference point.
//                    ^^^^^^^^^^^^


//-----------------Array methods-------------------------
arr.push('yadav')
console.log(arr);

arr.pop()
console.log(arr);

arr.unshift(10);
console.log(arr);

arr.shift()
console.log(arr);


console.log(arr.includes('rajat'));
console.log(arr.indexOf(3));


const newArr = arr.join('-')   //1-24-5-3-true-rajat
console.log(typeof newArr);    //string

//slice and splice

console.log("A ",arr);
const myArr1 = arr.slice(1,3);   //[1,3)    "slice doesnot manipulate original array"
console.log(myArr1);

console.log("B ",arr);

const myArr2 = arr.splice(2,4)  //splice ---> deletes the array elements and returns it.{[2, .....4 elements]}
console.log(myArr2);

console.log("C ",arr);











