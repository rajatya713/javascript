//for of
const arr = [1,2,3,4,5,6,10]
for (const element of arr) {
    console.log(`Array element is: ${element}`)
}

//Map 
const mp = new Map()   //Unique and ordered 
mp.set(3,"Yadav")
mp.set(1,'Rajat')
mp.set(2,'Payal')
console.log(mp);
//map are not iterable

for (const [key,val] of mp) {
    console.log(`${key} -> ${val}`);
}



const obj = {
    'game1':'nfs',
    'game2':'igi'
}
// for (const element of obj) {    
//     console.log(element);
    
// }

for (const key in obj) {
    console.log(`${key} is ${obj[key]}`);
    
}
//forof loop gives elements(values) of the object
//forin loop gives keys(index) of the object


//for Each
const coding = ['js','cpp','python']
coding.forEach((item,index,arr) => {
    console.log(item,index,arr);
});


