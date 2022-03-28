let speed=1000;
let delay_time=10000/(Math.floor(array_size/10)*speed);
let change_delay=0;
let visspeed= document.getElementById("speedofvisual");
visspeed.addEventListener("input", speedOfVisual);
function speedOfVisual()
{

    switch(parseInt(document.getElementById("speedofvisual").value))
    {
        case 1: speed=10;
                break;
        case 2: speed=100;
                break;
        case 3: speed=1000;
                break;
        case 4: speed=10000;
                break;
    }
    delay_time=10000/(Math.floor(array_size/10)*speed);
}
function Update(cont,height,color)
{
    window.setTimeout(function(){

        cont.style="height:" + height + "px; background-color:" + color + ";";
        if(showvalue===true){
        cont.innerText=height;}
    },change_delay+=delay_time);
}
