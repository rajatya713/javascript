//Javascript Execution Context
//-----------------> how a file is executed in js
//The program runs in 2 phases

// 1.Global execution context(this) ------> 2.Function execution context -----> 3.Eval execution context

//{code file} ----> Memory creation phase
//            ----> Execution phase



let val1=10
let val2=5
function addNum(num1,num2){
    let total=num1+num2
    return total
}
let result1=addNum(val1,val2)
let result2=addNum(2,3)

// 1.Global execution------->this
// 2.Memory Phase:
//               val1->undefined
//               val2->undefined
//               addNum->definition of function
//               result1->undefined
//               result2->undefined
// 3.Execution phase:
//                   val1->10
//                   val2->5
//                   addNum---->______________________________
//                             |     new variable environment |
//                             |              +               |
//                             |     execution thread         |
//                             |______________________________|   -----> again 2 phases are executed:
//                                                                       1.Memory phase                    2.Execution phase
//                                                                         val1->undefined                   num1->10
//                                                                         val2->undefined                   num2->5
//                                                                         total->undefined                  total->15
//                                                                                                     this total is returned
//                                                                                                     to the global execution.
//                                                                       Now, this phase is deleted 
//                   result1->15
//                   addNum---->______________________________
//                             |     new variable environment |
//                             |              +               |
//                             |     execution thread         |
//                             |______________________________|
//                   result2->5
//
//
//
//
//
//
//
//
//
//----------------------------------------------------------------------------------------------------------------------------
//+++++++++++++++++++++++++++++++  Call stack  ++++++++++++++++++++++++++++++++++++++++++++
//
//
//                      |                        |
//                      |                        |
//                      |                        |
//                      |                        |
//                      |                        |
//                      |                        |
//                      |                        |
//                      |                        |
//                      |                        |
//                      |________________________|
//                      |     Global Execution   |
//                      |________________________|
