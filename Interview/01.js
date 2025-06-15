//Show only the original properties of the array by looping through the array

const arr = [1, 2, 3, 4, 5];
Array.prototype.customMethod = function(){
    console.log("This is a custom method on the Array prototype.");
}
for (let i in arr) {
    if(arr.hasOwnProperty(i)){
        console.log(arr[i]);
    }
    // hasOwnProperty checks if the property is an original property of the array
}


// arr.forEach(element => {
//     console.log(element);
    
// });
//ForEach method does the task and gives only the original properties of the array
// The custom method will not be shown in the loop because it is not an original property of the array.
// The for...in loop will show all properties of the array, including the custom method.