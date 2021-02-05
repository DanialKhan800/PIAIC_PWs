let arr = [3, 'a','a','a',2,3,'a',3,'a',2,4,9,3];

document.write("<h2>"+arr + " "+ "</h2>")

for (let i=0 ; i<arr.length; i++)
{
      for (let j=1 ; j<arr.length ; j++)
      {
          if (arr[i]==arr[j])
          arr.shift();
      }
}
document.write("<h2>"+arr + " "+ "</h2>")

