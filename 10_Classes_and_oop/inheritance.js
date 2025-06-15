class User{
    constructor(username){
        this.username = username;

    }
    logMe(){
        console.log(`User name is: ${this.username}`);
        
    }
}
class Teacher extends User{
    constructor(username, subject){
        super(username); // Call the parent class constructor
        // replacement of call() method
        this.subject = subject;
    }
    logMe(){
        super.logMe(); // Call the parent class method
        console.log(`Subject is: ${this.subject}`);
    }
}

const teacher = new Teacher('Rajat', 'Math');
teacher.logMe(); // Output: User name is: Rajat, Subject is: Math

console.log(teacher instanceof Teacher); // Output: true
console.log(teacher instanceof User); // Output: true
