function selection_sort()
{
    change_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        Update(bar[i],bar_size[i],"red");//Color update

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            Update(bar[j],bar_size[j],"yellow");//Color update

            if(bar_size[j]<bar_size[index_min])
            {
                if(index_min!=i)
                {
                    Update(bar[index_min],bar_size[index_min],"blue");//Color update
                }
                index_min=j;
                Update(bar[index_min],bar_size[index_min],"red");//Color update
            }
            else
            {
                Update(bar[j],bar_size[j],"blue");//Color update
            }
        }
        
        if(index_min!=i)
        {
            var temp=bar_size[index_min];
            bar_size[index_min]=bar_size[i];
            bar_size[i]=temp;

            Update(bar[index_min],bar_size[index_min],"red");//Height update
            Update(bar[i],bar_size[i],"red");//Height update
            Update(bar[index_min],bar_size[index_min],"blue");//Color update
        }
        Update(bar[i],bar_size[i],"green");//Color update
    }
    Update(bar[i],bar_size[i],"green");//Color update

}