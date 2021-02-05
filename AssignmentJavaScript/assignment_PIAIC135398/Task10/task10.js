let arr = [20 ,53, 78, 4 ,91, 12];

for (let i=0 ; i<arr.length ; i++)
{
    for (let j =0 ; j<arr.length ; j++)
    {
        if (arr[j]<arr[i])
        {
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]= temp;

        }
    }
}

document.write("<h2>" +arr+ "</h2>")