// Exercícios - Curso Fundamentos de Programação [Cod3r]
// Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as 
// consoantes, ou seja, sem as vogais.
// Exemplos:
// removerVogais("Cod3r") -> retornará "Cd3r" 
// removerVogais("Fundamentos") -> retornará "Fndmnts"

function removeVogais(string){
    return string.replace(/[aeiou]/gi, '');
}
console.log(removeVogais("Fundamentos"));
console.log(removeVogais("Cod3r"));

// function removerVogais(word){
//     const vowel = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
//     vowel.filter(letter => word = word.replace(letter, ''));
//     return word;
// }
// console.log(removerVogais("Fundamentos"));
// console.log(removerVogais("Cod3r"));
