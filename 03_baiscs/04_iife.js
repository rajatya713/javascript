//IIFE ---> Immediately Invoked Function Expressions

(function test(){
    console.log('DB connected');
})();                // ; is important to let know that the iife is completed and the context need to be stopped.
//()()


((name)=>{
    console.log(`hello ${name}`);
})('payal')

console.log('hi');
