var time = prompt("Enter time is 24Hr format");
if(time >= 0000 && time <1200)
document.write("<h1>"+"Good Morning"+"</h1>");
else if (time >=1200 && time <1700)
document.write("<h1>"+"Good Afternoon"+"</h1>");
else if (time >=1700 && time <2100)
document.write("<h1>"+"Good Evening"+"</h1>");
else if (time >=2100 && time <2359)
document.write("<h1>"+"Good Night"+"</h1>");
else
alert("Incorrect time format");