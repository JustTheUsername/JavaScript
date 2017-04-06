/*console.log("Salut à toi");
console.log(4+5);
console.log("4+5");
console.log("4"+"5");
console.log(6-3);



var prenom = prompt("Entrez votre prénom :");
var nom = prompt("Entrez votre nom :")
alert("Bonjour, " + prenom +" "+nom);

var nb = Number(prompt("Entrez un nombre : ")); // nb est de type nombre
console.log(nb);

var a = 2;
a = a - 1;
a++;
var b = 8;
b += 2;
var c = a + b * b;
var d = a * b + b;
var e = a * (b + b);
var f = a * b / a;
var g = b / a * a;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);

var prixHT = Number(prompt("Entrez un prix hors taxe :"));
var prixTTC = prixHT*1.196;

console.log(prixTTC);  

var tempCelsius = Number(prompt("Entrez une température en celsius : "));
var tempFahrenheit = tempCelsius*9/5+32;

console.log(tempCelsius + " °C = "+tempFahrenheit+" °F");



var nombre1 = 5;
var nombre2 =3;
var temp;

temp=nombre1;
nombre1=nombre2;
nombre2=temp;

console.log(nombre1);
console.log(nombre2);

var jour = prompt("Quel jours sommmes nous ? ");

switch(jour){
case "lundi" : jour = "mardi"; break;
case "mardi" : jour = "mercredi";break;
case "mercredi" : jour = "jeudi";break;
case "jeudi" : jour = "vendredi";break;
case "vendredi" : jour ="samedi";break;
case "samedi" : jour ="dimanche";break;
case "dimanche" : jour ="lundi";break; 
default : 
break;
}

console.log("Demain nous serrons "+jour);

var nombre1 = Number(prompt("Entrez un nombre :"));
var nombre2 =  Number(prompt("Entrez un nombre :"));

    if((nombre1-nombre2)<0) {console.log(nombre1 +" > "+nombre2);}
    if((nombre1-nombre2)>0) {console.log(nombre1+" < "+nombre2);}
    if((nombre1-nombre2)==0) {console.log(nombre1+ " = "+nombre2);}
*/

var nombreMystere = Math.round(Math.random() * (100 - 1) + 1);
var nombreDeChances = 10;

while(nombreDeChances>0){

var essai = Number(prompt("Entrez un nombre entre 0 et 100 :"))

    if (essai>nombreMystere) {

        console.log("C'est moins !");

    }

    else if (essai<nombreMystere){

        console.log("C'est plus !")
    }

    else if (essai==nombreMystere){

        console.log("félicitation ! le nombre à deviner était "+ nombreMystere);

        nombreDeChances=-1;
    }

    nombreDeChances--;
}
if (nombreDeChances==0){

    console.log("Perdu ! le nombre à deviner était : "+nombreMystere);
}
