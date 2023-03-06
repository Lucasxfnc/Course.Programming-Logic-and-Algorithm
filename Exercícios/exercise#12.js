// Exercícios - Curso Fundamentos de Programação [Cod3r]
// Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a mesma. Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam cópias de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções. Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade especificada no segundo parâmetro.
// Exemplos:
// removerPropriedade({a: 1, b: 2}, "a") -> retornará {b: 2} 
// removerPropriedade({ 
// id: 20, 
// nome: "caneta", 
// descricao: "Não preenchido" 
// }, "descricao") -> retornará {id: 20, nome: "caneta"}
// A fim de testar se o objeto retornado não é o mesmo que foi passado como parâmetro para a função
// removerPropriedade, você poderá usar a função Object.is(), por exemplo: 
// Object.is(removerPropriedade(objeto, "descricao"), objeto)
// Retornará false se o objeto não for o mesmo.

// objeto:
const browsers = {
    firstOption: 'Google Chrome',
    secondOption: 'Mozilla Firefox',
    thirdOption: 'Microsoft Edge',
    fourthOption: 'Opera'
}
function rmPropriedade(objt, propriedade){
    const replica = Object.assign({}, objt);
    delete replica[propriedade];
    return replica;
}
console.log(rmPropriedade(browsers, "fourthOption"));
console.log(Object.is(rmPropriedade(browsers, "fourthOption"), browsers)); // false


// function rmPropriedade(objt, propriedade){
//     const replica = objt;
//     delete replica[propriedade];
//     return replica;
// }