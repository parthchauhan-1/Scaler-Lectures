let fs = require("fs");
let f1Data = fs.promises.readFile("f1.txt");
let f2Data = fs.promises.readFile("f2.txt");
let f3Data = fs.promises.readFile("f3.txt");

let allPromise = Promise.all([f1Data, f2Data, f3Data]);
async function readAll() {
    try {
        allPromise.then(function (data) {
            console.log(data + "");
        })
    } catch (error) {
        // console.log("File not found")
        console.log(error);
    }
}
readAll();