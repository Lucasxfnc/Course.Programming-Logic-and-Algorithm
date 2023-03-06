// Um método é um trecho de código que realiza uma função específica e pode ser
// chamado por qualquer outro método ou classe para realizar a referida função em um 
// determinado contexto.

// Um objeto é uma entidade independente, com propriedades e tipos que definem suas características. 

// O objeto Array do JavaScript é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas.

// Funcionalidades relacionadas aos Array's: 

const nms = [99, 88, 77];
const frutas = ['Maçã','Uva','Banana'];
const elements = ['Fire', 'Air', 'Water', 'Earth'];

// O forEach executa o callback fornecido uma vez para cada elemento da ordem com um valor atribuido. Ele não é invocado para propriedades de índices que foram deletados ou que não foram inicializados (por ex. em arrays esparsos). Executando uma dada função em cada elemento de um array. 

function course(element, index, array) {
    console.log(`Element: ${element} - Index: ${index} - Array:`, array);
}
nms.forEach(course);

console.log('\n');

frutas.forEach(function (element, index, array){
    console.log(`Element: ${element} - Index: ${index} - Array:`, array);
});

console.log('\n');

// Arrow Function:
elements.forEach((element, index, array) => {
    console.log(`Element: ${element} - Index: ${index} - Array:`, array);
});

// Map.:
// O método map() é usado para criar um novo array a partir de um array existente, aplicando uma mesma função a cada um dos elementos do array inicial.
// Sintaxe.:
// var newArray = arr.map(function callback(elemento, índice, array) {
//     // Valor de retorno para novo_array
// }[, argumentoUsado])
// Na função de callback, somente o elemento do array é necessário. Em geral, alguma ação é realizada no valor e um novo valor é retornado.
// Exemplo.: duplicar o valor dos elementos('numbers') do array
const numbersX = [5, 4, 3, 8, 1];
const dobro = numbersX.map(item => item * 2);
console.log(dobro); // result -> [10, 8, 6, 16, 2]


// Filter.:
// O método filter() recebe cada elemento do array e aplica uma instrução condicional a ele. Se essa condição for verdadeira, o elemento é colocado no array de resultado. Se for falsa, o elemento não é colocado lá.

// Sintaxe.:
// var newArray = arr.filter(function callback(elemento, índice, array) {
//     // Retorna true ou false
// }[, argumentoUsado])
// A sintaxe para filter é semelhante a de map, exceto pelo fato de a função de callback retornar apenas true para manter o elemento ou false para descartá-lo. Na função de callback, apenas o elemento é necessário.
// Exemplo.: descartar os números ímpares do array deixando apenas os pares
const numbersY = [5, 4, 3, 8, 1];
const evens = numbersY.filter(item => item % 2 === 0);
console.log(evens);  // result -> [4, 8]

// Reduce.:
// O método reduce() reduz um array de valores a um único valor. Para obter o valor de resultado, ele executa uma função de redução em cada elemento do array.

// Sintaxe.:
// arr.reduce(callback[, valorInicial])
// O argumento callback é uma função que será chamada uma vez para cada item do array. Essa função recebe quatro argumentos, mas, em geral, apenas os dois primeiros são utilizados.
// Exemplos.: o exemplo a seguir soma cada um dos números de um array.
const numbersZ = [9, 7, 11];
const sum = numbersZ.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); // o resultado é 27 -> 9+7+11


