function myFunction(){
    console.log('Hello');   
}
//myFunction    -----> reference
//myFunction()  -----> to execute


function loginUserMessage(username){           //username is a Parameter
    if(username)
    return `${username} just logged in.`
}
const returnMessage=loginUserMessage('Rajat')       //'Rajat' is an Argument
console.log(returnMessage);


function calculateCartPrice(...arr){   //rest operator
    let total=0
    arr.forEach(element => {
        total+=element
    });
    return total
}
console.log(calculateCartPrice(1,2,3,4,5,5));



const user={
    username:'Rajat',
    age:24
}
function handleUser(obj){
    console.log(obj);
}
handleUser(user)

