// Oefening 1
// let date2 = parseInt(prompt("Wat is je geboortejaar?"));
// let date = new Date().getFullYear();
//
// resultaat = date - date2;
//
// if (resultaat > 18){
//     alert("Je bent" + resultaat + "jaar oud en oud genoeg om de website te betreden");
// }
// else {
//     alert("je bent niet oud genoeg om de website te betreden");
// }

// Oefening 2
// let antwoord = prompt("Sport je graag?").toUpperCase();
//
// if (antwoord === "JA"){
//     alert("Just do it!");
// }
// else if (antwoord === "NEE"){
//     alert("Jammer, blijf dan maar liggen");
// }
// else{
//     alert("Dat was geen duidelijk antwoord");
// }

// Oefening 3
// let date = new Date();
// let resultaat;
// if (date.getHours() >= 12){
//    resultaat = "voormiddag"
// }
// else{
//     resultaat = "namiddag"
// }
// document.getElementById("welkomszin").innerHTML=("het is " + date.getHours() + " uur in de " + resultaat);

// Oefening 4
// let date = new Date();
// let resultaat;
// if (date.getHours() >= 7 || date.getHours() < 12){
//    resultaat = "Goedemorgen"
// }
// else if (date.getHours() >= 12 || date.getHours() < 18){
//     resultaat = "Goede middag"
// }
// else {
//     resultaat = "Goede avond"
// }
// document.getElementById("welkomszin").innerHTML=(resultaat);

// Oefening 5
// let getal = 50;
// let userGetal;
// do {
//     userGetal = parseInt(prompt("Geef een getal in"));
// }while (typeof userGetal !== "number" || isNaN(userGetal));
//
// if (userGetal < getal) {
//     alert("Te laag");
// }
// else if (userGetal > getal) {
//     alert("Te hoog");
// }
// else {
//     alert("Goed gegokt");
// }

// Oefening 6
// let antwoord;
// let zin;
// switch (antwoord = prompt("Sport je graag?").toUpperCase()){
//     case "JA":
//         zin = "Just do it";
//         break;
//     default:
//         zin = ("Dat was niet duidelijk, antwoord je vanuit je luie zetel?")
// }
// alert(zin);

// Oefening 7
// let date = new Date().getMonth() + 1;
// document.getElementById("welkomszin").innerHTML = "we bevinden on in de " + date + "e maand van het jaar";

// Oefening 8
// let date = new Date().getHours();
// let resultaat;
// let dag;
//
// if (date >= 7 || date < 12){
//    resultaat = "Goedemorgen"
// }
// else if (date >= 12 || date < 18){
//     resultaat = "Goede middag"
// }
// else {
//     resultaat = "Goede avond"
// }
//
// switch (new Date().getDay()) {
//     case 0:
//         dag = "zondag";
//         break;
//     case 1:
//         dag = "maandag";
//         break;
//     case 2:
//         dag = "dinsdag";
//         break;
//     case 3:
//         dag = "woensdag";
//         break;
//     case 4:
//         dag = "donderdag";
//         break;
//     case 5:
//         dag = "vrijdag";
//         break;
//     case 6:
//         dag = "zaterdag";
// }
//
// document.getElementById("welkomszin").innerHTML = resultaat + " het is vandaag " + dag;

// Oefening 9
let getal
let userGetal = parseInt(prompt("Geef een getal in van 1 tot 10"));
let veelvoud;

if (userGetal < 0 || userGetal > 10){
    console.log("Niet mogelijk")
}
else {
    for (getal = 0; getal <= 10; getal++){
        veelvoud = getal * userGetal;
        console.log(veelvoud);
    }
}

// Oefening 10
// function driehoek(aantalLijnen = 7){
//     let lijn = "";
//     for (let i = 1; i <= aantalLijnen; i++){
//         for (let j = 1; j <= i; j++){
//             lijn += "*";
//         }
//         lijn+="\n";
//     }
//     return lijn + "\n";
// }
// console.log(driehoek());

// Oefening 11
// function driehoek(aantalLijnen = parseInt(prompt("Uit hoeveel lijnen moet de driehoek bestaan?"))){
//     let lijn = "";
//     for (let i = 1; i <= aantalLijnen; i++){
//         for (let j = 1; j <= i; j++){
//             lijn += "*";
//         }
//         lijn+="\n";
//     }
//     return lijn + "\n";
// }
// console.log(driehoek());

// Oefening 12
// function driehoek(aantalLijnen = 7){
//     let lijn = "";
//     for (let i = 1; i <= aantalLijnen; i++){
//         //Spaties printen
//         for (let j = 0; j < aantalLijnen - i; j++){
//             lijn += " ";
//         }
//         //Sterren printen
//         for (let k = 0; k < i; k++){
//             lijn += "*";
//         }
//         lijn+="\n";
//     }
//     return lijn + "\n";
// }
// console.log(driehoek());

// Oefening 13
// function driehoek(aantalLijnen = 7){
//     let lijn = "";
//     for (let i = 1; i <= aantalLijnen; i++){
//         //Spaties printen
//         for (let j = 0; j < aantalLijnen - i; j++){
//             lijn += " ";
//         }
//         //Sterren printen
//         for (let k = 0; k < 2 * i - 1; k++){
//             lijn += "*";
//         }
//         lijn+="\n";
//     }
//     return lijn + "\n";
// }
// console.log(driehoek());
