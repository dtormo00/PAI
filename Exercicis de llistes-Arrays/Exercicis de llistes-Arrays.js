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


// Exercici 21.7
for (let i = 0; i < taula.length; i++) {
  console.log(taula[i]);
}

// Exercici 21.8
let suma = 0;
for (let i = 0; i < taula.length; i++) {
  suma = suma + taula[i];
}
console.log("La suma és " + suma);

// Exercici 21.9
let novaTaula = [];
for (let i = 0; i < taula.length; i++) {
  novaTaula.push(taula[i] + 25);
}
console.log(novaTaula);

// Exercici 21.10
suma = 0;
for (let i = 0; i < taula.length; i++) {
  suma = suma + taula[i];
}
let mitjana = suma / taula.length;
console.log("La mitjana és " + mitjana);

// Exercici 21.11
let mesGran = taula[0];
let mesPetit = taula[0];
for (let i = 0; i < taula.length; i++) {
  if (taula[i] > mesGran) {
    mesGran = taula[i];
  }
  if (taula[i] < mesPetit) {
    mesPetit = taula[i];
  }
}
console.log("El més gran és " + mesGran);
console.log("El més petit és " + mesPetit);

// Exercici 21.12
let parells = [];
for (let i = 0; i < taula.length; i++) {
  if (taula[i] % 2 == 0) {
    parells.push(taula[i]);
  }
}
console.log(parells);

// Exercici 21.13
let valor = Number(prompt("Introdueix un valor"));
let vegades = 0;
for (let i = 0; i < taula.length; i++) {
  if (taula[i] == valor) {
    vegades++;
  }
}
console.log("El valor " + valor + " apareix " + vegades + " vegades");

// Exercici 21.14
let taulaA = [1, 2, 3];
let taulaB = [2, 3, 4];
if (taulaA.length == taulaB.length) {
  let sumaTaules = [];
  for (let i = 0; i < taulaA.length; i++) {
    sumaTaules.push(taulaA[i] + taulaB[i]);
  }
  console.log(sumaTaules);
} else {
  console.log("Les taules no tenen el mateix número d'elements");
}

// Exercici 21.15
let numeros = [1, 2, 3, 4, 5];
let girada = [];
for (let i = numeros.length - 1; i >= 0; i--) {
  girada.push(numeros[i]);
}
console.log(girada);

// Exercici 21.16
taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
valor = Number(prompt("Introdueix un número"));
let comptador = 0;
let trobat = false;
while (comptador < taula.length && trobat == false) {
  if (taula[comptador] == valor) {
    trobat = true;
  }
  comptador++;
}
if (trobat == true) {
  console.log("El número es troba a la taula");
} else {
  console.log("El número no es troba a la taula");
}

// Exercici 21.17
valor = Number(prompt("Introdueix un número"));
comptador = 0;
let hiHaMesGran = false;
while (comptador < taula.length && hiHaMesGran == false) {
  if (taula[comptador] > valor) {
    hiHaMesGran = true;
  }
  comptador++;
}
if (hiHaMesGran == true) {
  console.log("Sí que hi ha algun valor més gran a la taula");
} else {
  console.log("No hi ha cap valor més gran a la taula");
}

// Exercici 21.18
let repetit = false;
for (let i = 1; i < taula.length; i++) {
  if (taula[i] == taula[0]) {
    repetit = true;
  }
}
if (repetit == true) {
  console.log("Sí");
} else {
  console.log("No");
}


// Exercici 21.19
taulaA = [1, 2, 3];
taulaB = [4, 5, 6];
let unio = [];
for (let i = 0; i < taulaA.length; i++) {
  unio.push(taulaA[i]);
  unio.push(taulaB[i]);
}
console.log(unio);

// Exercici 21.20
valor = 78;
let senseValor = [];
for (let i = 0; i < taula.length; i++) {
  if (taula[i] != valor) {
    senseValor.push(taula[i]);
  }
}
console.log(senseValor);

// Exercici 21.21
numeros = [1, 2, 3, 5, 6, 7, 8, 9, 0];
let posicio = 4;
let tros = [];
for (let i = posicio; i < numeros.length; i++) {
  tros.push(numeros[i]);
}
console.log(tros);

// Exercici 21.22
trobat = false;
for (let i = 0; i < taula.length; i++) {
  for (let j = i + 1; j < taula.length; j++) {
    if (taula[i] == taula[j] && trobat == false) {
      console.log("El primer número repetit és " + taula[i]);
      trobat = true;
    }
  }
}

// Exercici 21.23
function Auto(marca, modelo, potencia, antiguedad, precio) {
  this.marca = marca;
  this.modelo = modelo;
  this.potencia = potencia;
  this.antiguedad = antiguedad;
  this.precio = precio;
}
let miAuto = new Auto("Seat", "Ibiza", 90, 2010, 5000);
let otroAuto = new Auto("Opel", "Astra", 92, 1995, 500);

if (miAuto.antiguedad < otroAuto.antiguedad) {
  console.log("El més antic és el " + miAuto.marca + " " + miAuto.modelo);
} else {
  console.log("El més antic és el " + otroAuto.marca + " " + otroAuto.modelo);
}