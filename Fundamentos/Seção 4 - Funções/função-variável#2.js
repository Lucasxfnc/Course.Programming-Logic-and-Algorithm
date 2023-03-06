// Armazenando funções em variáveis/constantes
function somar (x, y) {
    return x + y;
}

const adição = somar;

// console.log(somar(7, 6));
console.log(adição(7, 6));


function multiplicar (m, n) {
    return m * n;
}

let produt = multiplicar;

// console.log(multiplicar(3, 9));
console.log(produt(3, 9));
