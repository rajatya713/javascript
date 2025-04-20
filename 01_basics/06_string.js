const fname="Rajat"
const lname="Yadav"
console.log(fname+" "+lname); //Outdated instead use backticks `
console.log(`${fname} ${lname}`);


const name=new String('Payal')
console.log(name);
console.log(name.length);
console.log(`${name.toUpperCase()} ${lname.toUpperCase()}`);


console.log(name.charAt(0));
console.log(name.indexOf('a'));


const newString = fname.substring(0,2);   // [0,2)    Ra
console.log(newString);


const anotherString = name.slice(-5,2);  //Pa
console.log(anotherString);


const newString1 = " Rajat   ";
console.log(newString1.trim());

const url = "https://rajat.com/rajat%20yadav";
console.log(url.replace('%20','-'));

console.log(url.includes('yadav'));  //true

console.log(url.split('/'));


