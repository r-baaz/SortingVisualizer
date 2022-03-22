 let Case=["O(n)","O(n^2)","O(n^4)"];
 Case=[...Case];
 let bubevent=document.getElementById("bub");
 bubevent.addEventListener("click",bubble_sort)
 bubevent.addEventListener("click",()=>{
 document.getElementById("desc item").innerHTML('Best case\n worst Case');
 
 });
function bubble_sort()
{
    change_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            Update(bar[j],bar_size[j],"purple");

            if(bar_size[j]>bar_size[j+1])
            {
                Update(bar[j],bar_size[j], "red");
                Update(bar[j+1],bar_size[j+1], "red");

                let temp=bar_size[j];
                bar_size[j]=bar_size[j+1];
                bar_size[j+1]=temp;

                Update(bar[j],bar_size[j], "red");
                Update(bar[j+1],bar_size[j+1], "red");
            }
            Update(bar[j],bar_size[j], "turquoise");
        }
        Update(bar[j],bar_size[j], "green");
    }
    Update(bar[0],bar_size[0], "green");
}
