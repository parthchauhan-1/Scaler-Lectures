let fs =require ("fs");

// let f1Data=await fs.promises.readFile("f1.txt");
// f1Data.then(function(data){
//     console.log(data + "");
// })
// let f2Data=await fs.promises.readFile("f2.txt");
// f2Data.then(function(data){
//     console.log(data + "");
// })
// let f3Data=await fs.promises.readFile("f3.txt");
// f3Data.then(function(data){
//     console.log(data + "");
// })

async function readFilesSerially(arr){
    let res=[];
    for(let i=0;i<arr.length;i++){
        let data = await fs.promises.readFile(arr[i]);
        res.push(data +"")
    }
}
let allFiles=["f1.txt","f2.txt","f3.txt"];
let result=readFilesSerially(allFiles);

result.then(function(data){
    console.log(data);
})