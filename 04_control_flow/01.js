// if else
// switch
switch (2) {
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
    // break;
    case 3:
        console.log("3");
        break;
    case 4:
        console.log("4");
        break;

    default:
        break;
}

//Truthy and Falsy value
//falsy: 
//       false
//       0
//       -0
//       BigInt 0n
//       ""
//       null
//       undefined
//       NaN

//truthy value:
//            "0"
//            'false'
//            " "
//            []
//            {}
//            function(){}
//


//Nullish Coalescing Operator(??)-------> for null and undefined
let val1 = 10
val1 = undefined ?? 20
console.log(val1);


//ternary operator
//condition ? true:false
console.log((2 > 3) ? 1 : 2);


