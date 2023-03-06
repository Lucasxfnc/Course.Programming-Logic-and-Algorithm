// Exercícios - Curso Fundamentos de Programação [Cod3r]
// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de minúsculas.
// Exemplos:
// contarCaractere("r", "A sorte favorece os audazes") -> retornará 2 
// contarCaractere("c", "Conhece-te a ti mesmo") -> retornará 1

function contarCaractere(letra, txt){
    let cont = 0;
    for(let lt in txt){
        if (letra == txt[lt]){
            cont++;
        }
    }
    return cont;
}
console.log(contarCaractere("t", "Boston Celtics"));

// function contarCaractere(caractereBuscado, frase) {
//     return [...frase].filter(caractere => caractere === caractereBuscado).length
// }
// console.log(contarCaractere('F', 'Fnatic'));
