// Exercícios - Curso Fundamentos de Programação [Cod3r]
// Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação "!" no final.
// Exemplos: 
// cumprimentar("Leonardo") ->retornará "Olá, Leonardo!" 
// cumprimentar("Maria") -> retornará "Olá, Maria!"

function greeting(txt){
    return `"Olá, ${txt}!"`;
}

console.log(greeting('Lucas'));

// function greeting(str) {
//     const saudacao = "Olá"
//     return [saudacao, str].join(', ').concat("!")
// }

// function greeting(str) {
//     return "Olá, " + str + "!"
// }