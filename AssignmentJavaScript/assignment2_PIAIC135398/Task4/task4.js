var subject1= prompt("Enter Subject 1 marks:");
var subject2= prompt("Enter Subject 2 marks:");
var subject3= prompt("Enter Subject 3 marks:");

var total= ( parseFloat(subject1) + parseFloat(subject2) + parseFloat(subject3));
var average = total/300 *100;
document.write("<h2>" + "Total marks = 300" + "</h2>" );
document.write("<h2>" + "Obtained marks:"+ total + "</h2>" );
document.write("<h2>" + "Percentage: " + average +"%"+ "</h2>"  );

if (average>= 80)
document.write("<h2>" + "Grade = A-one" + "</h2>"  + "<h2>" + "Remarks= Excellent"+ "</h2>");
else if (average>=70 && average<80)
document.write("<h2>" + "Grade = A" + "</h2>"  + "<h2>" + "Remarks= Good!"+ "</h2>");
else if (average>=60 && average<70)
document.write("<h2>" + "Grade = B" + "</h2>"  + "<h2>" + "Remarks= You need to improve"+ "</h2>");
else if (average<60)
document.write("<h2>" + "Grade = Fail" + "</h2>"  + "<h2>" + "Remarks= Sorry"+ "</h2>");


