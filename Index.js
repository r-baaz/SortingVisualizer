let array_size=50;
let bar_size=[];
let bar=[];
let showvalue=false;
let ca=document.getElementById("ca");
let desc= document.getElementById("desc");
let cont= document.getElementById("container");

let genarray= document.getElementById("random");
genarray.addEventListener("click",randomArray);

function randomArray(){
  while(cont.hasChildNodes()){
    cont.removeChild(cont.firstChild);
  }
    showvalue=false;
  for (var i = 0; i <array_size; i++) {
    bar_size[i] = Math.floor(Math.random()*300)+1;
    bar[i] = document.createElement("div");
    bar[i].classList.add("bar");
    bar[i].style="height:"+bar_size[i]+"px;";
    cont.appendChild(bar[i]);
  }
  desc.style="visibility:hidden";
}

function customArray(){
  let inp=document.querySelectorAll(".arr");
   while(cont.hasChildNodes()){
    cont.removeChild(cont.firstChild);
   }
    showvalue=true;
  bar_size=[];
  array_size=10;
  for( var i=0;i<10;i++){
    bar_size[i]=parseFloat(inp[i].value);
    bar[i]=document.createElement("div");
    bar[i].classList.add("block");
    bar[i].innerText=inp[i].value;
    cont.appendChild(bar[i]);
  }
}

function numberOfArray(){
  array_size = document.getElementById("numberofarray").value;
  randomArray();
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
