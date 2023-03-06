// Uma declaração while executa suas instruções, desde que uma condição especificada seja avaliada como verdadeira. Segue uma declaração while:
let control = 1;
while (control <= 21){
    console.log(control);
    

    if(control === 7){
        console.log(control + ' dona 7');
    } else if(control == 14){
        console.log(control + ' malandrinha');
    } else if(control == 21){
        console.log(control + ' mulambo');
    }

    control++;
}

console.log('Fim!');

// Se a condição se tornar falsa, a declaração dentro do laço para a execução e o controle é passado para a instrução após o laço.

// O teste da condição ocorre antes que o laço seja executado. Desta forma se a condição for verdadeira o laço executará e testará a condição novamente. Se a condição for falsa o laço termina e passa o controle para as instruções após o laço.

// Para executar múltiplas declarações, use uma declaração em bloco ({ ... }) para agrupar essas declarações.