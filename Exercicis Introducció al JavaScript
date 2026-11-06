// Exercici 1.1
// Correctes: variAble, Variable, vari_able, _variable, vari4able, variable4, variable_4, LaMevaVariable
// Incorrectes: vari-able (guió), vari.able (punt), 4variable (comença per número)
let variAble = 1;
let Variable = 2;
let vari_able = 3;
let _variable = 4;
let vari4able = 5;
let variable4 = 6;
let variable_4 = 7;
let LaMevaVariable = 8;
console.log(variAble, Variable, vari_able, _variable, vari4able, variable4, variable_4, LaMevaVariable);

// Exercici 1.2
// El més adient és nomEmpleat (camelCase)
let nomEmpleat = "Joan";
console.log(nomEmpleat);

// Exercici 2.1
// a) Funciona i escriu 2, però ho deixo comentat perquè després faig servir let a
// var a = 1;
// var a = 2;
// console.log(a);

// b), c) i d) donen error: Identifier 'a' has already been declared
// var a = 1; let a = 2;
// let a = 1; var a = 2;
// let a = 1; let a = 2;

// Exercici 3.1
let a = 5;          // correcta
// let b = 5z;      // incorrecta
let c = "c";        // correcta
// let c = "c';     // incorrecta
// let c = "c'c'c"; // correcta
// let c = "c'c"c'; // incorrecta
let n = 35;         // correcta
// let n = 35va;    // incorrecta
console.log(a, c, n);

// Exercici 3.2
// La línia errònia és "let b = c;" -> ReferenceError: c is not defined
a = 5;
// let b = c;   // si ho descomento dona l'error
// c = 7;

// Exercici 3.3
a = 55;     // number
let b = 55.5;   // number
c = "Hola"; // string
let d = 'Hola'; // string
let e = true;   // boolean
console.log(typeof a, typeof b, typeof c, typeof d, typeof e);

// Exercici 4.1
a = 25;
b = 15 + a;
c = b * 2;
console.log(a,b,c); // 25 40 80

// Exercici 4.2
a = 10;
b = 20;
c = 5;
a = a + 3;
b = b + 4 - a;
c = a + b + c;
a = a + c;
b = 4;
c = c + 3 - b + 2;
console.log(a,b,c); // 42 4 30

// Exercici 4.3
a = 5;
b = 18;
c = 15;
d = 22;
a = a + 10;
b = b + 5 - c;
c = c + 4 + b;
d = d + b + a;
a = a + 1;
b = b + c;
c = b + c;
d = b + b;
// No té console.log, per això no s'escriu res. Si l'afegeixes:
console.log(a,b,c,d); // 16 35 62 70

// Exercici 4.4
a = 10
b = 20
c = 5
a = a + 3 // abans valia 10, després 13
console.log(a); // 13
b = b + 4 - a
console.log(b); // 11
c = a + b + c
console.log(c); // 29
a = a + c
console.log(a); // 42
b = 4
console.log(b); // 4
c = c + 3 - b + 2
console.log(c); // 30

// Exercici 4.5
a = 5;
b = 18;
c = 15;
d = 22;
a = a + 10;
b = b + 5 - c;
c = c + 4 + b;
d = d + b + a;
console.log(a,b,c,d); // 15 8 27 45
a = a + 1;
b = b + c;
c = b + c;
d = b + b;
console.log(a,b,c,d); // 16 35 62 70

// Exercici 4.6
a = 10;
b = 5;
c = a / b;
d = a * b;
e = a % 3;
console.log(c,d,e); // 2 50 1

// Exercici 4.7
a = 10;
b = 5;
c = a * b * 3;
d = a / 3;
console.log(c,d); // 150 3.3333333333333335

// Exercici 5.1
a = 5;
a++;
console.log(a); // 6
b = a++;    // primer assigna, després suma
console.log(a,b); // 7 6

// Exercici 5.2
a = 5;
++a;
console.log(a); // 6
b = ++a;    // primer suma, després assigna
console.log(a,b); // 7 7

// Exercici 5.3
a = 5;
b = a++;  // b = 5, a = 6
c = a--;  // c = 6, a = 5
console.log(a,b,c); // 5 5 6
a = 5;
b = ++a;      // a = 6, b = 6
c = --a;      // a = 5, c = 5
console.log(a,b,c); // 5 6 5
a = 5;
d = 25 + a++;  // fa servir el 5 -> 30
a = 5;
e = 25 + ++a;  // primer puja a 6 -> 31
console.log(d,e); // 30 31

// Exercici 6.1
a = 10;
a += 5;
console.log(a); // 15
a *= 5;
console.log(a); // 75
a -= 5;
console.log(a); // 70
a /= 5;
console.log(a); // 14

// Exercici 7.1
a = "Hola";
b = 'Hola';
// let c = 'Hola";           // incorrecta
d = "Hola 'gramola'";
// let e = 'Hola "gramola'"; // incorrecta
console.log(a, b, d);

// Exercici 7.2
a = "Hola";
b = "Adéu";
console.log(a+b); // HolaAdéu
c = a + 2;
console.log(c);   // Hola2

// Exercici 8.1
a = 5, b = 7;
c = 5, d = "5";
let e1 = a == b;
let e2 = c == d;   // == només mira el valor
let e3 = c === d;  // === mira també el tipus
console.log(e1,e2,e3); // false true false

// Exercici 8.2
a = true;
b = false;
let c1 = true === false;
let c2 = true == 1;
let c3 = true === 1;
console.log(c1,c2,c3); // false true false

// Exercici 8.3
a = 10;
b = 20;
console.log(a > b, a < b); // false true

// Exercici 8.4
a = "Hola";
b = "hola";
c = "Adéu";
let d1 = a === b;
let d2 = a < b;   // les majúscules van abans que les minúscules
let d3 = a < c;   // la H va després de la A
console.log(d1,d2,d3); // false true false

// Exercici 8.5
a = 9;
b = 7;
c = 3;
d = a < b < c; // 9 < 7 -> false, false < 3 -> 0 < 3 -> true
console.log(d); // true
console.log(true == 1);  // true
console.log(false == 0); // true

// Exercici 9.1
console.log(true && true);       // true
console.log(true && false);      // false
console.log(false && (3 == 4));  // false
console.log(false && true);      // false
console.log(false && false);     // false

// Exercici 9.2
console.log(false || false);     // false
console.log(false || true);      // true
console.log(false || (3 == 4));  // false
console.log(true || true);       // true
console.log(true || false);      // true

// Exercici 10.1
a = 5;
b = 10;
c = 2;
a = a + b * c; // 5 + 20 = 25
console.log(a); // 25
let r = a % b + 1; // 25 % 10 = 5, + 1 = 6
d = c + a / b; // 2 + 2.5 = 4.5
console.log(d,r); // 4.5 6

// Exercici 10.2
a = 5;
b = 6;
c = 2;
d1 = a + b * c;
d2 = (a + b) * c;
d3 = a - b * c + a / c + 6 % 5;
console.log(d1,d2,d3); // 17 22 -3.5

// Exercici 10.3
e1 = false && false || true;
e2 = false || false && true;
console.log(e1,e2); // true false

// Exercici 10.4
a = 5;
b = 4;
e1 = a > b || a < b;
e2 = a > b && a < b;
e3 = e1 || e2;
let e4 = a <= b + 1 && b - 1 * 5 < 0;
console.log(e1,e2,e3,e4); // true false true true

// Exercici 11.1
// Demana un número i diu si és major d'edat o no
a = prompt("Introdueix un número");
b = (a >= 18) ? "Ets major d'edat" : "No ets major d'edat";
console.log(b);

// Exercici 11.2
a = Number(prompt("Introdueix el primer número"));
b = Number(prompt("Introdueix el segon número"));
let gran = (a > b) ? a : b;
console.log("El més gran és " + gran);

// Exercici 11.3
let p1 = prompt("Introdueix la primera paraula");
let p2 = prompt("Introdueix la segona paraula");
let resultat = (p1 == p2) ? "Són iguals" : "No són iguals";
console.log(resultat);

// Exercici 12.1
n = Number(prompt("Introdueix un número"));
console.log("Doble: " + n * 2);
console.log("Triple: " + n * 3);
console.log("Quadrat: " + n * n);

// Exercici 12.2
// Versió amb valors fixos:
// let costat1 = 20;
// let costat2 = 80;

// Versió amb prompt:
let costat1 = Number(prompt("Introdueix el primer costat"));
let costat2 = Number(prompt("Introdueix el segon costat"));

let perimetre = 2 * costat1 + 2 * costat2;
let area = costat1 * costat2;
console.log("Perímetre: " + perimetre);
console.log("Àrea: " + area);

// Exercici 12.3
const PI = 3.141593;
let radi = Number(prompt("Introdueix el radi"));
let longitud = 2 * PI * radi;
area = PI * radi * radi;
console.log("Longitud: " + longitud);
console.log("Àrea: " + area);

// Exercici 12.4
let hores = 160;
let preuHora = 12;
let sou = hores * preuHora;
console.log("El sou mensual és " + sou + "€"); // 1920€

// Exercici 12.5
let x = "Hola", y = 3;
let aux = x;
x = y;
y = aux;
console.log(x, y); // 3 Hola

// Exercici 12.6
n = Number(prompt("Introdueix un número"));
console.log(n * n * n);

// Exercici 12.7
alert("Hello World");

// Exercici 12.8
let nom = prompt("Com et dius?");
console.log("Hola " + nom);