class User{
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`User name is: ${this.username}`);
    }
    static createId(){
        return `123`
    }
}
const user1 = new User('Rajat');

// console.log(user1.createId())  // Output: TypeError: user1.createId is not a function
// console.log(User.createId()); // Output: 123
// Static methods are called on the class itself, not on instances of the class.


class Teacher extends User {
    constructor(username, subject) {
        super(username); // Call the parent class constructor
        this.subject = subject;
    }
    
}

const teacher = new Teacher('Payal', 'Math');
teacher.logMe(); // Output: User name is: Payal
// console.log(teacher.createId()); // TypeError: teacher.createId is not a function
