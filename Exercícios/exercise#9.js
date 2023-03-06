// Exercícios - Curso Fundamentos de Programação [Cod3r]
// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.
// Exemplos:
// repetir("código", 2) -> retornará ["código", "código"] 
// repetir(7, 3) -> retornará [7, 7, 7]

function repeater(elemento, repetidor){
    let arry = [];
    for(let i=0; i < repetidor; i++){
        arry[i] = elemento;
        // arry.push(item)
    }
    return arry;
}
// function repeater(item, repetidor) {
//     return Array(repetidor).fill(item);
// }

console.log(repeater("código", 2));
console.log(repeater(7, 3));