/*
Data types are divided on the basis of how data are stored and accessed in the memory.
1) Primitive (call by value) [Maintained by STACK]->gives copy of original value
    7 types:
        string
        Number
        Boolean
        null
        undefined
        Symbol
        BigInt (372847823748982378273n) -> use 'n' at the end

2) Non-primitive (Call by reference) [Maintained by HEAP ]
    Arrays
    Objects
    Functions



If Type is defined while decalaring a variable then statistically typed language.
Javascript is dynamically typed.
*/

const id=Symbol('123')
console.log(id)
const anotherid=Symbol('123')
console.log(anotherid);
console.log(id===anotherid); //false
console.log(id==anotherid);  //false

//Arrays
const heros=["shaktiman","naagraj"]
heros[4]="hii"
console.log(heros);

let myobj={
    name:"rajat",
    age:24
}


//Stack(primitive) vs Heap(non-primitive)




