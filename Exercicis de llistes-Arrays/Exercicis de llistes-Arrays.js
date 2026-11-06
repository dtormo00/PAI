// Exercici 21.1
let taula = [];
taula[0] = "Hola";
taula[1] = "Adeu";
console.log(taula);

// Exercici 21.2
taula[2] = "Nom";
console.log(taula);
taula[1] = ", ";
console.log(taula);

// Exercici 21.3
taula = [23, 45, 98, 73];
console.log(taula[0] + taula[2]);
taula[6] = taula[0] + taula[1] + taula[2] + taula[3];
console.log(taula);
// A les posicions 4 i 5 no hi ha res (surten buides / undefined)
// perquè hem saltat directament a la posició 6

// Exercici 21.4
let num = Number(prompt("Introdueix un número"));
let resultats = [];
resultats[0] = num * 2;
resultats[1] = num * 3;
console.log(resultats);

// Exercici 21.5
let num1 = Number(prompt("Introdueix el primer número"));
let num2 = Number(prompt("Introdueix el segon número"));
resultats = [];
resultats[0] = num1 + num2;
resultats[1] = num1 - num2;
resultats[2] = num1 * num2;
resultats[3] = num1 / num2;
console.log(resultats);

// Exercici 21.6
taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
console.log(taula[0]);
console.log(taula[taula.length - 1]);