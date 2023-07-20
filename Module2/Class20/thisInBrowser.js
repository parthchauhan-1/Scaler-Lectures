// console.log(this);   //Window Object
function fxn(){
    console.log(this); // Window object
}
// fxn();

function fxn(){
    function gxn(){
        console.log(this);  //Window object
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
// anotherObj.sayHelloAgain();  // Window object, since direct invoking

let sayHelloAgain=anotherObj.sayHelloAgain;
// sayHelloAgain();   //window oject