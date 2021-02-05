var colors= ["red","blue","white"];
for (var i=0 ;i<colors.length  ;i++ )
{
    document.write("<h2>" +colors[i] +"</h2>");
}
colors.push(prompt("Enter color to add at end: "));
document.write("<h2>" +colors[colors.length-1] +"</h2>");

colors.unshift(prompt("Enter 1st color to add at : "));
colors.unshift(prompt("Enter 2nd color to add at : "));
document.write("<h2>" +colors[0] +"</h2>");
document.write("<h2>" +colors[1] +"</h2>");

colors.shift();
colors.pop();



