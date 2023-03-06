// Exercícios - Curso Fundamentos de Programação [Cod3r]
// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:
// Exemplos:
// receberPrimeiroEUltimoElemento([7,14,"olá"]) -> retornará [7, "olá"] 
// receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) -> retornará [-100, 16]

function firstAndLastItem(arry){
    let newArray = [];
    newArray.unshift(arry[0]); newArray.push(arry[arry.length - 1]);
    return newArray;
}
// function receberPrimeiroEUltimoElemento(elementos) {
//     const indiceDoPrimeiroElemento = 0;
//     const indiceDoUltimoElemento = elementos.length - 1;
//     const primeiroElemento = elementos[indiceDoPrimeiroElemento];
//     const ultimoElemento = elementos[indiceDoUltimoElemento];
//     return [primeiroElemento, ultimoElemento];
// }
// function receberPrimeiroEUltimoElemento(elementos) {
//     const primeiroElemento= elementos.shift();
//     const ultimoElemento = elementos.pop();
//     return [primeiroElemento, ultimoElemento]
// }
// function receberPrimeiroEUltimoElemento([primeiroElemento, ...elementosRestantes]) {
//     const ultimoElemento = elementosRestantes.pop();
//     return [primeiroElemento, ultimoElemento];
// }
    
console.log(firstAndLastItem(["first", 7, 11, 9, 3, 14, "last"]));
// console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]));