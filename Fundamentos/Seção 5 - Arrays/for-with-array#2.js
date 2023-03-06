// Percorrer os elementos de um array através da estrutura de controle 'for of' e 'for in' :

const regiões = [
    {
        país: 'Brasil',
        continente: 'América do Sul'
    },
    {
        país: 'Inglaterra',
        continente: 'Europa'
    },
    {
        país: 'Austrália',
        continente: 'Oceania'
    },
    {
        país: 'Japão',
        continente: 'Ásia Oriental'
    },
    {
        país: 'Nigéria',
        continente: 'África Ocidental'
    },
    {
        país: 'Estados Unidos',
        continente: 'América do Norte'
    }
];

// for...in
// O laço de repetição for...in permite iterar sobre as propriedades enumeradas de um objeto de acordo com a ordem em que foram inseridos.
// exemplo for in: acessa/percorre os índices
for (let índices in regiões){
    console.log(regiões[índices]);
}

console.log('\n');

// O loop for...of percorre objetos iterativos chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.
// exemplo for of: aceesa/precorre os valores
for (let vlr of regiões){
    console.log(vlr);
}