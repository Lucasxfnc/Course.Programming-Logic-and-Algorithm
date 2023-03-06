// Parâmetros primitivos (como um número) são passados para as funções por valor; o valor é passado para a função, mas se a função altera o valor do parâmetro, esta mudança não reflete globalmente ou na função chamada.
// Embora a declaração de função acima seja sintaticamente uma declaração, funções também podem ser criadas por uma expressão de função. Tal função pode ser anônima; ele não tem que ter um nome.
// As expressões de função são convenientes ao passar uma função como um argumento para outra função.

function runx (fn, nf= 9, ns=7) {
    if (typeof fn === "function") {
        console.log(fn(nf, ns));
    }
}
// exemplo sem parâmetro/arg
let aux = new Date();
let hr = aux.getHours();
function saudação () {
    return hr < 12 ? "Bom Dia!" : hr >= 12 && hr < 18 ? "Boa Tarde!" : "Boa Noite!";
}
// exemplo com parâmetro/arg
function adição (x, y) {
    return x + y;
}
function subtração (x, y) {
    return x - y;
}
function produt (x, y) {
    return x * y;
}
runx(saudação);
runx(adição);
runx(subtração);
runx(produt);

runx(adição, 99, 77);
runx(subtração, 99, 77);
runx(produt, 99, 77);



