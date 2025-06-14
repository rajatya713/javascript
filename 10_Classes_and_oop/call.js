// call is a method of the Function prototype that allows you to call a function with a specific 'this' value and arguments.
// It is used to invoke a function with a specified 'this' context and arguments.
// The call() method takes the 'this' value as the first argument, followed by any number of arguments to pass to the function.

function SetUserName(name) {
    this.username = name;
}
function CreateUser(name, loginCount, signedIn) {
    this.loginCount = loginCount;
    this.signedIn = signedIn;
    SetUserName.call(this, name); // Using call to set 'this' to the current context.

}
console.log(new CreateUser('Rajat', 9, true)); // Output: createUser { loginCount: 9, signedIn: true, username: 'Rajat' }