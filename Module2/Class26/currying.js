// function fxn(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// let sum=fxn(2)(2)(2);
// console.log(sum);


//  Q1. Multiply(2)(3)(3), make user of function currying
// function fxn(a){
//     function gxn(b){
//         function hxn(c){
//             return a*b*c;
//         }
//         return hxn;
//     }
//     return gxn;
// }
// let ans=fxn(2)(3)(3);
// console.log(ans);

// Question 2 - >
// calculate('sum')(3)(4) -> 7
// calculate('substrat')(5)(2) -> 3
// calculate('multiply')(3)(4) -> 12
// calculate('divide')(8)(4) -> 2

// function calculate(operator) {
//     if (operator == 'sum') {
//         return function (b) {
//             return function (c) {
//                 return b + c;
//             }
//         }
//     }
//     if (operator == 'substract') {
//         return function (b) {
//             return function (c) {
//                 return b - c;
//             }
//         }
//     }
//     if (operator == 'multiply') {
//         return function (b) {
//             return function (c) {
//                 return b * c;
//             }
//         }
//     }
//     if (operator = 'divide') {
//         return function (b) {
//             return function (c) {
//                 return b / c;
//             }
//         }
//     }
// }
// console.log(calculate('sum')(2)(10));

// function calculate(operator) {
//     return function (a) {
//         return function (b) {
//             if (operator == 'sum') {
//                 return a + b;
//             }
//             else if (operator == 'substract') {
//                 return a - b;
//             }
//             else if (operator == 'multiply') {
//                 return a * b;
//             }
//             else if (operator == 'divide') {
//                 return a / b;
//             }
//             else {
//                 return "Invalid Operation"
//             }
//         }
//     }
// }
// let ans = calculate('substract')(2)(2);
// console.log(ans);


// Question - 3

// Infinite currying

// write an add function which can add values like this

// add(2)(3)(4)(5)......()

// add(2)(3)(); -> 5
// add(5)(2)(3)() -> 10
// add(5)(5)(5)(5)(5)() -> 25

// function add(x) {
//     return function(y){
//         if(y){
//             return add(x+y);
//         }
//         else{
//             return x;
//         }
//     }
// }

// console.log(add(1)(2)(3)(2)(2)());

// Partial application of currying

function sum(a) {
    return function (b,c){
        return a+b+c;
    }
}

// console.log(sum(10)(20,20));
let fxn=sum(20);
let ans =fxn(30,40);
console.log(ans);
let ans3=fxn(1,1);
console.log(ans3);
let gxn=sum(30);
let ans2=gxn(20,50);
console.log(ans2);


