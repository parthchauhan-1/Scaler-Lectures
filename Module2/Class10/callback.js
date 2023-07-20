// function firstName(){
//     console.log("Parth");
// }

// function lastName(){
//     console.log("Chauhan");
// }
// firstName();
// lastName();

function firstName(cb){
    console.log("Parth");
    cb();
}

function lastName(){
    console.log("Chauhan");
}
firstName(lastName); // the function which we paas as arguement is known as callback


function hof(cb){
    console.log("I'm a higher order function since I'm accepting a function ",
    "as arguement");
    cb();
}
function cb(){
    console.log("I'm a call back function since I'll be passed ",
    " as arguement to another function");
}
hof(cb);