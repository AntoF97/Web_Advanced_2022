// Oefening 1 + 2
// let priveGeg = {
//     voornaam: "Antonio",
//     achternaam: "Ferraro",
//     leeftijd: 24,
//     straat: "Gouderegenstraat",
//     huisnummer: 42,
//     postcode: 3630,
//     gemeente: "Maasmechelen",
//     volledigeAdres: function(){
//         return this.straat + " " + this.huisnummer + ", " + this.postcode + " " + this.gemeente;
//     }
// };
//
// document.getElementById("rij1").innerHTML = priveGeg.voornaam;
// document.getElementById("rij2").innerHTML = priveGeg.achternaam;
// document.getElementById("rij3").innerHTML = priveGeg.leeftijd;
// document.getElementById("rij4").innerHTML = priveGeg.straat;
// document.getElementById("rij5").innerHTML = priveGeg.huisnummer;
// document.getElementById("rij6").innerHTML = priveGeg.postcode;
// document.getElementById("rij7").innerHTML = priveGeg.gemeente;
// document.getElementById("zin").innerHTML = "Mijn adres is " + priveGeg.volledigeAdres();
//
// console.log(priveGeg);

// Oefening 3
// let priveGeg = {
//     voornaam: "Antonio",
//     achternaam: "Ferraro",
//     leeftijd: 24,
//     straat: "Gouderegenstraat",
//     huisnummer: 42,
//     postcode: 3630,
//     gemeente: "Maasmechelen",
//     // volledigeAdres: function(){
//     //     return this.straat + " " + this.huisnummer + ", " + this.postcode + " " + this.gemeente;
//     // }
// };
//
// priveGeg.oogkleur = "Bruin";
// priveGeg.lengte = 175;
// priveGeg.gewicht = 60;
// priveGeg.huidskleur = "blank";
//
// for(let property in priveGeg){
//     let p = document.createElement("p");
//     p.innerHTML =property + ": " + priveGeg[property];
//     document.body.appendChild(p);
// }

// Oefening 4
let priveGeg = {
    voornaam: "Antonio",
    achternaam: "Ferraro",
    leeftijd: 24,
    straat: "Gouderegenstraat",
    huisnummer: 42,
    postcode: 3630,
    gemeente: "Maasmechelen",
    // volledigeAdres: function(){
    //     return this.straat + " " + this.huisnummer + ", " + this.postcode + " " + this.gemeente;
    // }
};

priveGeg.oogkleur = "Bruin";
priveGeg.lengte = 175;
priveGeg.gewicht = 60;
priveGeg.huidskleur = "blank";

delete priveGeg.lengte;
delete priveGeg.gewicht;

let array = Object.entries(priveGeg)
console.log(array)





