const x = 7;
const y = 14;
const operaçao = '*'; // operadores aritméticos: + - * / %

let resultado;
// Use a declaração if para executar alguma declaração caso a condição lógica for verdadeira. Use a cláusula opcional else para executar alguma declaração caso a condição lógica for falsa.

if (operaçao == '*'){
    resultado = y * x;
} else if (operaçao == '-'){
    resultado = y - x;
} else if (operaçao == '+'){
    resultado = y + x;
} else if (operaçao == '/'){
    resultado = y / x;
} else {
    resultado = y % x;
}
// Também é possível combinar declarações utilizando else if para obter várias condições testadas em sequência.
console.log("o valor da operação é:",resultado);