///Maak array met objecten aan
let arrayBoeken = [
    {
        Titel: "The theory of everything",
        Auteur: "Stephen Hawking",
        Gelezen: "Ja"
    },
    {
        Titel: "12 rules for life",
        Auteur: "Jordan Peterson",
        Gelezen: "Nee"
    }
];

///Vul de ul met list items
let ul = document.getElementById("boekenlijst");

for (let i = 0; i < arrayBoeken.length; i++) {
    let boek = arrayBoeken[i];
    let li = document.createElement("li");
    li.innerHTML ="Titel: " + boek.Titel + " - " + "Auteur: " + boek.Auteur +  " - " + "Gelezen: " + boek.Gelezen;
    ul.appendChild(li);
}
