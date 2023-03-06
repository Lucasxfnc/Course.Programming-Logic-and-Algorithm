// Exercícios - Curso Fundamentos de Programação [Cod3r]
// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. 
// Exemplos:
// maiorOuIgual(0, 0) -> retornará true 
// maiorOuIgual(0, "0") -> retornará false 
// maiorOuIgual(5, 1) -> retornará true

function nmd(p, s){

    if(typeof p !== typeof s){
       return false;
    } else { 
        if (p >= s){
            return true;
        } else {
            return false;
        }
    }
}

console.log(nmd(0, 0))// retornará true
console.log(nmd(0, "0")) // retornará false
console.log(nmd(5, 1)) // retornará true
console.log(nmd(1, 5)) // retornará false

// function maiorOuIgual(primeiro, segundo) {
//     if(typeof primeiro != typeof segundo) return false
//     return primeiro >= segundo
// }