// Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
// It is a way to handle asynchronous operations in JavaScript, allowing you to write cleaner and more manageable code.
// It can be in one of three states: pending, fulfilled, or rejected.
// A promise is created using the Promise constructor, which takes a function as an argument.
// The function takes two arguments: resolve and reject, which are functions that you call to indicate the outcome of the promise.
// The resolve function is called when the asynchronous operation is successful, and it passes the result to the next then() method.
// The reject function is called when the asynchronous operation fails, and it passes the error to the next catch() method.
//---------------------------------------------------------------------------------

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            console.log("Promise resolved");
            resolve("Success");
        }
        else{
            reject('Something went wrong')
        }
    },1000)
}).then((response)=>{
    console.log(`The response is: ${response}`);   
}).catch((err)=>{
    console.log(err);
})

//---------------------------------------------------------------------------------

const promiseTwo = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            console.log("Promise Two resolved");
            resolve("Success");
        }
        else{
            reject('Something went wrong')
        }
    },1000)
})

async function consumePromiseTwo(){
    try {
        const response = await promiseTwo
        console.log(response);
    } catch (error) {
        console.log(error);   
    }
}

consumePromiseTwo()


//---------------------------------------------------------------------------


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });

//Sometimes the fetch API returns data faster than the setTimeout function and sometimes not, because of network latency and setTimeout delay.



//----------------------------------------------------------------------------------------

// Example of JavaScript event loop with promises and setTimeout

console.log("Script start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise microtask");
});

console.log("Script end");

// Promise resolves immediately as a microtask, while setTimeout is a macrotask.
// Output:
// Script start     
// Script end
// Promise microtask
// Timeout callback
// This shows the event loop behavior in JavaScript, where microtasks (like promises) are executed before macrotasks (like setTimeout).

//---------------------------------------------------------------------------