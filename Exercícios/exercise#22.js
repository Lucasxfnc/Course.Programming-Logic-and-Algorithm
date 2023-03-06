// Exercícios - Curso Fundamentos de Programação [Cod3r]
// Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.
// Exemplos:
// funcaoDaSorte(10) -> retornará "Parabéns! O número sorteado foi o 10" 
// funcaoDaSorte(5) -> retornará "Que pena! O número sorteado foi o 3" 
// funcaoDaSorte(5) -> retornará "Que pena! O número sorteado foi o 1"

function bet(valor){
   let aleatorio = Math.floor(10 * Math.random() + 1);
   if (valor === aleatorio){
    return `Parabéns! O número sorteado foi o ${aleatorio}`;
   } else {
    return `Que pena! O número sorteado foi o ${aleatorio}`;
   }
}

// function funcaoDaSorte(numeroEscolhido) {
//     const min = 1
//     const max = 10
//     const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min)
//     return (numeroEscolhido === numeroAleatorio ?
//     `Parabéns! O número sorteado foi o ${numeroAleatorio}` :
//     `Que pena, o número sorteado foi o ${numeroAleatorio}`);
// }

console.log(bet(5));

// A função Math.random() retorna um número pseudo-aleatório no intervalo [0, 1[, ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo), que depois você pode dimensionar para um intervalo desejado. A implementação seleciona uma semente para o algoritmo de geração de números aleatórios; esta semente não pode ser escolhida ou reatribuída.

// A função Math.floor(x) retorna o menor número inteiro dentre o número "x".