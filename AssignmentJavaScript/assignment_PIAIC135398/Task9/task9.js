let arr= [24 , 53 , 78, 91,12,22212,33];
let max = arr[0];
for (let i=0; i<arr.length; i++)
{
    if (arr[i]>max)
    max=arr[i];
}

document.write("<h2>" + "Max Number is:" + max +"</h2>");