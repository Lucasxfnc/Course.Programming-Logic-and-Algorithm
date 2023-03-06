// Exercícios - Curso Fundamentos de Programação [Cod3r]
// Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que têm a quantidade de dígitos indicada pelo segundo parâmetro.
// Exemplos: 
// filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) -> retornará [38, 10, 11] 
// filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) -> retornará [5, 9, 1]

function filtroQuantidadeDeDigitos(array, digit){
    const algarismos = array.map(String).filter(item => item.length == digit);
    return algarismos.map(Number);
}
console.log(filtroQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2));
console.log(filtroQuantidadeDeDigitos([5, 9, 1, 125, 11], 1));

// function filtrarPorQuantidadeDeDigitos(numeros, qntDesejada){
//     let result = [];

//     for(let numero of numeros){
//         const qntDeDigitos = String(numero).length;

//         if(qntDeDigitos === qntDesejada){
//             result.push(numero);
//         }
//     }
//     return result;
// }

// function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada){
//     return numeros.filter(numero => {
//         const quantidadeDeDigitos = String(numero).length;
//         return quantidadeDeDigitos === quantidadeDesejada;
//     });
// }
// console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2));
// console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1));