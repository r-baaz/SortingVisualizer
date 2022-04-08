let array_size=50;
let bar_size=[];
let bar=[];
let showvalue=false;
let showlog=true;
let ca=document.getElementById("ca");
let desc= document.getElementById("desc");
let cont= document.getElementById("container");
let logcont=document.querySelectorAll(".log");

let genarray= document.getElementById("random");
genarray.addEventListener("click",randomArray);

function randomArray(){
  while(cont.hasChildNodes()){
    cont.removeChild(cont.firstChild);
  }
    showvalue=false;
    showlog=true;
  for (var i = 0; i <array_size; i++) {
    bar_size[i] = Math.floor(Math.random()*300)+1;
    bar[i] = document.createElement("div");
    bar[i].classList.add("bar");
    bar[i].style="height:"+bar_size[i]+"px;";
    cont.appendChild(bar[i]);
  }
  desc.style="opacity:0";
  logOpacity();

}

  let result=[];


function customArray(){

  let inp=document.querySelectorAll(".arr");
 
   while(cont.hasChildNodes()){
    cont.removeChild(cont.firstChild);
   }
    showvalue=true;
    showlog=true;
  bar_size=[];
  bar=[];
  array_size=10;
  for( var i=0;i<array_size;i++){
    bar_size[i]=parseFloat(inp[i].value);
    bar[i]=document.createElement("div");
    bar[i].classList.add("block");
    bar[i].innerText=inp[i].value;
    cont.appendChild(bar[i]);
  
  }
    desc.style="opacity:0";
    logOpacity();
}

function minmax(value, min, max) 
{
    if(parseInt(value) < min || isNaN(parseInt(value))) 
        return min; 
    else if(parseInt(value) > max) 
        return max; 
    else return value;
}

function numberOfArray(){
  array_size = document.getElementById("numberofarray").value;
  randomArray();
}

function showComplexity(val1,val2,val3){
  desc.style="opacity:1;";
  let td1= document.getElementById("Best Case");
  let td2= document.getElementById("Average Case");
  let td3= document.getElementById("Worst Case");
  td1.innerText= val1;
  td2.innerText= val2;
  td3.innerText= val3;
}

let openbtn=document.getElementById("openbtn");
let custompanel=document.getElementById("ca");
openbtn.addEventListener("click", ()=>{
  
  ca.style="width:100%; ";
  openbtn.style="visibility:hidden";
  closebtn.style="visibility:visible;";
  
})

let closebtn=document.getElementById("closebtn");
closebtn.addEventListener("click", ()=>{
  ca.style="width:0%;";
  openbtn.style="visibility: visible;";
  closebtn.style="visibility:hidden;";
})


function log(time){
  logcont[0].style="opacity:1;";
  logcont[1].style="opacity:1";
  let et= (time/1000).toString();
  let ar= et.split(".");
  let seconds=ar[0];
  let mseconds=ar[1];
  let Atime=document.querySelectorAll(".Atime");
  let Asize=document.querySelectorAll(".Asize");
  for(i=0;i<2;i++){
    Atime[i].innerHTML= seconds+"s "+mseconds+"ms";
    Asize[i].innerHTML= array_size;
  }
  }

function logOpacity(){
  logcont[0].style="opacity:0";
  logcont[1].style="opacity:0";
  showlog=true;
}
// function log(time){
//   rightcont.style="opacity:1;";
//   let et= parseFloat(time/1000).toString();
//   let ar= et.split(".");
//   let seconds=ar[0];
//   let mseconds=ar[1];
//   setTimeout(()=>{
//   document.querySelector("#Atime").innerHTML= seconds+"s "+mseconds+"ms";
//   document.querySelector("#Asize").innerHTML= array_size;

//   },time);}

// code for active class
let btns = document.querySelectorAll("ul>li, button.customarray-btn")

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}



window.onload= numberOfArray();

