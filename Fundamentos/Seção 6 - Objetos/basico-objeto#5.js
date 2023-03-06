// Funcionalidades.:
// Iterar um objeto em javascript com métodos estáticos de objeto.:

class Nav {
    constructor(browsers){
        this.firstNav = browsers;
        this.secondNav = browsers;
        this.thirdNav = browsers;
        this.fourthNav = browsers;
    }
}
const navegadores = new Nav('Google Chrome', 'Mozilla Firefox', 'Microsoft Edge','Opera');
console.log(navegadores);

// -> O método Object.entries() retorna uma array dos próprios pares [key, value] enumeráveis de um dado objeto, na mesma ordem dos objetos providos através do loop for...in (sendo a diferença que o for-in loop enumera também propriedades dispostas na cadeia de prototipagem - prototype chain).
// O método Object.fromEntries() transforma uma lista de pares chave-valor em um objeto.
// Sintaxe.:
// Object.entries(obj)
console.log(Object.entries(navegadores));
// Basicamente, o que ele faz é gerar um array de arrays, em que cada array interno possui dois elementos: a propriedade e o valor.

// -> O método Object.keys() retorna um array de propriedades enumeraveis de um determinado objeto, na mesma ordem em que é fornecida por um laço for...in (a diferença é que um laço for-in enumera propriedades que estejam na cadeia de protótipos).

// Sintaxe.:
// Object.keys(obj)
console.log(Object.keys(navegadores));
// Ele pega como argumento o objeto no qual queremos fazer um laço e retorna um array contendo todos os nomes de propriedades.


// -> O método Object.values() retorna um array com os valores das propriedades de um dado objeto, na mesma ordem provida pelo for...in laço (sendo a diferença que o laço for-in também enumera as propriedades na cadeia prototype).

// Sintaxe.:
// Object.values(obj)
console.log(Object.values(navegadores));
// Este método utiliza como um argumento o objeto em que queremos fazer um laço e retorna um array contendo todos os valores de chave.

// Observação.: os métodos "entries" e "values" são experimentais, verifique a tabela de compatibilidade entre Navegadores cuidadosamente antes de usar essa funcionalidade em produção.