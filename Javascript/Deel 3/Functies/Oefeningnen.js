// Oefening 1
// function vermenigvuldiging(){
//     let getal;
//     do {
//         getal = parseInt(prompt("Geef een getal in"));
//         if (typeof getal !== "number" || isNaN(getal)){
//             alert("dit is geen getal")
//         }
//     }while (typeof getal !== "number" || isNaN(getal));
//
//     return getal * getal;
// }
//
// document.getElementById("uitkomst").innerHTML ="De uikomst is " + vermenigvuldiging();

// Oefening 2
// function verschil(){
//     let getal = 100;
//     let getalUser;
//
//     do {
//         getalUser = parseInt(prompt("Geef een getal in"));
//         if (typeof getalUser !== "number" || isNaN(getalUser)){
//             alert("dit is geen getal")
//         }
//     }while (typeof getalUser !== "number" || isNaN(getalUser));
//
//     return getal - getalUser;
// }
//
// console.log(verschil());

//Oefening 3
// function isVijftig(){
//     let getal = 50;
//     let getalUser1;
//     let getalUser2;
//     let uitkomst;
//
//     let zin1 = "hoera 50";
//     let zin2 = "sorry, dit waren niet de juiste getallen"
//
//     do {
//         getalUser1 = parseInt(prompt("Geef een getal in"));
//         if (typeof getalUser1 !== "number" || isNaN(getalUser1)){
//             alert("dit is geen getal")
//         }
//     }while (typeof getalUser1 !== "number" || isNaN(getalUser1));
//
//     do {
//         getalUser2 = parseInt(prompt("Geef een getal in"));
//         if (typeof getalUser2 !== "number" || isNaN(getalUser2)){
//             alert("dit is geen getal")
//         }
//     }while (typeof getalUser2 !== "number" || isNaN(getalUser2));
//
//     uitkomst = getalUser1 + getalUser2;
//
//     if (getalUser1 === getal || getalUser2 === getal || uitkomst === getal){
//         return zin1
//     }
//     else {
//         return zin2
//     }
// }
// document.getElementById("uitkomst").innerHTML = isVijftig();

// Oefening 4
// function startMetHallo(){
//     let hallo = "Hallo".toUpperCase();
//     let zinUser1 = prompt("geef een random zin in");
//     let eersteLetter = zinUser1.charAt(0).toLowerCase();
//     let newString;
//     let eersteWoord = zinUser1.split(" ")[0].toUpperCase();
//
//     if (eersteWoord !== hallo){
//         newString = zinUser1.replace(zinUser1.charAt(0), eersteLetter);
//         return hallo + " " + newString;
//     }
//     else{
//         return zinUser1;
//     }
// }
//
// console.log(startMetHallo());

//Oefening 5
// function zinSpiltsen(){
//     let zinUser = prompt("Geef een random zin in");
//     let getalRandom;
//     let zinUserKarakters = zinUser.length;
//
//     do {
//         getalRandom = parseInt(prompt("Geef een getal in"));
//         if (typeof getalRandom !== "number" || isNaN(getalRandom)){
//             alert("dit is geen getal");
//         }
//         else if(getalRandom > zinUserKarakters){
//             alert("Dit getal is te groot");
//         }
//     }while (typeof getalRandom !== "number" || isNaN(getalRandom) || getalRandom > zinUserKarakters);
//
//     let zin1 = zinUser.substring(0, getalRandom);
//     let zin2 = zinUser.substring(getalRandom);
//
//     let nieuweZin = zin1 + " + " + zin2;
//
//     alert(nieuweZin);
// }
// zinSpiltsen()

// Oefening 6
