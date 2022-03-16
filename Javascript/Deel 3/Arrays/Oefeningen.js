// Oefening 1
// let opleidingDigital = ["Elektronica-ICT", "Toegepaste Informatica", "Applicatie Ontwikkeling",
//                         "Software Ontwikkeling", "Artificiële Intelligentie", "Systemen en Netwerken beheer"];
//
// console.log(opleidingDigital.length);

// Oefening 2
// let opleidingDigital = ["Elektronica-ICT", "Toegepaste Informatica", "Applicatie Ontwikkeling",
//     "Software Ontwikkeling", "Artificiële Intelligentie", "Systemen en Netwerken beheer"];
//
// opleidingDigital[6] = "Multimedia- en Communicatietechnologie";
//
// console.log(opleidingDigital);
// console.log(opleidingDigital.length);

// Oefening 3
// let opleidingDigital = ["Elektronica-ICT", "Toegepaste Informatica", "Applicatie Ontwikkeling",
//     "Software Ontwikkeling", "Artificiële Intelligentie", "Systemen en Netwerken beheer"];
// opleidingDigital.push("Multimedia- en Communicatietechnologie");
//
// let zin = opleidingDigital.join("\r\n");
// document.getElementById("array").innerHTML = zin;
//
// console.log(zin);

// Oefening 4
// let hondenrassen = ["Pitbull", "Amerikaanse Stafford", "Engelse Stafford", "Pincher", "Dobberman", "Jack Russel", "Duitse Herder", "Mastino", "Deense Dog", "Bulldog"];
// let getal;
// let hond;
// //Check of user input een getal is en of het tussen 1 en 10 ligt
// do {
//     getal = parseInt(prompt("Geef een getal in tussen 1 en 10"));
//     if (typeof getal !== "number" || isNaN(getal) || getal < 1 || getal > 10){
//         alert("Sorry, katten niet toegelaten")
//     }
// }while (typeof getal !== "number" || isNaN(getal) || getal < 1 || getal > 10);
//
// switch (getal){
//     case 1:
//         hond = hondenrassen[0];
//         break;
//     case 2:
//         hond = hondenrassen[1];
//         break;
//     case 3:
//         hond = hondenrassen[2];
//         break;
//     case 4:
//         hond = hondenrassen[3];
//         break;
//     case 5:
//         hond = hondenrassen[4];
//         break;
//     case 6:
//         hond = hondenrassen[5];
//         break;
//     case 7:
//         hond = hondenrassen[6];
//         break;
//     case 8:
//         hond = hondenrassen[7];
//         break;
//     case 9:
//         hond = hondenrassen[8];
//         break;
//     case 10:
//         hond = hondenrassen[9];
//         break;
// }
// document.getElementById("array").innerHTML = hond;

// Oefening 5
// let hondenrassen = ["Pitbull", "Amerikaanse Stafford", "Engelse Stafford", "Pincher", "Dobberman", "Jack Russel", "Duitse Herder", "Mastino", "Deense Dog", "Bulldog"];
//
// hondenrassen.unshift("Terriër");
// hondenrassen.unshift("Mechelse Herder");
// hondenrassen.unshift("Cane Corso");
// hondenrassen.unshift("Labrador");
// hondenrassen.unshift("Golden Retriever");
//
// console.log(hondenrassen);

// Oefening 6
// let hondenrassen = ["Pitbull", "Amerikaanse Stafford", "Engelse Stafford", "Pincher", "Dobberman", "Jack Russel", "Duitse Herder", "Mastino", "Deense Dog", "Bulldog"];
//
// hondenrassen.unshift("Terriër");
// hondenrassen.unshift("Mechelse Herder");
// hondenrassen.unshift("Cane Corso");
// hondenrassen.unshift("Labrador");
// hondenrassen.unshift("Golden Retriever");
//
// //Element aan het einde verwijderen
// hondenrassen.pop();
// //Element aan het begin verwijderen
// hondenrassen.shift();
//
// console.log(hondenrassen);
