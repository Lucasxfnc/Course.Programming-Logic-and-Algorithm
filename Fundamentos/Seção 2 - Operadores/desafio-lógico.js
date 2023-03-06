// Desafio Lógico:
{
/* Criar duas expressões que resultem em TRUE (misturando operadores aritméticos / relacionais /lógicos):
Expressões TRUE */
let PI = 3.14;
let raio = 5;
let area_circ = PI * (raio * raio);

let expressao = area_circ;

console.log("Expressão #1", area_circ <= 300 || raio%2 != 0);
console.log("Expressão #2", area_circ >= 60 || raio < 4.5);

console.log("\n========================================================================\n");

/* Criar duas expressões que resultem em FALSE usando (misturando operadores aritméticos / relacionais /lógicos):
Expressões FALSE */
let diametro = 2 * raio;

console.log("Expressão #1", diametro%2 !=0 && diametro < 15);
console.log("Expressão #2", diametro > PI && diametro > area_circ);
}

console.log("\n========================================================================\n");

{
/*Criar duas expressões que resultem em TRUE usando (misturando operadores aritméticos / relacionais /lógicos):
Expressões TRUE */
let v1 = 9 + 5 > 12 || 14 <= 20;
let v2 = 29 + 27 < 60 || 21 - 19 < 5;
console.log("Exemplo 2 - Expressão #1: ", v1, v2);

console.log("\n========================================================================\n");

let f1 = 19 + 7 > 29 && 7 * 3 < 21;
let f2 = 10 * 3 < 25 && 5 * 5 > 45;
console.log("Exemplo 2 - Expressão #2: ", f1, f2);
}