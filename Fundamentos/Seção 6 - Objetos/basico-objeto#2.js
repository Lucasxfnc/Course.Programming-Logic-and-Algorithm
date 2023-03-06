// Criando um objeto:
// chave : 'valor',
const produto = {
    // Definindo seus atributos - Propriedades
    identifier: 'Câmera GoPro Hero11 Black',
    price: 4370,
    rebate: 0.15,

    // Definindo seus métodos - Funções
    priceWithRebate: function() {
        return this.price * (1 - this.rebate);
        // Retorna o preço final com desconto aplicado.
    }
}
// Acessando seus métodos e propriedades e retornando na saída:
console.log(produto.identifier);
console.log(produto.priceWithRebate());
