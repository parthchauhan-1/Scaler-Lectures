let starContainer=document.querySelector(".star-container");
let allStars=document.querySelectorAll(".star");
let rating=document.querySelector("h3");
let prevSelected=0;

starContainer.addEventListener("click",function(e){
    // console.log(e.target.dataset.num);
    let currentSelected=e.target.dataset.num;
    for(let i=0;i<prevSelected;i++){
        allStars[i].classList.remove("color");
    }

    for(let i=0;i<currentSelected;i++){
        allStars[i].classList.add("color");
    }
    prevSelected=currentSelected;
    rating.innerText="Rating: "+currentSelected;
})

starContainer.addEventListener("mouseover",function(e){
    let currentSelected=e.target.dataset.num;
    for(let i=0;i<allStars.length;i++){
        allStars[i].classList.remove("color");
    }

    for(let i=0;i<currentSelected;i++){
        allStars[i].classList.add("color");
    }
})
starContainer.addEventListener("mouseleave",function(e){
    let currentSelected=e.target.dataset.num;
    for(let i=0;i<allStars.length;i++){
        allStars[i].classList.remove("color");
    }
    for(let i=0;i<prevSelected;i++){
        allStars[i].classList.add("color");
    }

})

// console.log("HI");