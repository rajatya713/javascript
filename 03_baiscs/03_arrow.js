//this ----> current context

const user = {
    username: "rajat",
    price: 99,

    welcomeMessage: function () {
        console.log(`welcome ${this.username}!!`);
        console.log(this);

    }
}
user.welcomeMessage()

function one() {
    let username = "rajat"
    console.log(this.username);     //undefined
}
one()


//Arrow function
const two = () => ({username:"rajat"})
console.log(two())