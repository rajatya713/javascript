const name = 'Payal     '
console.log(name.length); // This will log the length of the string 'Payal' which is 5.

//but it will also include the trailing spaces, so the length will be 10.
//I want the length of the string without the trailing spaces i.e., true length of the string.

console.log(name.trueLength); // This will log undefined because 'trueLength' is not a property of the string object.
//Using prototype to add a method to the String object to get the true length of the string without trailing spaces.
String.prototype.trueLength = function() {
    return this.trim().length; // 'this' refers to the string object, and 'trim()' removes trailing spaces.
}
console.log(name.trueLength()); // This will log the true length of the string 'Payal' which is 5.
// Note: The 'trueLength' method is added to the String prototype, so it can be used on any string object.

// Why trueLength() instead of trueLength?
// Because we are adding a method to the String prototype, we need to call it as a function using parentheses.
// If we had added it as a property, we could have accessed it without parentheses, but since it's a method, we need to call it with parentheses.
// how to make it a property instead of a method?
// To make it a property instead of a method, we can use Object.defineProperty to define a getter for the property.
Object.defineProperty(String.prototype, 'trueLength', {
    get: function() {
        return this.trim().length; // 'this' refers to the string object, and 'trim()' removes trailing spaces.
    }
}); 
console.log(name.trueLength); // This will log the true length of the string 'Payal' which is 5.
// Note: This way, we can access 'trueLength' as a property without parentheses.


//-----------------------------------------------------------------------------------------------------
// # Prototype Chain
// The prototype chain is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects.
// When you access a property or method on an object, JavaScript first checks if the property or method exists on the object itself.
// If it doesn't, it checks the object's prototype, and then the prototype's prototype, and so on, until it reaches the end of the chain (null).    
// This allows for a powerful way to share properties and methods across objects without duplicating code.
// Example of prototype chain

//                               Function -------------------------v
//                               Array   --------------------->   Objects ------------------>  null
//                               String  --------------------------^
function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
}
function Dog(name) {
    Animal.call(this, name); // Call the Animal constructor with 'this' set to the new Dog instance
}
Dog.prototype = Object.create(Animal.prototype); // Set the prototype of Dog to be an instance of Animal
Dog.prototype.constructor = Dog; // Set the constructor of Dog to be Dog
Dog.prototype.speak = function() {
    console.log(`${this.name} barks.`);
}
const dog = new Dog('Rex');
dog.speak(); // Output: Rex barks.
// In this example, the Dog constructor inherits from the Animal constructor.
// The Dog prototype is set to an instance of Animal, allowing Dog instances to access the speak method defined in Animal.
// This is an example of the prototype chain in action, where Dog instances can access properties and methods from both Dog and Animal prototypes.
//-----------------------------------------------------------------------------------------------------
