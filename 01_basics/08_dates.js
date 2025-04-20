let mydate = new Date();
console.log(typeof mydate);         //object
console.log(mydate.toDateString());

let specificDate = new Date(2025, 0, 23)
console.log(specificDate.toDateString());


let timestamp = Date.now();
console.log(timestamp);
console.log(specificDate.getTime());


console.log(
    specificDate.toLocaleString('default', {
        dateStyle: "long"
    }));




