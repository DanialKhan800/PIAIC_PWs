var names= [];
var marks = [];
names.push(prompt("Enter Student 1 name"));
marks.push(prompt("Enter Student 1 marks"));

names.push(prompt("Enter Student 2 name"));
marks.push(prompt("Enter Student 2 marks"));

names.push(prompt("Enter Student 3 name"));
marks.push(prompt("Enter Student 3 marks"));

for (var i=0 ; i<names.length ; i++)
{
    document.write("<h2>" +"Score of " + names[i]  + " is " +marks[i]+". Percentage is: " +marks[i]/500*100 + "%"+ "</h2>")
}
