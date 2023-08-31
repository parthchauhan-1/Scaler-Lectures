let fs=require("fs");

async function readFilesSerially (){
    let f1Data=await fs.promises.readFile("f1.txt");
    console.log(f1Data+"");
    // f1Data.then(function(data){
    //     console.log(data+"");
    // })
    let f2Data= await fs.promises.readFile("f2.txt");
    console.log(f2Data+"");
    // f2Data.then(function(data){
    //     console.log(data+"");
    // })
    let f3Data= await fs.promises.readFile("f3.txt");
    console.log(f3Data+"");
    // f3Data.then(function(data){
    //     console.log(data+"");
    // })
}
readFilesSerially();
