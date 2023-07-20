"use strict";

// console.log(this);   //Window object
function fxn(){
    console.log(this); // undefined
}
// fxn();

function fxn(){
    function gxn(){
        console.log(this);  //undefined
    }
    gxn()
}
// fxn();

let obj={
    name:"Parth",
    check:"false",
    sayhello:function fxn(){
        console.log(this); 
    }
}
// obj.sayhello();  // Call the object itself, since invoking from object

let sayhello=obj.sayhello;
// sayhello(); //undefined

let anotherObj={
    name:"Parth",
    check:"false",
    sayHelloAgain:function fxn(){
        function gxn(){
            console.log(this); 
        }
        gxn();
    }
}
// anotherObj.sayHelloAgain();  // undefined

let sayHelloAgain=anotherObj.sayHelloAgain;
sayHelloAgain();   //undefined