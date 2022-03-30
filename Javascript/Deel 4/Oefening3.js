///Geef paragraaf met id="red" de textkleur rood
document.getElementById("red").style.color = "#8B0000";

///Verwijder de paragraaf met id="weg"
const element = document.getElementById("weg");
element.remove();

///Voeg een nieuwe titel toe in header
//creeer nieuwe titel
let nieuweHoofding = document.createElement("h1");
//creer de textnode dat in de titel moet komen
let tekstHoofding = document.createTextNode("Welkom PandiX");
//voeg textnode toe aan titel element;
nieuweHoofding.appendChild(tekstHoofding);
//voeg de titel toe in de header
document.getElementById("header").appendChild(nieuweHoofding);

//voeg een aside toe in de main
let nieuweAside = document.createElement("aside")
let tekstAside = document.createTextNode("Elfde-Liniestraat 24, 3500 Hasselt")
nieuweAside.appendChild(tekstAside);
document.getElementById("main").appendChild(nieuweAside);
