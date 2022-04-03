let Msort= document.getElementById("MergeSort");
Msort.addEventListener("click", Merge);
Msort.addEventListener("click", logOpacity);

function Merge()
{
    showComplexity("O(n × log n)","O(n × log n)","O(n × log n)");
    change_delay=0;

    merge_partition(0,array_size-1);

}

function merge_sort(start,mid,end)
{
    var p=start,q=mid+1;

    var Arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=bar_size[q++];
            Update(bar[q-1],bar_size[q-1],"red"); 
        }
        else if(q>end)
        {
            Arr[k++]=bar_size[p++];
            Update(bar[p-1],bar_size[p-1],"red"); 
        }
        else if(bar_size[p]<bar_size[q])
        {
            Arr[k++]=bar_size[p++];
            Update(bar[p-1],bar_size[p-1],"red"); 
        }
        else
        {
            Arr[k++]=bar_size[q++];
            Update(bar[q-1],bar_size[q-1],"red"); 
        }
    }

    for(var t=0;t<k;t++)
    {
        bar_size[start++]=Arr[t];
        Update(bar[start-1],bar_size[start-1],"green"); 
    }
    
}

function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        Update(bar[mid],bar_size[mid],"yellow"); 

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
        
    }
   

}
