// Exercícios - Curso Fundamentos de Programação [Cod3r]
// Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e o quanto ele recebe por hora. A função deverá calcular o salário líquido mensal do funcionário, que é da quantidade de horas trabalhadas no mês multiplicada pelo valor da sua hora. Desse valor, deve ser subtraído 30%, relativo a impostos. O retorno da função deve ser a string "Salário igual a R$ X", em que X é o quanto o funcionário ganhou no mês.
// Exemplos: 
// calcularSalario(150, 40.5) -> retornará "Salário igual a R$ 6075"

// caso base: 120H mensais -> recebe 14.7$ por hora 

function calcWage(hr, vlr){
    let monthlyGross = hr * vlr; // bruto mensal
    let monthlyNet = monthlyGross - (monthlyGross * 30 / 100); // líquido mensal c/ impostos descontados
    return `Salário igual a R$ ${monthlyNet.toFixed(2)}`
}

console.log(calcWage(120, 14.7));