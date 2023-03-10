// Exercícios - Curso Fundamentos de Programação [Cod3r]
// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares. Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão da divisão dele por 2 é zero.
// Exemplos: 
// receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) -> retornará [] 
// receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) -> retornará [10, 22]

const nms = [10, 70, 22, 43, 9, 77, 14]; // retornará [10, 22, 14]

function itemIndicePares(array){
    return array.filter((item, indice) => item%2 ==0 && indice%2 ==0);
}
console.log(itemIndicePares(nms))

// function itemIndicePares(numeros) {
//     let resultado = []
//     for(let i = 0; i < numeros.length; i += 2){
//     const numeroPar = numeros[i] % 2 === 0
//     if(numeroPar)
//     resultado.push(numeros[i])
//     }
//     return resultado
// }