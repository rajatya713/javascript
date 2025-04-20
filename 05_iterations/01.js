//for loop
const array = [2,3,4,2,3,5,3]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // console.log(element);
    
}


//break and continue

for (let i = 1; i <= 10; i++) {
    for(let j=1;j<=10;j++){
        if(j==5) break
        // console.log(j);
    }
}

//while loop
let i=1
while (i<=10) {
    // console.log(i);
    i++
}

//do while
let j=11
do {
    console.log(j);
    j++               //11 is printed. It prints before checking the condition.
} while (j<=10);


