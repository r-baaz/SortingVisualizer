let Bsort= document.getElementById("BubbleSort");
Bsort.addEventListener("click", bubble_sort);
function bubble_sort()
{
  showComplexity("O(n)","O(n²)","O(n²)");
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
