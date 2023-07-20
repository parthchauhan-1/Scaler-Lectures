let arr=[1,2,3,4,5];
let sum =0;
// function getSum(arr){
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum;
// }
// console.log(getSum(arr));

let resultSum=arr.reduce(function(accumulator,elem){
    accumulator+=elem;
    return accumulator;
},1000);
console.log(resultSum);