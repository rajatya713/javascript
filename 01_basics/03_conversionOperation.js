let val="18vk"
console.log(typeof(val));   //string

let valInNum=Number(val)
console.log(`VAL IN NUM IS`,valInNum);
console.log(typeof(valInNum));


/*

"18" => 18
"18vk" => NaN  ....typeof(NaN) = number
true => 1 
false => 0

*/

let loggedIn=""
let loggedInBool = Boolean(loggedIn)
console.log(loggedInBool);

/*

"" => false
null => false
undefined => false

*/

let number=33.4
let numberInString = String(number)
console.log(typeof numberInString);
console.log(numberInString);


// --------------------Operations-----------------------------

console.log(typeof(2+'2')); //string 22
console.log(typeof('2'+2)); // string 22
console.log(typeof(2-'2')); //number 0
console.log(typeof('2'-2)); // number 0

console.log('1'+2+2+2); //1222
console.log(2+2+2+'1'); //61 (string)







