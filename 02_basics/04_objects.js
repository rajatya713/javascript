const tinderUser = new Object()       //singleton object
tinderUser.id = "18vk"
tinderUser.name = "vk"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regUser ={
    email:"user@gmail.com",
    fullName:{
        fname:"user",
        lname:"user"
    }
}
console.log(regUser["fullName"]["lname"]);


const obj1 = {
    1:"a",
    2:'b',
    3:'c'
}
const obj2 = {
    4:"d",
    5:'e'
}
// const newObj = {...obj1,...obj2}
const newObj = Object.assign({},obj1,obj2)  //{} stores both obj1 and obj2
console.log(newObj);
console.log(obj1);
console.log(obj2);


const users = [
    {
        id:1,
        email:"user1@gmail.com"
    },
    {
        id:2,
        email:"user2@gmail.com"
    },
    {
        id:3,
        email:"user3@gmail.com"
    }
]
console.log(users[0].email)

console.log(Object.keys(tinderUser));   //returns array of keys.
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));



//Destructuring Objects
const course = {
    courseName:"js",
    price:999,
    validity:"lifetime"
}
const {courseName:name,price,validity:val} = course
console.log(`Course name is ${name} and price is ${price}. It's validity is ${val}.`);


