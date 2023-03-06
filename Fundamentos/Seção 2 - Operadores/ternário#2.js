// O operador ternário, é um operador condicional do Javascript, normalmente utilizado como atalho para o if. Além de atalho para o if, utilizá-lo pode deixar o código mais enxuto(limpo), visto que um if de quatro linhas pode ser substituído por apenas uma.

// É possível encadear diversas verificações, mas não é recomendado colocar muitas, se não torna o código mais difícil de ler do que um if convencional.

// Sintaxe: condition ? expr1 : expr2

var hora = 7;
const saudacao = 
    hora <= 11 ? "Bom Dia!" : hora <= 17 ? "Boa Tarde!" : "Boa Noite!";

console.log(saudacao);

