let Qsort= document.getElementById("QuickSort");
Qsort.addEventListener("click", quick_sort);

function quick_sort()
{
    showComplexity("O(n × log n)","O(n × log n)","O(n²)")
    change_delay=0;

    sort(0,array_size-1);

}

function quick_partition (start, end)
{
    var i = start + 1;
    var piv = bar_size[start] ;//make the first element as pivot element.
    Update(bar[start],bar_size[start],"yellow");//Color update

        for(var j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (bar_size[ j ] < piv)
            {
                Update(bar[j],bar_size[j],"yellow");//Color update

                Update(bar[i],bar_size[i],"red");//Color update
                Update(bar[j],bar_size[j],"red");//Color update

                var temp=bar_size[i];
                bar_size[i]=bar_size[j];
                bar_size[j]=temp;

                Update(bar[i],bar_size[i],"red");//Height update
                Update(bar[j],bar_size[j],"red");//Height update

                Update(bar[i],bar_size[i],"blue");//Height update
                Update(bar[j],bar_size[j],"blue");//Height update

                i += 1;
            }
    }
    Update(bar[start],bar_size[start],"red");//Color update
    Update(bar[i-1],bar_size[i-1],"red");//Color update
    
    var temp=bar_size[start];//put the pivot element in its proper place.
    bar_size[start]=bar_size[i-1];
    bar_size[i-1]=temp;

    Update(bar[start],bar_size[start],"red");//Height update
    Update(bar[i-1],bar_size[i-1],"red");//Height update

    for(var t=start;t<=i;t++)
    {
        Update(bar[t],bar_size[t],"green");//Color update
    }

    return i-1;//return the position of the pivot
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
