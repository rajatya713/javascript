// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword() { //method to encrypt the password
//         return `${this.password}abc`
//     }
//     changeUsername(newUsername){
//         this.username = newUsername;
//     }

// }
// const chai = new User('Chai', 'chai@gmail.com', 'chai123');
// console.log(chai.encryptPassword()); // Output: chai123abc
// chai.changeUsername('Chai Singh');
// console.log(chai.username); // Output: Chai Singh


//Behind the scenes
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encryptPassword = function() { //method to encrypt the password
    return `${this.password}abc`;
}
User.prototype.changeUsername = function(newUsername) {
    this.username = newUsername;
}
const chai = new User('Chai', 'chai@gmail.com', 'chai123');
console.log(chai.encryptPassword()); // Output: chai123abc
chai.changeUsername('Chai Singh');
console.log(chai.username); // Output: Chai Singh