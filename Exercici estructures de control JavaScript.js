// Exercici 13.1
let num = Number(prompt("Introdueix un número"));
if (num < 0) {
  console.log("El número llegit és negatiu");
}

// Exercici 13.2
num = Number(prompt("Introdueix un número"));
if (num % 2 == 0) {
  console.log("El número llegit és parell");
}

// Exercici 13.3
num = Number(prompt("Introdueix un número"));
if (num % 2 == 0) {
  console.log("El número llegit és parell");
}
if (num % 2 != 0) {
  console.log("El número llegit és senar");
}

// Exercici 13.4
let num1 = Number(prompt("Introdueix el primer número"));
let num2 = Number(prompt("Introdueix el segon número"));
if (num1 > num2) {
  console.log("El més gran és " + num1);
}
if (num2 > num1) {
  console.log("El més gran és " + num2);
}

// Exercici 13.5
num1 = Number(prompt("Introdueix el primer número"));
num2 = Number(prompt("Introdueix el segon número"));
let num3 = Number(prompt("Introdueix el tercer número"));
if (num1 >= num2 && num1 >= num3) {
  console.log("El més gran és " + num1);
}
if (num2 > num1 && num2 >= num3) {
  console.log("El més gran és " + num2);
}
if (num3 > num1 && num3 > num2) {
  console.log("El més gran és " + num3);
}

// Exercici 13.6
let mes = Number(prompt("Introdueix un número de mes (1-12)"));
if (mes == 1) {
  console.log("Gener");
}
if (mes == 2) {
  console.log("Febrer");
}
if (mes == 3) {
  console.log("Març");
}
if (mes == 4) {
  console.log("Abril");
}
if (mes == 5) {
  console.log("Maig");
}
if (mes == 6) {
  console.log("Juny");
}
if (mes == 7) {
  console.log("Juliol");
}
if (mes == 8) {
  console.log("Agost");
}
if (mes == 9) {
  console.log("Setembre");
}
if (mes == 10) {
  console.log("Octubre");
}
if (mes == 11) {
  console.log("Novembre");
}
if (mes == 12) {
  console.log("Desembre");
}

// Exercici 14.1
num = Number(prompt("Introdueix un número"));
if (num < 0) {
  console.log("El número llegit és negatiu");
} else {
  console.log("El número llegit és positiu");
}

// Exercici 14.2
num = Number(prompt("Introdueix un número"));
if (num % 2 == 0) {
  console.log("El número llegit és parell");
} else {
  console.log("El número llegit és senar");
}

// Exercici 14.3
num1 = Number(prompt("Introdueix el primer número"));
num2 = Number(prompt("Introdueix el segon número"));
if (num1 > num2) {
  console.log("El més gran és " + num1);
} else {
  console.log("El més gran és " + num2);
}

// Exercici 14.4
num1 = Number(prompt("Introdueix el primer número"));
num2 = Number(prompt("Introdueix el segon número"));
num3 = Number(prompt("Introdueix el tercer número"));
if (num1 >= num2 && num1 >= num3) {
  console.log("El més gran és " + num1);
} else {
  if (num2 >= num3) {
    console.log("El més gran és " + num2);
  } else {
    console.log("El més gran és " + num3);
  }
}

// Exercici 14.5
num1 = Number(prompt("Introdueix el primer número"));
num2 = Number(prompt("Introdueix el segon número"));
num3 = Number(prompt("Introdueix el tercer número"));
if (num1 <= num2 && num2 <= num3) {
  console.log(num1, num2, num3);
} else if (num1 <= num3 && num3 <= num2) {
  console.log(num1, num3, num2);
} else if (num2 <= num1 && num1 <= num3) {
  console.log(num2, num1, num3);
} else if (num2 <= num3 && num3 <= num1) {
  console.log(num2, num3, num1);
} else if (num3 <= num1 && num1 <= num2) {
  console.log(num3, num1, num2);
} else {
  console.log(num3, num2, num1);
}

// Exercici 14.6
let carnet = prompt("Tens carnet de conduir? (s/n)");
let alcohol = Number(prompt("Quin valor ha donat la prova d'alcoholèmia?"));
if (carnet == "s" && alcohol < 0.25) {
  console.log("Pot conduir");
} else {
  console.log("No pot conduir");
}

// Exercici 14.7 (al PDF posa 13.7)
num1 = Number(prompt("Introdueix el primer número"));
num2 = Number(prompt("Introdueix el segon número"));
if (num1 > num2) {
  console.log(num1 - num2);
} else {
  console.log(num2 - num1);
}

// Exercici 14.8
let quantitat = Number(prompt("Quina quantitat has de pagar?"));
if (quantitat >= 30) {
  console.log("El cost total és de " + quantitat + "€ perquè el transport és gratis");
} else {
  console.log("El cost total és de " + (quantitat + 4.95) + "€ (amb 4.95€ d'enviament)");
}

// Exercici 14.9
let tipus = prompt("Vols conus (c) o terrina (t)?");
let sabor = prompt("Quin sabor vols? (vainilla, xocolata, turró, menta, oreo, crema, gerds, ametlles)");
let preu = 0;
let error = false;
if (tipus == "c") {
  preu = 3.45;
} else if (tipus == "t") {
  preu = 3.95;
} else {
  error = true;
}
if (sabor == "vainilla" || sabor == "xocolata") {
  preu = preu + 0;
} else if (sabor == "turró" || sabor == "menta" || sabor == "oreo") {
  preu = preu + 0.5;
} else if (sabor == "crema" || sabor == "gerds" || sabor == "ametlles") {
  preu = preu + 1;
} else {
  error = true;
}
if (error == true) {
  console.log("Error dades mal introduïdes");
} else {
  console.log("El preu final és " + preu + "€");
}

// Exercici 15.1
mes = Number(prompt("Introdueix un número de mes (1-12)"));
switch (mes) {
  case 1:
    console.log("Gener");
    break;
  case 2:
    console.log("Febrer");
    break;
  case 3:
    console.log("Març");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Maig");
    break;
  case 6:
    console.log("Juny");
    break;
  case 7:
    console.log("Juliol");
    break;
  case 8:
    console.log("Agost");
    break;
  case 9:
    console.log("Setembre");
    break;
  case 10:
    console.log("Octubre");
    break;
  case 11:
    console.log("Novembre");
    break;
  case 12:
    console.log("Desembre");
    break;
  default:
    console.log("Aquest mes no existeix");
}

// Exercici 15.2
tipus = prompt("Vols conus (c) o terrina (t)?");
sabor = prompt("Quin sabor vols? (vainilla, xocolata, turró, menta, oreo, crema, gerds, ametlles)");
preu = 0;
error = false;
if (tipus == "c") {
  preu = 3.45;
} else if (tipus == "t") {
  preu = 3.95;
} else {
  error = true;
}
switch (sabor) {
  case "vainilla":
  case "xocolata":
    preu = preu + 0;
    break;
  case "turró":
  case "menta":
  case "oreo":
    preu = preu + 0.5;
    break;
  case "crema":
  case "gerds":
  case "ametlles":
    preu = preu + 1;
    break;
  default:
    error = true;
}
if (error == true) {
  console.log("Error dades mal introduïdes");
} else {
  console.log("El preu final és " + preu + "€");
}

// Exercici 15.3
let dia = prompt("Introdueix la lletra del dia (l, m, x, j, v, s, d)");
switch (dia) {
  case "l":
  case "m":
  case "x":
  case "j":
  case "v":
    console.log("És laborable");
    break;
  case "s":
  case "d":
    console.log("És festiu");
    break;
  default:
    console.log("Aquesta lletra no és cap dia");
}

// Exercici 16.1
for (let i = 1; i <= 10; i++) {
  console.log("Estem fent bucles");
}

// Exercici 16.2
for (let i = 5; i <= 20; i++) {
  console.log(i);
}

// Exercici 16.3
let N = Number(prompt("Introdueix un número"));
let suma = 0;
for (let i = 1; i <= N; i++) {
  suma = suma + i;
}
console.log("La suma és " + suma);

// Exercici 16.4
N = Number(prompt("Introdueix un número"));
let factorial = 1;
for (let i = 1; i <= N; i++) {
  factorial = factorial * i;
}
console.log("El factorial és " + factorial);

// Exercici 16.5
N = Number(prompt("Introdueix el número N"));
let M = Number(prompt("Introdueix el número M (més gran que N)"));
suma = 0;
for (let i = N; i <= M; i++) {
  suma = suma + i;
}
console.log("La suma és " + suma);

// Exercici 16.6
N = Number(prompt("Introdueix un número"));
suma = 0;
for (let i = 2; i <= N; i = i + 2) {
  suma = suma + i;
}
console.log("La suma dels parells és " + suma);

// Exercici 16.7
N = Number(prompt("Introdueix un número"));
for (let i = 1; i <= 10; i++) {
  console.log(N + " x " + i + " = " + N * i);
}

// Exercici 16.8
N = Number(prompt("Introdueix un número"));
for (let i = N; i >= 1; i--) {
  console.log(i);
}
// Si N < 1 no s'escriu res perquè la condició ja és falsa des del principi

// Exercici 16.9
N = Number(prompt("Introdueix un número"));
let asteriscos = "";
for (let i = 1; i <= N; i++) {
  asteriscos = asteriscos + "*";
}
console.log(asteriscos);

// Exercici 16.10
N = Number(prompt("Introdueix un número"));
let linia = "";
for (let i = 1; i <= N; i++) {
  linia = linia + "*";
  console.log(linia);
}

// Exercici 16.11
N = Number(prompt("Introdueix el número N"));
M = Number(prompt("Introdueix el número M"));
let numero = "";
let serie = "";
suma = 0;
for (let i = 1; i <= M; i++) {
  numero = numero + N;
  serie = serie + numero + " ";
  suma = suma + Number(numero);
}
console.log(serie);
console.log("La suma de la sèrie és: " + suma);

// Exercici 17.1
let comptador = 1;
while (comptador <= 10) {
  console.log("Estem fent bucles");
  comptador++;
}

// Exercici 17.2
comptador = 5;
while (comptador <= 20) {
  console.log(comptador);
  comptador++;
}

// Exercici 17.3
N = Number(prompt("Introdueix un número"));
comptador = N;
while (comptador >= 1) {
  console.log(comptador);
  comptador--;
}
// Si N < 1 no s'escriu res, igual que amb el for

// Exercici 17.4
N = Number(prompt("Quants números de Fibonacci vols?"));
let fib1 = 1;
let fib2 = 1;
let seguent = 0;
comptador = 1;
while (comptador <= N) {
  console.log(fib1);
  seguent = fib1 + fib2;
  fib1 = fib2;
  fib2 = seguent;
  comptador++;
}

// Exercici 17.5
N = Number(prompt("Introdueix el número N"));
M = Number(prompt("Introdueix el número M"));
comptador = 1;
let resultat = 0;
while (comptador <= M && resultat <= 999999) {
  resultat = N * comptador;
  console.log(resultat);
  comptador++;
}

// Exercici 18.1
comptador = 1;
do {
  console.log("Estem fent bucles");
  comptador++;
} while (comptador <= 10);

// Exercici 18.2
comptador = 5;
do {
  console.log(comptador);
  comptador++;
} while (comptador <= 20);

// Exercici 18.3
N = Number(prompt("Introdueix un número"));
comptador = N;
do {
  console.log(comptador);
  comptador--;
} while (comptador >= 1);
// Si N < 1 s'escriu el número una vegada, perquè el do-while sempre s'executa almenys un cop

// Exercici 18.4
N = Number(prompt("Introdueix un número"));
let divisor = 2;
let esPrimer = true;
if (N < 2) {
  esPrimer = false;
} else {
  do {
    if (N % divisor == 0 && divisor != N) {
      esPrimer = false;
    }
    divisor++;
  } while (divisor < N);
}
if (esPrimer == true) {
  console.log(N + " és primer");
} else {
  console.log(N + " no és primer");
}

// Exercici 18.5
comptador = 1;
let mesGran = 0;
do {
  num = Number(prompt("Introdueix el número " + comptador));
  if (comptador == 1 || num > mesGran) {
    mesGran = num;
  }
  comptador++;
} while (comptador <= 10);
console.log("El més gran és " + mesGran);