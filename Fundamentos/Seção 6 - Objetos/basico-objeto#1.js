// Em JavaScript, os objetos fornecem uma maneira para armazenarmos, manipularmos, e enviarmos dados pela rede.

// Formas de criar um objeto em js e acessar seus atributos:

// 1. Criar objetos usando a sintaxe literal de objeto: Tudo o que precisamos fazer é lançar os pares chave-valor, separados por dois pontos (:) dentro de um conjunto de chaves ({ }) e o objeto estará pronto para ser servido (ou consumido).
const pessoa = {
    nome : 'testNome',
    sobrenome : 'testSobrenome'
};
console.log(pessoa.nome);
console.log(pessoa['sobrenome']);

// 2. Criar objetos usando a palavra-chave 'new': Este método de criação de objetos lembra a maneira como os objetos são criados em linguagens baseadas em classes, como o Java. A propósito, a partir da ES6, as classes também são nativas no JavaScript. Para criar um objeto usando a palavra-chave 'new', precisamos ter uma função construtora. Existem duas maneiras de usarmos o padrão com a palavra-chave 'new':

// A -> Usando a palavra-chave 'new' com a função construtora Object integrada. Para criar um objeto, use a palavra-chave 'new' com o construtor Object(), assim:
const produto = new Object();
// Agora, para adicionar propriedades a esse objeto, temos de fazer algo semelhante a isso:
produto.codigo = 'testeCodigo';
produto.item  = 'testeItem';
console.log(produto);
// Esse método é um pouco mais longo para se digitar. Além disso, essa não é uma prática recomendada por haver uma resolução de escopo que acontece internamente para saber se a função construtora é integrada ou definida pelo usuário.

// B -> Usando 'new' com uma função construtora definida pelo usuário.
// O outro problema com a abordagem que usa a função construtora 'Object' resulta do fato de, a cada vez que criarmos um objeto, termos de adicionar manualmente as propriedades do objeto criado.
// Isso se torna um problema se for necessário a criação de centenas de objetos. Assim, para evitar de adicionar manualmente propriedades aos objetos, criamos funções construtoras personalizadas (ou definidas pelo usuário). Primeiro, criamos uma função construtora e, em seguida, usamos a palavra-chave 'new' para obter os objetos:

function instrumento (item, modelo){
    this.descricao = item;
    this.referencia = modelo;
}; 
// class instrumento {
//     constructor(item, modelo) {
//         this.descricao = item;
//         this.referencia = modelo;
//     }
// };

// Agora, quando quisermos criar um objeto 'Instrumento', basta fazer isso:
const instrumentoUm = new instrumento('testItemUm', 'testModeloUm');
const instrumentoDois = new instrumento('testItemDois', 'testModeloDois');
console.log(instrumentoUm);
console.log(instrumentoDois);

// 3. Usar Object.create() para criar objetos. Este padrão é bastante útil quando se é necessário criar objetos a partir de outros objetos existentes e não diretamente, usando a sintaxe com a palavra-chave 'new'. Vejamos como usar esse padrão. Conforme afirma a MDN:
// O método Object.create() cria um novo objeto, utilizando um outro objeto existente como protótipo para o novo objeto a ser criado.
// Para entender o método Object.create, lembre-se apenas de que ele recebe dois parâmetros. O primeiro parâmetro é um objeto obrigatório que serve como protótipo para o novo objeto a ser criado. O segundo parâmetro é um objeto opcional que contém as propriedades a serem adicionadas ao novo objeto.
// Para uma referência rápida, imagine os protótipos como sendo objetos a partir dos quais outros objetos podem pegar emprestados propriedades/métodos de que necessitam.

// Imagine que você tenha uma organização representada por objOrg:
const objOrg = {empresa: 'FNCorp'};
// E que você queira consultar os funcionários dessa organização. Logicamente, você quer todos os objetos funcionario.
let funcionarios = Object.create(objOrg, { nome: { valor: 'FuncionarioUm' } });
console.log(funcionarios); // { empresa: "ABC Corp" }
console.log(funcionarios.nome); // "FuncionarioUm"

// 4. Usar Object.assign() para criar objetos.
// Conforme diz a MDN: O método Object.assign() é usado para copiar os valores de todas as propriedades próprias enumeráveis de um ou mais objetos de origem para um objeto de destino. Este método retornará o objeto de destino. O método Object.assign pode receber uma quantidade qualquer de objetos como parâmetros. O primeiro parâmetro é o objeto que ele criará e retornará. O resto dos objetos passados para ele será usado para copiar as propriedades para o novo objeto.

// Considere dois objetos, conforme vemos abaixo:
// ^ => const objOrg = {empresa: 'FNCorp'};
const objCity = { cidade: 'São Paulo' }
// Agora, você quer um objeto funcionario de 'FCorp' que seja da cidade de SP. Você pode fazer isso com a ajuda de Object.assign, como vemos aqui
funcionarios = Object.assign({}, objOrg, objCity);
// Nesse momento, você tem um objeto funcionarios que tem empresa e cidade como suas propriedades.
console.log(funcionarios);

// 5. Usar as classes da ES6 para criar objetos. Perceberá que o uso desse método é similar ao uso de 'new' com a função construtora definida pelo usuário. As funções construtoras foram substituídas por classes já que têm o suporte das especificações da ES6.
class Animal {
    constructor (nome, grupo) {
      this.nome = nome;
      this.grupo = grupo;
    }
};
const animal = new Animal('testeNome', 'testeGrupo');
console.log(animal.nome); // testeNome
console.log(animal.grupo); // testeGrupo