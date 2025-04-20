let a = 10    //block scoped
const b = 20  //block scoped
var c = 30    //function or global scoped



if (true) {
    let a = 200;
    const b = 200
    var c = 300

}
console.log(a);
console.log(b);
console.log(c);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++
addone(5)             //will not give error
function addone(num) {
    return num + 1
}

// console.log(addTwo(5))             //will give error
const addTwo = function (num) {
    return num + 2;
}
console.log(addTwo(5))
