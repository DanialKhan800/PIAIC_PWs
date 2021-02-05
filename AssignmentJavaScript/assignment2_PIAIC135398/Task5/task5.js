var secNum = 6;
var num=Number(prompt("Enter your guess"));
if (num==secNum)
{
    document.write("<h1>" +"BINGO! Correct answer" + "</h1>");
}
else if((num+1) ==secNum)
{
    document.write("<h1>" +"Close enough to the Correct answer" + "</h1>");
}
else
{
    document.write("<h1>" +"Guess again!" + "</h1>");
}