counterValue=document.querySelector("h2");
incrBtn=document.querySelector(".incr");
decrBtn=document.querySelector(".decr");
incrDecrValue=document.querySelector(".incr-decr-box");
reset=document.querySelector(".reset");
currIncrDecrValue=1;

// console.log(counterValue);

incrBtn.addEventListener("click",function(){
    value=parseInt(counterValue.innerText);
    value=value+parseInt(currIncrDecrValue);
    // console.log(value);
    counterValue.innerText=value;
})

decrBtn.addEventListener("click",function(){
    value=parseInt(counterValue.innerText);
    value-=parseInt(currIncrDecrValue);
    if (value<0) {
        return;
    }
    counterValue.innerText=value;
})

incrDecrValue.addEventListener("change",function(){
    value=incrDecrValue.value;
    // console.log(value);
    if (value<0) {
        alert("Enter only positive values");
        currIncrDecrValue=1;
        return;
    }
    currIncrDecrValue=value;
})
incrDecrValue.addEventListener("keydown",function(e){
    if(e.key=="Enter"){
    // console.log(value);
    counterValue.innerText=incrDecrValue.value;

    }
})

reset.addEventListener("click",function(){
    // console.log("Hi");
    currIncrDecrValue=1;
    counterValue.innerText="0"
})