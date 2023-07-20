// JavaScript is a funtional programming language
//      1.Changes should not be done to the original object

let arr=[1,2,3,4];
// function fxn(arr){
//     arr.push(5);
//     return arr;
// }

// fxn(arr);
// console.log(arr);

function anotherfxn(arr){
    let res=[...arr];
    res.push(10);
    return res;
}
console.log(anotherfxn(arr));
console.log(arr);

// Function in JS is known as first class citizen because:
//   1.we can paas function in an arguement -----> known as callback
//   2.function can also accept another function in an arguement --->known as HOF
//   3.we can store function in a variable

