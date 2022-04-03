let Ssort= document.getElementById("SelectionSort");
Ssort.addEventListener("click", selection_sort);
Ssort.addEventListener("click", logOpacity);

function selection_sort()
{
    showComplexity("O(n²)","O(n²)","O(n²)");
    change_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        Update(bar[i],bar_size[i],"red"); 

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            Update(bar[j],bar_size[j],"yellow"); 

            if(bar_size[j]<bar_size[index_min])
            {
                if(index_min!=i)
                {
                    Update(bar[index_min],bar_size[index_min],"blue"); 
                }
                index_min=j;
                Update(bar[index_min],bar_size[index_min],"red"); 
            }
            else
            {
                Update(bar[j],bar_size[j],"blue"); 
            }
        }
        
        if(index_min!=i)
        {
            var temp=bar_size[index_min];
            bar_size[index_min]=bar_size[i];
            bar_size[i]=temp;

            Update(bar[index_min],bar_size[index_min],"red"); 
            Update(bar[i],bar_size[i],"red"); 
            Update(bar[index_min],bar_size[index_min],"blue"); 
        }
        Update(bar[i],bar_size[i],"green"); 
    }
    Update(bar[i],bar_size[i],"green"); 

}
