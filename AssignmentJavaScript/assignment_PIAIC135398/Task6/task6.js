let aCities = ['Karachi', 'Lahore', 'Islamabad','Faisalabad'];
let o = ["st","nd","rd","th"];

for (let i=0 ; i<aCities.length ; i++)
{
    document.write("<h2>" + (i+1) + o[i] + " choice is " + aCities[i]+ "</h2>");

}