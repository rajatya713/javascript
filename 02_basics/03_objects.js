//1. Singleton object ----> when created from constructor
Object.create

//2. object literals

const mySym = Symbol("23")

const user = {
    Name:"rajat",
    [mySym]:"newKey",            //Symbol as a key
    "full name":"Rajat yadav",
    age:24,
}
console.log(user.age);
//or
console.log(user["age"]);
console.log(user["full name"]);

//Symbol in object as a key
console.log(user[mySym]);      //----------------------> 😃

user.email = "rajatya713@gmail.com"
console.log(user);

// Object.freeze(user)     //Prevents the modification of existing property
user.email="none"       //no effect
user.surname="yadav"    //no effect
console.log(user);


user.greeting =function(){
    console.log("welcome to this lovely jsjjjs");
    
}
user.newGreeting =function(){
    console.log(`welcome ${this["full name"]} to this lovely jsjjj`);
}
user.greeting()
user.newGreeting()






