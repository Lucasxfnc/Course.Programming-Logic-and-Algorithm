// Efetuar um operação aritmética de acordo com o operador selecionado, realizando uma atribuição condicional em relação ao resultado. (Utilizando o operador ternário)
const a = 9;
const b = 7;

const operacao =  '+'; // ( + - * / )

const resultado = 
    operacao === '+' ? a + b : 
        operacao === '*' ? a * b : 
            operacao === '-' ? a - b : a / b;

console.log(resultado);