class User{
    constructor(email,password){
        this.email = email;
        this.password = password;   
    }
    get password() {
        return this._password.toUpperCase(); 
        // Getter to return the password in uppercase
        // _password is a convention to indicate that this is a private property
        // but it is not truly private in JavaScript.
        // It is just a convention to indicate that this property should not be accessed directly.
        // It is still accessible from outside the class.
    }
    set password(newPassword) {
        this._password = newPassword;
        // Setter to set the password
    }
}
const rajat = new User('rajat@123', 'abc123');
console.log(rajat.password); // Output: ABC123
rajat.password = 'newPassword'; // Setting a new password
console.log(rajat.password); // Output: NEWPASSWORD
