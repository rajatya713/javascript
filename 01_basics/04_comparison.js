console.log(2==='2'); //false
console.log(2==2); //true

console.log('2'>1); //true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
console.log(null <= 0); //true
console.log(null < 0); //false
console.log(null === 0); //false

/*
The reason is that the equality check == and comparisons >,<,>=,<= work differently.
Comparisons convert null to a number, treating it as 0
*/


console.log(undefined > 0)  //false
console.log(undefined >= 0) //false
console.log(undefined == 0) //false
console.log(undefined < 0)  //false









