// Exercícios - Curso Fundamentos de Programação [Cod3r]
// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação.
// Exemplo:
// multiplicar(5, 5) -> retornará 25 
// multiplicar(0, 7) -> retornará 0

function multiplicador(x, y){
    let addition = 0;
    let aux = 0;
    while(aux < x){
        addition += y;
        aux++
    }
    return(addition);
}
console.log(multiplicador(9, 1));

// function multiplicador(x, y) {
//     let result = 0;
//     // a otimização feita para diminuir a quantidade de chamadas recursivas pode ser
//     // realizada aqui para diminuir a quantidade de loops 
//     for(let i = 0; i < y; i++){
//     resultado += x
//     return resultado
//     }
// }


// function multiplicador(number, multiplicador) {
//     if (number === 0 || multiplicador === 0){
//         return 0
//     } else {
//         return multiplicador === 1 ? number : number + multiplicar(number, multiplicador-1);
//     }
    
// }


// function multiplicar(x, y) {
//     if (x === 0 || y === 0){
//         return 0;
//     } 

//     const maiorNumero = Math.max(x, y);
//     const menorNumero = Math.min(x, y);

//     function multiplicarRecursivamente(numero, multiplicador) {
//     return (multiplicador === 1 ? numero : numero + multiplicarRecursivamente(numero, multiplicador-1));
//     }
//     // nessa versão, garantimos que o multiplicador será será o menor número, portanto haverá o mínimo de chamadas recursivas
//     return multiplicarRecursivamente(maiorNumero, menorNumero);
// }
