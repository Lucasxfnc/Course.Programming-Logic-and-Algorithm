// Exercícios - Curso Fundamentos de Programação [Cod3r]
// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na 
// quantidade especificada no parâmetro.
// Exemplos:
// simboloMais(2) -> retornará "++" 
// simboloMais(4) -> retornará "++++"

function symbolPlus(nmd){
    let strPlus = "";
    for(let i=0; i < nmd; i++){
        strPlus += "+";
    }
    return strPlus;
}
// function symbolPlus(quantidade) {
//     return Array(quantidade).fill('+').join('')
// }

// function symbolPlus(quantidade) {
//     return "+".repeat(quantidade)
// }
console.log(symbolPlus(9));