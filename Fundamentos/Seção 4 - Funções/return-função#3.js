// Currying é o processo de transformar uma função que espera vários argumentos em uma função que espera um único argumento e retorna outra função curried. 

function multpx (x) {
    return function (y) { 
        return function(z) {
            return x * y * z;
        }
    }
}
// Possíveis chamadas da func
console.log(multpx(3)(7)(14));
const prodt = multpx(9);
console.log(prodt(7)(14));

// É uma técnica de transformação de uma função que recebe múltiplos parâmetros de forma que ela pode ser chamada como uma cadeia de funções que recebem somente um parâmetro cada.