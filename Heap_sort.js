let Hsort= document.getElementById("HeapSort");
Hsort.addEventListener("click", Heap);
Hsort.addEventListener("click", logOpacity);

function Heap()
{
    showComplexity("O(n × log n)","O(n × log n)","O(n × log n)");
    change_delay=0;

    heap_sort();
}

function swap(i,j)
{
    Update(bar[i],bar_size[i],"red"); 
    Update(bar[j],bar_size[j],"red"); 

    var temp=bar_size[i];
    bar_size[i]=bar_size[j];
    bar_size[j]=temp;

    Update(bar[i],bar_size[i],"red"); 
    Update(bar[j],bar_size[j],"red"); 

    Update(bar[i],bar_size[i],"blue"); 
    Update(bar[j],bar_size[j],"blue"); 
}

function max_heapify(n,i)
{
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && bar_size[l]>bar_size[largest])
    {
        if(largest!=i)
        {
            Update(bar[largest],bar_size[largest],"blue"); 
        }

        largest=l;

        Update(bar[largest],bar_size[largest],"red"); 
    }

    if(r<n && bar_size[r]>bar_size[largest])
    {
        if(largest!=i)
        {
            Update(bar[largest],bar_size[largest],"blue"); 
        }

        largest=r;

        Update(bar[largest],bar_size[largest],"red"); 
    }

    if(largest!=i)
    {
        swap(i,largest);

        max_heapify(n,largest);
    }
}

function heap_sort()
{
    for(var i=Math.floor(array_size/2)-1;i>=0;i--)
    {
        max_heapify(array_size,i);
    }

    for(var i=array_size-1;i>0;i--)
    {
        swap(0,i);
        Update(bar[i],bar_size[i],"green"); 
        Update(bar[i],bar_size[i],"yellow"); 

        max_heapify(i,0);

        Update(bar[i],bar_size[i],"blue"); 
        Update(bar[i],bar_size[i],"green"); 
    }
    Update(bar[i],bar_size[i],"green"); 

}
