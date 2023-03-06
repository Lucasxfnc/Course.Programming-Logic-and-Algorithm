// Use a declaração if para executar alguma declaração caso a condição lógica for verdadeira. Use a cláusula opcional else para executar alguma declaração caso a condição lógica for falsa.
// Para executar várias declarações, agrupe-as em uma declaração em bloco ({ ... }). Em geral, é uma boa prática sempre utilizar declarações em bloco, especialmente ao aninhar declarações if:

if(true){
    console.log('exec...');
} else {
    console.log('não exec...');
}


if(false){
    console.log('não exec...');
} else {
    console.log('exec...');
}
// Para executar várias declarações, agrupe-as em uma declaração em bloco ({ ... }). Em geral, é uma boa prática sempre utilizar declarações em bloco, especialmente ao aninhar declarações if:
// Recomenda-se não utilizar atribuições simples em uma expressão condicional porque o símbolo de atribuição poderia ser confundido com o de igualdade ao dar uma olhada no código.
// Caso tenha que utilizar uma atribuição em uma expressão condicional, uma prática comum é colocar parênteses adicionais em volta da atribuição.