var cities= ["Peshawar" ,"Quetta" ,"Islamabad", "Lahore", "Sialkot"];
var selectedCities = cities.slice(2,4);
document.write("<h1>" +"Cities List:" + "</h1>");
for (var i =0 ; i<cities.length; i++)
{
    document.write("<h2>" +cities[i] + "</h2>");
}
document.write("<h1> "+"Selected Cities" +"</h1>");
for (var i =0 ; i<selectedCities.length; i++)
{
    document.write("<h2>" +selectedCities[i] + "</h2>");
}