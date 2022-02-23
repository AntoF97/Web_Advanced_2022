//Oefening 1
// let string1 = "Dit is de 1e zin"
// let string2 = "Dit is de 2e zin"
// let string3 = "Dit is de 3e zin"
//
// console.log(string1)
// console.log(string2)
// console.log(string3)
// document.getElementById("zin1").innerHTML = string1
// document.getElementById("zin2").innerHTML = string2
// document.getElementById("zin3").innerHTML = string3

//Oefening 2
// let string1 = "Dit is de 1e zin. "
// let string2 = "Dit is de 2e zin. "
// let string3 = "Dit is de 3e zin."
//
// document.getElementById("zin1").innerHTML = string1
// document.getElementById("zin2").innerHTML = string2
// document.getElementById("zin3").innerHTML = string3
// alert(string1 + string2 + string3)

// Oefening 3
// let string = "ik wil een koekje";
//
// console.log(string.charAt(0));
// console.log(string.charAt(2));
// console.log(string.lastIndexOf("k"));
// console.log(string.lastIndexOf("e"));
// console.log(string.length);

// Oefening 4
// let string = "ik wil een lasagne van pxl-catering";
// let result = string.toUpperCase();
// document.getElementById("zin1").innerHTML = result;
// console.log(result);

// Oefening 5
// let stringLength = prompt("Geef een random woord in").length
// let result = stringLength.toString()
// console.log(stringLength);
// alert("het woord bevat " + result + "karakters");

// Oefening 6
// let string = prompt("geef een random zin in")
// let result = string.indexOf(" ") + 1;
// alert("De eerste spatie van je zin staat op positie " + result);

//Oefening 7
// let getal1;
// do {
//     getal1 = parseInt(prompt("Geef een getal in", "0"));
// }while (typeof getal1 !== "number" || isNaN(getal1));
//
// let getal2;
// do {
//     getal2 = parseInt(prompt("Geef een tweede getal in", "0"));
// }while (typeof getal2 !== "number" || isNaN(getal2));
//
// let result = getal1 * getal2;
// document.getElementById("zin1").innerHTML ="De uitkomst van de vermenigvuldiging is " + result.toString();

//Oefening 8
// let getal1;
// do {
//     getal1 = parseInt(prompt("Geef een getal in", "0"));
// }while (typeof getal1 !== "number" || isNaN(getal1));
//
// let getal2;
// do {
//     getal2 = parseInt(prompt("Geef een tweede getal in", "0"));
// }while (typeof getal2 !== "number" || isNaN(getal2));
//
// let result = getal1 * getal2;
// document.getElementById("zin1").innerHTML ="De uitkomst van de vermenigvuldiging is " + result.toString();
//
// let result2 = getal1 + getal2;
// document.getElementById("zin2").innerHTML ="De uitkomst van de optelling is " + result2.toString();
//
// let result3 = getal1 - getal2;
// document.getElementById("zin3").innerHTML ="De uitkomst van de aftrekking is " + result3.toString();
//
// let result4 = getal1 / getal2;
// document.getElementById("zin4").innerHTML ="De uitkomst van de deling is " + result4.toString();

// Oefening 10...
let getal;
do{
    getal= parseInt(prompt("Hoe oud ben je", "0"));
}while (typeof getal !== "number" || isNaN(getal));

if (getal < 18){
    alert("Helaas, probeer de volgende editie opnieuw")
}
else{
    alert("Klaar om te feesten?")
}
