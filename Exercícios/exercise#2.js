// Exercícios - Curso Fundamentos de Programação [Cod3r]
// Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
// Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e
// desconsidere também dias decorridos desde o último aniversário.
// Exemplos:
// converterIdadeEmAnosParaDias(25) -> retornará 9125 
// converterIdadeEmAnosParaDias(70) -> retornará 25550

function ageInDays(idade){
     if(idade >= 0 && idade < 1 ){
        return `A idade informada não equivale a um ano completo.`;
    } else {
        idade *= 365;
        return `Sua idade em 'anos' equivale a: ${idade} dias`;
    }
}

// function ageInDays(idade) {
//     const diasDoAno = 365
//     return diasDoAno * idade;
// }

console.log(ageInDays(52));
console.log(ageInDays(0));