//MAP: Map method is used when you wish to perform 
// a specific operation with all the elements of an array
// it will not change the original array

let myArr=[1,2,3,4,5,6,7,8,9,10,12,24,67]

// write a function to return square array of myArr
// eg result =[1,4,9,16,25,.....]

// function squareOfArray(elem){
//     return elem*elem;
// }
// function calculate(myArr,cb){
//     let result=[];
//     for(let i=0;i<myArr.length;i++){
//         result.push(cb(myArr[i]));
//     }
//     return result;
// }

// let result=calculate(myArr,squareOfArray);
// console.log(result);

// let result=myArr.map(function(elem){
//     return elem*elem;
// })
// console.log(result);
// console.log(myArr);

// function square(elem){
//     return elem*elem;
// }
// let squareOfArray=myArr.map(square);
// console.log(squareOfArray);
// console.log(myArr);

//declarative
// let radii=[1,3,4,7,9,11];
// let area=radii.map(function(radius){
//     return Math.PI*radius*radius;
// })
// console.log(area);

// let circumference=radii.map(function(radius){
//     return Math.PI*radius*2;
// })
// console.log(circumference);

// let diameter=radii.map(function(radius){
//     return 2*radius;
// })
// console.log(diameter);

// const rupees=[1000,3000,4000,2000,-898,3000,-4500];
// const inrToUsd=82;
// let usd= rupees.map(function (rupee){
//     return rupee/inrToUsd;
// })
// console.log(usd);


//copy an array
let copyOfmyArr=myArr.map(function(elem){
    return elem;
})
console.log(copyOfmyArr);