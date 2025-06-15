// # Object Literal
// Object literals is a way to create objects in JavaScript using a simple syntax.
// It allows you to define properties and methods directly within curly braces.
// Example of an object literal
const user = {
    username: 'Rajat',
    loginCount: 9,
    signedIn: true,
    login: function() {
        console.log("User logged in");
        console.log(this); 
        // 'this' refers to the user object in this contex and not the function itself 
        // because it is called as a method of the user object.
        
    }
}
// console.log(user.username);
// console.log(user['loginCount']);
// console.log(user.signedIn);
// user.login();
// console.log(user.login()); // This will log "User logged in" and return undefined since the function does not return anything.
// console.log(user.login); // This will log the function definition, not execute it.

//-----------------------------------------------------------------------------------------------------------------------------

// console.log(this); 

// In the global context, 'this' refers to the global object (window in browsers, global in Node.js).
// In a function, 'this' refers to the object that called the function.
// In an object method, 'this' refers to the object itself.
// In an event handler, 'this' refers to the element that triggered the event.
// In a class, 'this' refers to the instance of the class.
// In an arrow function, 'this' is lexically bound, meaning it refers to the context in which the arrow function was defined, not where it is called.
// In strict mode, 'this' is undefined in functions that are not called as methods of an object.

// Example of a function that uses 'this'
function showThis() {
    console.log(`Function: ${this}`); // In the global context, this will log the global object (window in browsers).
    // In a function, 'this' refers to the global object (window in browsers, global in Node.js).
}
showThis();

//------------------------------------------------------------------------------------------------------------------------------



// # Constructor Function
// Constructor functions are a way to create objects in JavaScript using a function.
// They are defined with a capitalized name and use the 'new' keyword to create instances.
function User(username, loginCount, signedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
    this.login = function() {
        console.log("User logged in");
        console.log(this); // 'this' refers to the instance of the User object.
    }
}

// new keyword creates a new instance of the User object
const user1 = new User('Rajat', 9, true);
const user2 = new User('John', 5, false);
// user1.login();
// user2.login();

//------------------------------------------------------------------------------------------------------------------------------
// Here is what happens when you use the 'new' keyword with a constructor function:
// 1. A new empty object is created.
//    This object is linked to the prototype of the constructor function.
//    This means that the new object will inherit properties and methods from the constructor function's prototype.
//    This is why we can add methods to the User prototype and they will be available to all instances of User.
// 2. The constructor function is called with 'this' set to the new object.
// 3. The properties and methods defined in the constructor function are added to the new object.   
// 4. The new object is returned from the constructor function, unless the function explicitly returns another object.
// -----------------------------------------------------------------------------------------------------------------------------

// # Prototypes
// Prototypes are a way to add properties and methods to objects in JavaScript.
// Every function in JavaScript has a prototype property that is used to add properties and methods to the objects created by that function.
User.prototype.logout = function() {
    console.log("User logged out");
    return this // 'this' refers to the instance of the User object.
}

//------------------------------------------------------------------
//# Prototype
// Prototypes are a way to share properties and methods across all instances of a constructor function.
// When you add a method to the prototype, it is shared by all instances of the constructor function.
// This means that you can add methods to the prototype after creating instances, and they will be available to all instances.
// Example of adding a method to the prototype
User.prototype.getUsername = function() {
    return this.username;    
}
console.log(user1.getUsername()); // Output: Rajat
console.log(user2.getUsername()); // Output: John
console.log(user1.logout()); // Output: User logged out


//--------------------------------------------------------------
