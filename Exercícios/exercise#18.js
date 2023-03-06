// Exercícios - Curso Fundamentos de Programação [Cod3r]
// Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está desenvolvendo no momento é a de somar o total das despesas. 
// Crie uma função que receba um array de produtos e retorne o total das despesas.
// Exemplos:
// despesasTotais([ 
//  {nome: "Jornal online", categoria: "Informação", preco: 89.99}, 
//  {nome: "Cinema", categoria: "Entretenimento", preco: 150} 
// ]) -> retornará 239.99 
// despesasTotais([ 
//  {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99}, 
//  {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90} 
// ]) -> retornará 34599.89

let produtos = [
    {nome: "Iphone 11 Pro Max", categoria: "Eletrônicos", preco: 3599.99}, 
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.97},
    {nome: "Câmera GoPro Hero11 Black", categoria: "Eletrônicos", preco: 4370.99}
];

function somarDespesas(arryObjt){
    let totalDespesas = 0;
    for(let valor of arryObjt){
        totalDespesas += valor.preco;
    }
    return `total das despesas.: R$${totalDespesas}`;
}
console.log(somarDespesas(produtos))

// function despesasTotais(itens) {
//     return itens.map(item => item.preco).reduce((acumulador, valorAtual) => acumulador + valorAtual);
// }

// function despesasTotais(itens) {
//     return itens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0);
// }