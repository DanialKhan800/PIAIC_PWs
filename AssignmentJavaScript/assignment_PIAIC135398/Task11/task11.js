let food = ["cake" , "Apple pie", "cookie","chips","patties"];
let input = prompt("Welcome to ABC Bakery. What do you want to order Sir/madam");
let found = false;
let index =0;
for (let i=0 ; i< food.length ; i++)
{
    if (food[i].toLowerCase() === input.toLowerCase())
    {
        found=true;
        index=i;
        //document.write("<h2>" +input + " is available at index "+ i +" in our bakery"+ "</h2>");
    }
    else
    {//document.write("<h2>" + "We are sorry "+ input +" is not available in our bakery" + "</h2>");
    }
}
    


if (found==true)
{
    document.write("<h2>" +input + " is available at index "+ index +" in our bakery"+ "</h2>");

}
else
document.write("<h2>" + "We are sorry "+ input +" is not available in our bakery" + "</h2>");