
// Parâmetros primitivos (como um número) são passados para as funções por valor; o valor é passado para a função, mas se a função altera o valor do parâmetro, esta mudança não reflete globalmente ou na função chamada.

// Embora a declaração de função acima seja sintaticamente uma declaração, funções também podem ser criadas por uma expressão de função. Tal função pode ser anônima; ele não tem que ter um nome.
// As expressões de função são convenientes ao passar uma função como um argumento para outra função.
// Passar função como parâmetro:
function executar (fn) {
    if (typeof fn === "function") {
        console.log(fn());
    }
}

function bomDia () {
    return "Bom Dia!";
}

executar(bomDia);
