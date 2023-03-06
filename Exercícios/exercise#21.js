// Exercícios - Curso Fundamentos de Programação [Cod3r]
// Criar uma função que receba um array de números e retorne o menor número desse array.
// Exemplos: 
// menorNumero([10, 5, 35, 65]) -> retornará 5 
// menorNumero([5, -15, 50, 3]) -> retornará -15

let arr = [-30, 5, -15, 50, 3];

function menorNum(array){
    let menor = array[0];
    for(let i in array){
        if(menor > array[i]){
            menor = array[i];
        } 
    }
    return menor;
}  
console.log(menorNum(arr));

// function menorNumero(array){
//     let menor = array.map(Number).reduce(function(x, y){
//         return Math.min(x, y)
//     })
//     return menor
// }

// function menorNumero(numeros) {
//     return numeros.reduce((anterior, atual) => anterior < atual ? anterior : atual);
// }
    

// function menorNum(arry){
//     return Math.min(...arry)
// }
