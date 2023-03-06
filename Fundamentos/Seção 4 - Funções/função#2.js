// Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.

// A definição da função (também chamada de declaração de função) consiste no uso da palavra chave function (en-US), seguida por:

// Nome da Função.
// Lista de argumentos para a função, entre parênteses e separados por vírgulas.
// Declarações JavaScript que definem a função, entre chaves { }.
const d1 = 14;
const m1 = 7;
const a1 = 2021;

const d2 = 29;
const m2 = 5;
const a2 = 2000;

// func    nome     parametros/argumentos/variaveis/dados              
function ExibirData   (d, m, a)    {
    console.log(`${d}/${m}/${a}`); //senteça de código
}

ExibirData(d1, m1, a1);
ExibirData(d2, m2, a2);

