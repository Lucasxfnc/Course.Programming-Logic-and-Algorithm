// indexar, dividir e manipular strings.:
// Cada um dos caracteres em uma string corresponde a um número de índice, começando com 0. Tal qual um array e seus elementos.

const str = "How are you?";

// podemos usar o método charAt() para retornar o caractere usando o número de índice como um parâmetro.
console.log(str.charAt(5));

// De maneira alternativa, podemos usar o indexOf() para retornar o número de índice da primeira aparição de um caractere.
console.log(str.indexOf("o"));
// Embora “o” apareça duas vezes na string How are you?, o indexOf() mostrará a primeira aparição.

// lastIndexOf() é usado para encontrar a última aparição.
console.log(str.lastIndexOf("o"));

// O método slice(), por outro lado, retorna os caracteres entre dois números de índice. O primeiro parâmetro será o número de índice de início, e o segundo parâmetro será o número de índice final.
// retornará o que está entre eles, mas sem incluir o último parâmetro.
console.log(str.slice(8, 11));
// Se um segundo parâmetro não for incluído, slice() retornará tudo começando do primeiro parâmetro até o final da string.
console.log(str.slice(8));

// Os dois métodos integrados toUpperCase() e toLowerCase() representam maneiras úteis de formatar o texto e fazer comparações textuais no JavaScript.
// toUpperCase() irá converter todos os caracteres para caracteres maiúsculos.
console.log(str.toUpperCase());

// toLowerCase() converterá todos os caracteres para caracteres minúsculos.
console.log(str.toLowerCase());

// O JavaScript possui um método muito útil para dividir uma string por um caractere e criar uma matriz das seções. Vamos usar o método split() para separar a matriz por um caractere de espaço em branco, representado por “ ”.

const originalString = "How are you?";

// Split string by whitespace character
const splitString = originalString.split(" ");
console.log(splitString);
// Se um parâmetro vazio for dado, split() criará uma matriz separada por vírgulas com cada caractere na string.

// O método trim() do JavaScript remove o espaço em branco de ambas as extremidades de uma string, mas não altera nenhum lugar intermediário. Os espaços em branco podem ser Tabs ou espaços.

const tooMuchWhitespace = "     How are you?     ";
const trimmed = tooMuchWhitespace.trim();
console.log(trimmed);
// O método trim() é uma maneira simples de realizar a tarefa comum de remover espaços em branco em excesso.

// Podemos pesquisar uma string em busca de um valor e substituí-lo por um novo valor usando o método replace(). O primeiro parâmetro será o valor a ser encontrado, e o segundo parâmetro será o valor para substituí-lo.

// => const originalString = "How are you?";

// Replace the first instance of "How" with "Where"
const newString = originalString.replace("How", "Where");

console.log(newString);

// Além da capacidade de substituir um valor por outro valor de string, também podemos usar as Expressões Regulares para tornar o replace() mais poderoso. Por exemplo, o replace() afeta apenas o primeiro valor, mas podemos usar o sinalizador g (global) para capturar todas as ocorrências de um valor e o sinalizador i (insensibilidade ao caso) para ignorar a diferenciação entre maiúsculas e minúsculas.

const originalStr = "Javascript is a programming language. I'm learning javascript."

// Search string for "javascript" and replace with "JavaScript"
const newStr = originalStr.replace(/javascript/gi, "JavaScript");

console.log(newStr);