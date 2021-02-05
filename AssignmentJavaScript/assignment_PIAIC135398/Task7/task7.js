let a = [10, 20, 4, 40, 60, 70];
let b= [1, 2, 3, 4 ,5 ,6 ,7, 8, 9 ,10];
let found = false;
for (let i= 0 ; i <a.length ; i++)
{
    for (let j=0; j<b.length ;j++)
    {
       if (a[i]=== b[j])
        found=true;
    }
    if (found == false)
    {
        
        b.push(a[i]);
    }
    found=false;
}

document.write("<h2>" +b+ "</h2>");