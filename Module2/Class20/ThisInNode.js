// console.log(this);   Empty object
function fxn(){
    console.log(this); // global object
}
// fxn();

function fxn(){
    function gxn(){
        console.log(this);  //global object
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
// sayhello(); //Global variable, since direct invoking

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
// anotherObj.sayHelloAgain();  // global object

let sayHelloAgain=anotherObj.sayHelloAgain;
sayHelloAgain();   //global oject