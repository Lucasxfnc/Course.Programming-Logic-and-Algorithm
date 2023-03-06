// Exercícios - Curso Fundamentos de Programação [Cod3r]
// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
// Exemplos:
// somarNumeros([10, 10, 10]) -> retornará 30 
// somarNumeros([15, 15, 15, 15]) -> retornará 60


function somarElementos(array){
    const soma = array.reduce((acumulado, itemAtual) =>{
        return acumulado + itemAtual;
    }, 0);
    return soma;
}
console.log(somarElementos([15, 15, 15, 15]));
console.log(somarElementos([10, 10, 10]));


// function somarElementos(numeros) {
//     const quantidadeDeNumeros = numeros.length
//     return (quantidadeDeNumeros === 0) ? 0 : numeros[0] + somarNumeros(numeros.slice(1));
// }

// function somarElementos(array) {
//     let soma = 0
//     array.forEach(elemento => soma += elemento)
//     return soma
// }
