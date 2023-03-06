// Exercícios - Curso Fundamentos de Programação [Cod3r]
// Crie uma função que receba três números como parâmetro (numero, minimo, maximo) e também um parâmetro booleano (inclusivo) e retorne se o parâmetro numero (o primeiro parâmetro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero é igual a minimo ou a maximo. 
// Exemplos:
// estaEntre(10, 100, 50) -> retornará false
// estaEntre(16, 100, 160) -> retornará false 
// estaEntre(3, 150, 3) -> retornará false 
// estaEntre(3, 150, 3, true) -> retornará true



function between(nm, max, min, inclusivo = false){
    if(inclusivo){
        return nm >= min && nm <= max;
    } else {
        return nm > min && nm < max;
    }
}
// function between(nm, max, min, inclusivo = false) {
//     return inclusivo ? nm >= min && nm <= max : nm > min && nm < max;
// }
    
console.log(between(7, 130, 7, true));
console.log(between(9, 140, 9));
console.log(between(20, 150, 10));
console.log(between(15, 50, 70));
