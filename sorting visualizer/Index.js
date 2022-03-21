let array_size=50;
let bar_size=[];
let bar=[];
let genarray= document.getElementById("newarray");
genarray.addEventListener("click",generateArray);

let sortselected=document.querySelectorAll("btn");
function generateArray(){
  let cont= document.getElementById("container");

  while(cont.hasChildNodes()){
    cont.removeChild(cont.firstChild);
  }

  for (var i = 0; i <array_size; i++) {
    bar_size[i] = Math.floor(Math.random()*300);
    bar[i] = document.createElement("div");
    bar[i].classList.add("block");
    bar[i].style.height=`${bar_size[i]}px`;
    cont.appendChild(bar[i]);
  }
}

function numberOfArray(){
  array_size = document.getElementById("numberofarray").value;
}
