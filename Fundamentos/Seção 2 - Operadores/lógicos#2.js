// Operadores bit a bit: a bit tratam seus operandos como um conjunto de 32 bits (zeros e uns), em vez de tratá-los como números decimais, hexadecimais ou octais. Por exemplo, o número decimal nove possui uma representação binária 1001. Operadores bit a bit realizam suas operações nestas representações, mas retornam valores numéricos padrões do JavaScript.

// Operadores Lógicos:  são utilizados tipicamente com valores booleanos (lógicos); neste caso, retornam um valor booleano. Entretanto, os operadores && e || na verdade retornam o valor de um dos operandos especificados, de forma que se esses operadores forem utilizados com valores não-booleanos, eles possam retornar um valor não-booleano. Os operadores lógicos são descritos na seguinte tabela.

const T1 = true;
const T2 = false;

console.log("==============================================================");

let comprar_TV50 = T1 && T2; // AND 
console.log('Vamos comprar a TV de 50"?', comprar_TV50); 

console.log("==============================================================");

let comprar_TV32 = T1 !== T2; // XOR - OU exclusivo
console.log('Vamos comprar a TV de 32"?', comprar_TV32); 

console.log("==============================================================");

let sorvete = T1 || T2; // OR - OU
console.log('Vamos tomar sorvete para comemorar?', (T1 || T2)); 

console.log("==============================================================");

let ficar_em_casa = !sorvete; // negação lógica (NOT)
console.log('Vamos ficar em casa?', ficar_em_casa); 

// Operadores de deslocamento bit a bit
// Os operadores de deslocamento bit a bit possui dois operandos: o primeiro é uma quantidade a ser deslocada e o segundo especifica o número de posições binárias as quais o primeiro operando deverá ser deslocado. A direção da operação de deslocamento é controlada pelo operador utilizado.

// Operadores de deslocamento convertem seus operandos em inteiros de 32 bits e retornam um resultado do tipo do operando à esquerda.

// Os operadores de deslocamento são listados na tabela a seguir.

// Operador	Descrição	Exemplo:
// Deslocamento à esquerda (<<)	Este operador desloca o primeiro operando pelo número especificado de bits à esquerda. Bits excedentes deslocados para fora do limite à esquerda são descartados. Bits zero são inseridos à direita.	9<<2 produz 36 porque 1001 deslocado 2 bits à esquerda se torna 100100, que é 36.

// Deslocamento à direita com propagação de sinal (>>)	Este operador desloca o primeiro operando pelo número especificado de bits à direita. Bits excedentes deslocados para fora do limite à direita são descartados. Cópias dos bits mais à esquerda são deslocadas a partir da esquerda.	9>>2 produz 2 porque 1001 deslocado 2 bits à direita se torna 10, que é 2. De forma similar, -9>>2 produz -3 porque o sinal é preservado.

// Deslocamento à direita com preenchimento zero (>>>)	Este operador desloca o primeiro operando pelo número especificado de bits à direita. Bits excedentes deslocados para fora do limite à direita são descartados. Bits zero são inseridos à esquerda.	19>>>2 produz 4 porque 10011 deslocado 2 bits à direita se torna 100, que é 4. Para números não negativos o deslocamento à direita com propagação de sinal e o deslocamento à direita com preenchimento zero produzem o mesmo resultado.