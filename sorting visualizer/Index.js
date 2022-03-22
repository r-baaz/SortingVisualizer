let array_size=50;
let bar_size=[];
let bar=[];
let desc= document.getElementById("desc");

let genarray= document.getElementById("newarray");
genarray.addEventListener("click",generateArray);

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
  desc.style="visibility:hidden";

}

function numberOfArray(){
  array_size = document.getElementById("numberofarray").value;
  generateArray();
}

function showComplexity(val1,val2,val3){
  desc.style="visibility:visible";
  let td1= document.getElementById("Best Case");
  let td2= document.getElementById("Average Case");
  let td3= document.getElementById("Worst Case");
  td1.innerText= val1;
  td2.innerText= val2;
  td3.innerText= val3;
}

window.onload= numberOfArray();
