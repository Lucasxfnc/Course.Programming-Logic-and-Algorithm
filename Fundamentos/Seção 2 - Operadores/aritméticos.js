// Operadores aritméticos tomam valores numéricos (sejam literais ou variáveis) como seus operandos e retornam um único valor númerico. Os operadores aritméticos padrão são os de soma (+), subtração (-), multiplicação (*) e divisão (/).
// Módulo (%)	Operador binário. Retorna o inteiro restante da divisão dos dois operandos.	

// Incremento (++)	Operador unário. Adiciona um ao seu operando. Se usado como operador prefixado (++x), retorna o valor de seu operando após a adição. Se usado como operador pósfixado (x++), retorna o valor de seu operando antes da adição.

// Decremento (--)	Operador unário. Subtrai um de seu operando. O valor de retorno é análogo àquele do operador de incremento.	

// Negação (-)	Operador unário. Retorna a negação de seu operando.	

// Adição (+)	Operador unário. Tenta converter o operando em um número, sempre que possível.	

// Operador de exponenciação (**) Experimental	Calcula a base elevada á potência do expoente, que é baseexpoente. 
{ 
// Operações aritméticas: Valores literais
console.log(21 + 19);
console.log(29 - 17);
console.log(7 * 8);
console.log(15 / 4);
console.log(15 % 4);
}

{ 
//operações aritméticas manipulando variáveis
let x = 15;
let y = 4;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
let z = (x+y) - (x-y) + (x*y) * (x/y) / (x%y);
console.log(z);
}