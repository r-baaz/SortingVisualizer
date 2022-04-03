let Qsort= document.getElementById("QuickSort");
Qsort.addEventListener("click", quick_sort);
Qsort.addEventListener("click", logOpacity);

function quick_sort()
{
    showComplexity("O(n × log n)","O(n × log n)","O(n²)")
    change_delay=0;

    sort(0,array_size-1);
    
}

function quick_partition (start, end)
{
    var i = start + 1;
    var piv = bar_size[start] ;
    Update(bar[start],bar_size[start],"yellow"); 

        for(var j =start + 1; j <= end ; j++ )
        {
            if (bar_size[ j ] < piv)
            {
                Update(bar[j],bar_size[j],"yellow"); 

                Update(bar[i],bar_size[i],"red"); 
                Update(bar[j],bar_size[j],"red"); 

                var temp=bar_size[i];
                bar_size[i]=bar_size[j];
                bar_size[j]=temp;

                Update(bar[i],bar_size[i],"red"); 
                Update(bar[j],bar_size[j],"red"); 

                Update(bar[i],bar_size[i],"blue"); 
                Update(bar[j],bar_size[j],"blue"); 

                i += 1;
            }
    }
    Update(bar[start],bar_size[start],"red"); 
    Update(bar[i-1],bar_size[i-1],"red"); 
    
    var temp=bar_size[start];
    bar_size[start]=bar_size[i-1];
    bar_size[i-1]=temp;

    Update(bar[start],bar_size[start],"red"); 
    Update(bar[i-1],bar_size[i-1],"red"); 

    for(var t=start;t<=i;t++)
    {
        Update(bar[t],bar_size[t],"green"); 
    }
    return i-1;

}

function sort (start, end )
{
    if( start < end )
    {
        var piv_pos = quick_partition (start, end ) ;     
        sort (start, piv_pos -1);
        sort (piv_pos +1, end) ;
    }
    
 }
