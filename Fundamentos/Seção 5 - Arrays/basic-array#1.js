//  índices:  0    1    2    3    4    5    6
const nts = [9.2, 7.7, 8.3, 6.5, 7.9, 9.5, 8.7];

// acessando os elementos do array:
console.log(nts);
console.log(nts[1]);

// modificando o valor de um elemento:
nts[6] = 5.4;
console.log(nts);

/* Um Array no JavaScript é um objeto com um construtor único, com uma sintaxe literal e com um conjunto adicional de propriedades e de métodos herdados de um protótipo de Array. Arrays em JavaScript são usados para armazenar vários valores em uma única variável. */

// Ordenando o array númerico em ordem crescente: (arrow function)
// nts.sort((x, y) => x - y);
nts.sort((x, y) => {
    if (x > y) return 1;
    if (x < y) return -1;
    return 0;
});
// console.log(`Array Ordenado de Forma Crescente: ${nts}`);
console.log("Array ordenado de forma crescente:", nts);

// Ordenando o array númerico em ordem decrescente:
nts.sort((x, y) => {
        if (x > y) return -1;
        if (x < y) return 1;
        return 0;
    }); 
console.log("Array ordenado de forma decrescente:", nts);
// console.log(`Array Ordenado de Forma Crescente: ${nts}`);