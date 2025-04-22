const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num) => {
    return num > 4
})
console.log(newNums);


const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums2 = myNums2.map((num)=>{
//     return num+10
// })

//----------------chaining------------------
const newNums2 = myNums2.map((num) => num * 10)
    .map((num) => num + 3)
    .filter((num) => num > 40)
console.log(newNums2);


const myNums3 = [1, 2, 3]
const initial = 0
const sum = myNums3.reduce((acc, curr) => {
    console.log(`Acc:${acc} Curr:${curr} Initial:${initial}`);
    return (acc + curr)
}, initial)
console.log(sum);

// const myNums4 = [5, 5, 3, 5]
// const sum2 = myNums4.reduce((acc, curr) => acc + curr, 0)
// console.log(sum2);

