let redbtn=document.querySelector("#box1")
let bluebtn=document.querySelector("#box2")
let greenbtn=document.querySelector("#box3")
let yellowbtn=document.querySelector("#box4")

let currcolor="white";

// for red
redbtn.addEventListener("mouseover",()=>{

    document.querySelector("body").style.backgroundColor="red";
})

// for blue

bluebtn.addEventListener("mouseover",()=>{

    document.querySelector("body").style.backgroundColor="blue";
})


// for green

greenbtn.addEventListener("mouseover",()=>{

    document.querySelector("body").style.backgroundColor="green";
})

// for yellow

yellowbtn.addEventListener("mouseover",()=>{

    document.querySelector("body").style.backgroundColor="yellow";
})

// for reset

let resetcolor=document.querySelector("#resetbtn")

resetcolor.addEventListener("click",()=>{
    document.querySelector("body").style.backgroundColor="white";
})