// característica js em relação aos parâmetros de uma função -> quando um parâmetro/argumento não recebe um valor, ele assumi o undefined e a função retorna um NaN (Not a Number).

function adição (x, y, z) {
    return x + y + z;
}
console.log(adição(7, 14, 21));
console.log(adição(7, 14)); // -> NaN

