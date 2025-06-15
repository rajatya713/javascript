//Implement a custom forEach method

//Way 1
Array.prototype.customForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
const arr = [1, 2, 3, 4, 5];
arr.customForEach(function(element, index, array) {
    console.log(`Element at index ${index} is ${element}`);
});

//Way 2
Array.prototype.customForEach = function(callback,thisContext) {
    console.log(`This context is: ${thisContext}`);
    // thisContext is the context in which the callback function will be executed
    for (let i = 0; i < this.length; i++) {
        callback.call(thisContext, this[i], i, this);
    }
};  
const arr2 = [6, 7, 8, 9, 10];
arr2.customForEach(function(element, index, array) {
    console.log(`Element at index ${index} is ${element}`);
    console.log(`${this}`); // 'this; is global context in this case
},this);


//-----------------------------------------------------------------------------------------------------------------------------

console.log(`${this}`); // 'this' is global context in this case
// But it prints [object object] because it is wrapped in a module and 'this' refers to the module.exports object in Node.js.
// In a browser, 'this' would refer to the global window object.

console.log(this); // prints {} in Node.js, which is the module.exports object.

//------------------------------------------------------------------------------------------------------------------------------

