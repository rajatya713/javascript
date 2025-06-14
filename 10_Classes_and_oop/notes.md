# Does js support classes
# Yes, JavaScript supports classes, which were introduced in ECMAScript 2015 (ES6). Classes in JavaScript are syntactical sugar over the existing prototype-based inheritance and provide a clearer and more concise way to create objects and handle inheritance.

# How to create a class in js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
// Example of creating an instance of the class
const person1 = new Person('Alice', 30);
// Calling the greet method
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.      

## OOP 
OOP stands for Object-Oriented Programming, a programming paradigm that uses "objects" to represent data and methods to manipulate that data. It emphasizes concepts like encapsulation, inheritance, and polymorphism.

## Why use OOP
OOP is used to:
1. **Encapsulation**: Bundling data and methods that operate on that data within a single unit (object), which helps in hiding the internal state and requiring all interaction to be performed through an object's methods.
2. **Inheritance**: Allowing a new class to inherit properties and methods from an existing class, promoting code reuse and establishing a hierarchical relationship between classes.   
3. **Polymorphism**: Enabling objects of different classes to be treated as objects of a common superclass, allowing for flexibility and the ability to define methods that can operate on objects of different types.
4. **Abstraction**: Simplifying complex systems by modeling classes based on the essential properties and behaviors an object should have, while hiding unnecessary details.

## OOP concepts
1. **Classes**: Blueprints for creating objects, defining properties and methods.
2. **Objects**: Instances of classes that encapsulate data and behavior.  

