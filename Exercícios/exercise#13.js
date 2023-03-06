// Exercícios - Curso Fundamentos de Programação [Cod3r]
// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro.
// Exemplos:
// filtrarNumeros(["Javascript", 1, "3", "Web", 20]) -> retornará [1, 20] 
// filtrarNumeros(["a", "c"]) -> retornará []

const arry = ['javascript', 9, 'python', 14, 'java', 27, 'C# e C++', 3, 'php', 11, 'ruby', 7];

// function filteringNumbers(array){
//     let newArry = [];
//     for(let i of array){
//         if(typeof i === 'number'){
//             newArry.push(i);
//         }
//     }
//     return newArry;
// }
function filteringNumbers(array) {
    return array.filter(item => typeof item === "number")
}
console.log(filteringNumbers(arry))