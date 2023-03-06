const nota = 7.5;
var bc = true;
// Use a declaração if para executar alguma declaração caso a condição lógica for verdadeira.
// Para executar várias declarações, agrupe-as em uma declaração em bloco ({ ... }). Em geral, é uma boa prática sempre utilizar declarações em bloco, especialmente ao aninhar declarações if:

if (nota >= 6 && bc == true)
    console.log('Aluno Aprovado! Com bom comportamento.');
if (nota >= 6 && bc == false)
    console.log('Aluno Aprovado! Com mau comportamento.');


if (nota < 6 && bc == true)
    console.log('Aluno Reprovado! Porém, com bom comportamento. Tem direito a recuperação.');
if (nota < 6 && bc == false)
    console.log('Aluno Reprovado! E com mau comportamento. Não tem direito a recuperação.');

console.log('Fim!')
// Para executar várias declarações, agrupe-as em uma declaração em bloco ({ ... }). Em geral, é uma boa prática sempre utilizar declarações em bloco, especialmente ao aninhar declarações if:

// Recomenda-se não utilizar atribuições simples em uma expressão condicional porque o símbolo de atribuição poderia ser confundido com o de igualdade ao dar uma olhada no código.

// Caso tenha que utilizar uma atribuição em uma expressão condicional, uma prática comum é colocar parênteses adicionais em volta da atribuição.


// if (nota >= 6 && bc)
//     console.log('Parabéns!');

// if (nota < 6 || !bc)
//     console.log('Uma pena!');
