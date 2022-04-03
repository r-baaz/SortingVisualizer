let Isort= document.getElementById("InsertionSort");
Isort.addEventListener("click", Insertion);
Isort.addEventListener("click", logOpacity);

function Insertion()
{
    showComplexity("O(n)","O(n²)","O(n²)");
    change_delay=0;

    for(var j=0;j<array_size;j++)
    {
        Update(bar[j],bar_size[j],"yellow"); 

        var key= bar_size[j];
        var i=j-1;
        while(i>=0 && bar_size[i]>key)
        {
            Update(bar[i],bar_size[i],"red"); 
            Update(bar[i+1],bar_size[i+1],"red"); 

            bar_size[i+1]=bar_size[i];

            Update(bar[i],bar_size[i],"red"); 
            Update(bar[i+1],bar_size[i+1],"red"); 
    
            Update(bar[i],bar_size[i],"blue"); 
            if(i==(j-1))
            {
                Update(bar[i+1],bar_size[i+1],"yellow"); 
            }
            else
            {
                Update(bar[i+1],bar_size[i+1],"blue"); 
            }
            i-=1;
        }
        bar_size[i+1]=key;

        for(var t=0;t<j;t++)
        {
            Update(bar[t],bar_size[t],"green"); 
        }
    }
    Update(bar[j-1],bar_size[j-1],"green"); 

}
