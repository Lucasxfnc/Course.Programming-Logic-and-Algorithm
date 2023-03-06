// Operadores bit a bit: a bit tratam seus operandos como um conjunto de 32 bits (zeros e uns), em vez de tratá-los como números decimais, hexadecimais ou octais. Por exemplo, o número decimal nove possui uma representação binária 1001. Operadores bit a bit realizam suas operações nestas representações, mas retornam valores numéricos padrões do JavaScript.:

// AND	a & b	Retorna um 1 para cada posição em que os bits da posição correspondente de ambos operandos sejam uns.
// OR	a | b	Retorna um 0 para cada posição em que os bits da posição correspondente de ambos os operandos sejam zeros.
// XOR	a ^ b	Retorna um 0 para cada posição em que os bits da posição correspondente são os mesmos. [Retorna um 1 para cada posição em que os bits da posição correspondente sejam diferentes.]
// NOT	~ a	Inverte os bits do operando.
// Deslocamento à esquerda	a << b	Desloca a em representação binária b bits à esquerda, preenchendo com zeros à direita.
// Deslocamento à direita com propagação de sinal	a >> b	Desloca a em representação binária b bits à direita, descartando bits excedentes.
// Deslocamento à direita com preenchimento zero	a >>> b	Desloca a em representação binária b bits à direita, descartando bits excedentes e preenchendo com zeros à esquerda.

let money_on = true;
let clima_sol = false;
let car_garagem = true

{
// Case AND
let result_E = '#1 Vou para a praia? ';
result_E += money_on && clima_sol;
console.log(result_E);

// Case OR
let result_OU = '#2 Vou para o shopping? ';
result_OU += clima_sol || car_garagem;
console.log(result_OU);
}
console.log("\n=============================================\n");
{
// operadores bit a bit (apenas um sinal)
let result_E = '#1 Vou para a praia? ';
result_E += money_on & clima_sol;
console.log(result_E);

let result_OU = '#2 Vou para o shopping? ';
result_OU += clima_sol | car_garagem; 
console.log(result_OU);
}
console.log("\n=============================================\n");
{
console.log(true ^ false); // operador Bit a Bit
console.log(false != false); // operador de negação binário ou diferença
console.log("Not true: " + !true); // negação (NOT)
console.log("Not false: " + !false); // negação (NOT)
console.log(true === false); // === igualdade estrita compara valor e tipo das variáveis
console.log(false !== true); // !== diferença estrita compara valor e tipo das variáveis
}
// Operadores Lógicos:  são utilizados tipicamente com valores booleanos (lógicos); neste caso, retornam um valor booleano. Entretanto, os operadores && e || na verdade retornam o valor de um dos operandos especificados, de forma que se esses operadores forem utilizados com valores não-booleanos, eles possam retornar um valor não-booleano. Os operadores lógicos são descritos na seguinte tabela.

// AND lógico (&&)	expr1 && expr2	(E lógico) - Retorna expr1 caso possa ser convertido para falso; senão, retorna expr2. Assim, quando utilizado com valores booleanos, && retorna verdadeiro caso ambos operandos sejam verdadeiros; caso contrário, retorna falso.
// OU lógico (||)	expr1 || expr2	(OU lógico) - Retorna expr1 caso possa ser convertido para verdadeiro; senão, retorna expr2. Assim, quando utilizado com valores booleanos, || retorna verdadeiro caso ambos os operandos sejam verdadeiro; se ambos forem falsos, retorna falso.
// NOT lógico (!)	!expr	(Negação lógica) Retorna falso caso o único operando possa ser convertido para verdadeiro; senão, retorna verdadeiro.

