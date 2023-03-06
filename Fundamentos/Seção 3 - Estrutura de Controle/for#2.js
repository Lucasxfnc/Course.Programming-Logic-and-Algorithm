//Laço de repetição 'For' infinito
// for(;;){} ou for(;true;){}
// Um laço for é repetido até que a condição especificada seja falsa. O laço for no JavaScript é similar ao Java e C.

// Quando um for é executado, ocorre o seguinte:

// A expressão expressao Inicial é inicializada e, caso possível, é executada. Normalmente essa expressão inicializa um ou mais contadores, mas a sintaxe permite expressões de qualquer grau de complexidade. Podendo conter também declaração de variáveis.

// A expressão condicao é avaliada. caso o resultado de condicao seja verdadeiro, o laço é executado. Se o valor de condicao é falso, então o laço terminará. Se a expressão condicao é omitida, a condicao é assumida como verdadeira.

// A instrução é executada. Para executar múltiplas declarações, use uma declaração em bloco ({ ... }) para agrupá-las.

// A atualização da expressão incremento, se houver, executa, e retorna o controle para o passo 2.
//métodos distintos de declarar o laço for
let aux = 1;

for(;aux <= 10;){
    console.log(aux);
    aux++;
}


console.log('Fim!');
