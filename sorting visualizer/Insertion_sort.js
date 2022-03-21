function Insertion()
{
    change_delay=0;

    for(var j=0;j<array_size;j++)
    {
        Update(bar[j],bar_size[j],"yellow");//Color update

        var key= bar_size[j];
        var i=j-1;
        while(i>=0 && bar_size[i]>key)
        {
            Update(bar[i],bar_size[i],"red");//Color update
            Update(bar[i+1],bar_size[i+1],"red");//Color update

            bar_size[i+1]=bar_size[i];

            Update(bar[i],bar_size[i],"red");//Height update
            Update(bar[i+1],bar_size[i+1],"red");//Height update
    
            Update(bar[i],bar_size[i],"blue");//Color update
            if(i==(j-1))
            {
                Update(bar[i+1],bar_size[i+1],"yellow");//Color update
            }
            else
            {
                Update(bar[i+1],bar_size[i+1],"blue");//Color update
            }
            i-=1;
        }
        bar_size[i+1]=key;

        for(var t=0;t<j;t++)
        {
            Update(bar[t],bar_size[t],"green");//Color update
        }
    }
    Update(bar[j-1],bar_size[j-1],"green");//Color update
}