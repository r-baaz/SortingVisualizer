let menuopen=document.getElementById("menubtn");
let sm=document.getElementById("sidemenu");

    menuopen.addEventListener("click",()=>{
        sm.style="left:0;";
    });
    
let menuclose=document.querySelector(".sidemenu-close");
    menuclose.addEventListener("click", ()=>{
        sm.style="left:-100%;";
    });