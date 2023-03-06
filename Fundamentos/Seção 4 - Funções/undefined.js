// O valor global undefined representa um valor indefinido. Trata-se de um dos tipos primitivos do JavaScript.

// O undefined é uma propriedade do objeto global, ou seja, é uma variável no escopo global. O valor inicial de undefined é o valor primitivo undefined.

let a; // undefined
let b = 7;
let c = null; // null
let d = 0;
// saída no console
console.log(a, b, c, d);

// O undefined é uma propriedade não configurável e somente leitura. Mesmo quando esse não for o caso, evite sobrescrevê-lo.

// Uma variável que não teve um valor atribuído é do tipo undefined. Um método ou sentença também retorna undefined se a variável que está sendo avaliada não tem um valor atribuído. Uma função retorna undefined se um valor não for retornado.