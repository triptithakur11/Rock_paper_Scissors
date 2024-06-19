
let currmode="light";
let buttn= document.querySelector("#mode");
buttn.addEventListener("click",() =>{
    if(currmode==="light"){
        currmode="dark";
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").style.color="white";
    }else{
        currmode="light";
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("body").style.color="black";
    }
console.log(currmode);
});