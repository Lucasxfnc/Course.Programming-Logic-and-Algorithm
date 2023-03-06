// Exercícios - Curso Fundamentos de Programação [Cod3r]
// Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
// Exemplos:
// segundoMaior([12, 16, 1, 5]) -> retornará 12 
// segundoMaior([8, 4, 5, 6]) -> retornará 6

function segundoMaiorElemento(array){
    const maiorNum = Math.max(...array);
    array = array.filter(numero => numero != maiorNum)
    const segundoMaiorNum = Math.max(...array);
    return segundoMaiorNum;
}
console.log(segundoMaiorElemento([12, 16, 1, 5]));
console.log(segundoMaiorElemento([8, 4, 5, 6]));

// function segundoMaiorElemento(array){
//     const ordenacaoDecrescente = array.sort((x, y) => y - x);
//     const segundoMaiorNum = ordenacaoDecrescente[1];
//     return segundoMaiorNum
// }
// console.log(segundoMaior([8, 4, 5, 6]));

// function segundoMaiorElemento(array){
//     let indiceDoMaior = 0;
//     let segundoMaior;

//     array.forEach((numero, indice) =>{
//         if(numero > array[indiceDoMaior]){
//             indiceDoMaior = indice;
//         }
//     });

//     array.splice(indiceDoMaior, 1);
//     segundoMaior = array[0];

//     array.forEach(numero => {
//         if(numero > segundoMaior){
//             segundoMaior = numero;
//         }
//     });
//     return segundoMaior;
//}
// console.log(segundoMaiorElemento([12, 16, 1, 5]));

