// Exercícios - Curso Fundamentos de Programação [Cod3r]
// Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme 
// exemplo a seguir:
// Exemplo:
// inverter({ a: 1, b: 2, c: 3}) -> retornará { 1: "a", 2: "b", 3: "c"}

// function inverse(objeto){
//     const result = Object.entries(objeto).map(keyValue => keyValue.reverse());
//     return Object.fromEntries(result);
//     // O método Object.fromEntries() transforma uma lista de pares chave-valor em um objeto.
// }

// console.log(inverse({ a: 1, b: 2, c: 3}));

function inverse(objeto){
    const result = {};

    Object.entries(objeto).forEach(par => {
        const key = 0, value = 1;
        result[par[value]] = par[key];
    });
    return result;
}

console.log(inverse({ a: 1, b: 2, c: 3}));