// A condicional switch avalia uma expressão, combinando o valor da expressão para um cláusula case, e executa as instruções associadas ao case.

// Se a condição for correspondida, o programa executa as instruções asssociadas. Se múltiplos casos corresponderem o valor, o primeiro caso que corresponder é selecionado, mesmo se os casos não forem iguais entre si.
let nota = 4;

//A função Math. ceil(x) retorna o menor número inteiro maior ou igual a "x".
switch(Math.ceil(nota)){ 

    case 10: case 9: case 8: case 7:
        console.log('Parabéns! Aluno Aprovado.');
    break;

    case 6:
    case 5:
        console.log('Aluno em Recuperação.');
    break;

    case 4:
    case 3:
    case 2:
        console.log('Aluno Reprovado.');
    break;

    case 1: case 0:
        console.log('Aluno Extremamente Reprovado.');
    break;

    default:
        console.log('Nota Inválida!');
}
// O programa primeiro procura por um caso o qual a expressão avalie como tendo o mesmo valor que o input da expressão (usando a comparação de igualdade estrita (en-US), ===) transferindo assim o controle para a cláusula encontrada e em seguida executando as instruções associadas. Caso nenhum caso seja correspondido, então o programa procura pela cláusula opcional default, que, se encontrado, tem o controle transferido a ele, executando suas instruções associadas. Se não houver uma cláusula default, o programa continua a execução da instrução seguindo para o final do switch. Por convenção, a cláusula default é a última, mas não é algo obrigatório.

// A instrução opcional break associada com cada case garante que o programa saia da condicional switch assim que a instrução correspondente for executada e executa a instrução que segue logo após o switch. Caso break seja omitido, o programa continua a execução para a próxima instrução dentro de switch.
console.log('Fim!');