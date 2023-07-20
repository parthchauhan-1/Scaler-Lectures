// FILTER: It's a hof that works only on a condition and is used
// to filter out the array
// It will not change the original array

let arr=[1,2,4,7,8,9,45,6,844,288];
// expected o/p: [2,4,8,6,844,288] // even array
// function even(arr){
//     let result=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(even(arr));

let filteredArr=arr.filter(function(ele){
    return ele%2==0;
})
// console.log(filteredArr);


// get only positive values
const rupees=[1000,3000,4000,2000,-898,3000,-4500];
let positiveVal=rupees.filter(function(rupee){
    return rupee>=0;
})
console.log(positiveVal);