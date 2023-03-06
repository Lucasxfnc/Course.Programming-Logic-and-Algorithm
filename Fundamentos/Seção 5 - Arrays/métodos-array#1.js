//  Um método é um trecho de código que realiza uma função específica e pode ser
// chamado por qualquer outro método ou classe para realizar a referida função em um 
// determinado contexto. 

// Um objeto é uma entidade independente, com propriedades e tipos que definem suas características. 

//  O objeto Array do JavaScript é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas. 

//  Funcionalidades relacionadas aos Array's: 
const nms = [1, 2, 3, 4, 8];
const elements = ['Fire', 'Air', 'Water', 'Earth'];

// O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.
console.log(elements.includes('Fire'));
console.log(elements.includes('Madeira'));

nms[4] = 5; // Altera o elemento do índice idicado.
nms.push(6); // Adiciona um elemento/item ao final do array.

// Procura o índice de um item no Array.
console.log(`Item localizado no índice: ${nms.indexOf(3)}`); 

// Determina se o array contém um determinado elemento, retornando true ou false apropriadamente.
console.log(`O elemento faz parte do array? ${nms.includes(10)}`); 

// junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string. 
console.log(`Array: ${elements.join(' - ')}`);

const nms2 = nms.concat(7, 8, 9);
console.log(nms2);

// O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]