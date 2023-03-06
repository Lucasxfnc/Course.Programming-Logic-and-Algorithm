// Uma declaração while executa suas instruções, desde que uma condição especificada seja avaliada como verdadeira. Segue uma declaração while:
const future = Date.now() + 1000;
let qntd = 0;
while (Date.now() < future){
    qntd++;
}

console.log('quantidade de repetições: ' + qntd);

// Se a condição se tornar falsa, a declaração dentro do laço para a execução e o controle é passado para a instrução após o laço.

// O teste da condição ocorre antes que o laço seja executado. Desta forma se a condição for verdadeira o laço executará e testará a condição novamente. Se a condição for falsa o laço termina e passa o controle para as instruções após o laço.

// Para executar múltiplas declarações, use uma declaração em bloco ({ ... }) para agrupar essas declarações.