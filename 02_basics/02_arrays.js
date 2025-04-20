const marvel_heros = ['thor','spiderman','Ironman']
const dc_heros = ['superman','flash','batman']

// marvel_heros.push(dc_heros)       //push array into array
// console.log(marvel_heros);  


const heros = marvel_heros.concat(dc_heros)
console.log(heros);

const newHeros = [...marvel_heros,...dc_heros]  //spread operator
console.log(newHeros);


const arrayInArray = [1,2,3,[3,4,[4,5,4]]]
console.log(arrayInArray);
const realArray = arrayInArray.flat(Infinity);
console.log(realArray);

console.log(Array.isArray([1,2]))
console.log(Array.from("rajat"))
  
console.log(Array.from({name:"rajat"}))   //gives empty array as it can't convert from object

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3,"payal","rapa",123))