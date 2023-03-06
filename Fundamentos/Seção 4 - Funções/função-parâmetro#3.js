// Parâmetros primitivos (como um número) são passados para as funções por valor; o valor é passado para a função, mas se a função altera o valor do parâmetro, esta mudança não reflete globalmente ou na função chamada.
// Embora a declaração de função acima seja sintaticamente uma declaração, funções também podem ser criadas por uma expressão de função. Tal função pode ser anônima; ele não tem que ter um nome.
// Passar função como parâmetro
function comp (fn1, fn2, fn3, vlr) {
    return fn3(fn2(fn1(vlr)));
}
function gritar (txt) {
    return txt.toUpperCase(); 
    // O método toUpperCase() retorna o valor da string original convertido em letras maiúsculas.
}
function enfatizar (txt) {
    return `${txt}!!!!!!!`;
}
function tornarLento (txt) {
    return txt.split('').join(' ');
    // O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método.

    // O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.
}
let resultx = comp(gritar, enfatizar, tornarLento, 'sinta medo da void');
console.log(resultx);
