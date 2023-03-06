// Um método é um trecho de código que realiza uma função específica e pode ser
// chamado por qualquer outro método ou classe para realizar a referida função em um 
// determinado contexto. 

// Um objeto é uma entidade independente, com propriedades e tipos que definem suas características. 

// O objeto Array do JavaScript é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas. 

let frutas = ['Maçã','Uva','Banana','Cereja','Abacaxi','Goiaba','Limão','Jabuticaba','Manga','Laranja'];

// Acessar um item (index) do Array:
console.log(frutas[9]); 
console.log(frutas[frutas.length - 3]);

// Procurar o índice de um item no Array:
console.log(frutas.indexOf('Limão'));

// Iterar um Array:
frutas.forEach( (item, indice) => {
    console.log(item, indice);
});

// Adicionar ao início do Array:
frutas.unshift('Morango');
frutas.unshift('Figo');
console.log(frutas);

// Adicionar um item ao final do Array:
frutas.push('Mamão');
console.log(frutas);

// Adicionar um item pela posição do índice:
frutas.splice(7, 0, 'Limão');
console.log(frutas);

// Remover do início do Array:
frutas.shift();
console.log(frutas);

// Remover um item do final do Array:
frutas.pop();
console.log(frutas);

// Remover um item pela posição do índice:
frutas.splice(7, 1);
console.log(frutas);

// Copiar um array:
let cp = frutas.slice();
console.log(cp);

// Inverter a ordem de um array:
frutas.reverse();
console.log(frutas);

// Ordenação do array em ordem alfabética crescente:
frutas.sort();
console.log(frutas);

// Ordenação do array em ordem alfabética decrescente:
frutas.sort((x, y) => { // (arrow function)
    if (x > y) return -1;
    if (x < y) return 1;
    return 0;
});

console.log(frutas);