// definindo um array vazio (sem elementos)
const nms = [];
// adicionando dados do tipo string aos elementos do array
nms[0] = 'Catarina';
nms[1] = 'Vicente';
nms[2] = 'Samira';
nms[3] = 'Miguel';
nms[4] = 'Gabriela';
nms[10] = 'Matheus';
// exibindo o array na saída
console.log(nms);

// ordenação alfabética crescente:
nms.sort();
console.log(nms);

// ordenação alfabética decrescente: (arrow function)
nms.sort((x, y) => {
    if (x > y) return -1;
    if (x < y) return 1;
    return 0;
});
console.log(nms);