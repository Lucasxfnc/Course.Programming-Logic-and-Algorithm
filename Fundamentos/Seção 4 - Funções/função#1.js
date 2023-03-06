// Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.

// A definição da função (também chamada de declaração de função) consiste no uso da palavra chave function (en-US), seguida por:

// Nome da Função.
// Lista de argumentos para a função, entre parênteses e separados por vírgulas.
// Declarações JavaScript que definem a função, entre chaves { }.
const day1 = 14;
const month1 = 7;
const year1 = 2021;

const day2 = 27;
const month2 = 09;
const year2 = 2022;

function exibir_data_1() {           // snake_case
    console.log(`${day1} / ${month1} / ${year1}`);
}
function ExibirData2() {            //CamelCase
    console.log(`Day: ${day2}`);
    console.log(`Month: ${month2}`);
    console.log(`Year: ${year2}`);
}

exibir_data_1();
console.log('\n============================\n');
ExibirData2();

