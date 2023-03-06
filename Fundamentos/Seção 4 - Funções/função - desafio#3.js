//  DESAFIO: Realizar o cálculo da média trimestral de um aluno, descartando sua menor nota e retornando um status informando a situação do mesmo. (sem utilizar funções nativas do js) 

const nt1 = 7.9;
const nt2 = 2.5;
const nt3 = 8.3;

// descobrir a menor nota no trimestre para descarte
function descMinimo (n1, n2){
    return n1 <= n2 ? n1 : n2;
// 
//     if (n1 <= n2) {
//         return n1;
//     } else {
//         return n2;
//     }
// 
}
// calcular a media do aluno descartando a menor nota no trimestre
function calcMediaDesc (n1, n2, n3) {

    const ntMinimo = descMinimo(n1, descMinimo(n2, n3));
    
    return n1 === ntMinimo ? (n2 + n3) / 2 : n2 === ntMinimo ? (n1 + n3) / 2 : (n1 + n2) / 2;

    if (ntMinimo === n1) {
        return (n2 + n3) / 2;
    } else if (ntMinimo === n2) {
        return (n1 + n3) / 2;
    } else {
        return (n1 + n2) / 2;
    }
}
// descobrir o status do aluno em relação a sua media final
function mediaStatus (media) {

    return media >= 7 && media < 10 ? "Parabéns! Aluno Aprovado." : media >= 4 && media < 7 ? "Aluno em Recuperação." : "Aluno Reprovado.";

    if (media >= 7 && media < 10) {
        return "Parabéns! Aluno Aprovado.";
    } else if (media >= 4 && media < 7) {
        return "Aluno em Recuperação.";
    } else {
        return "Aluno Reprovado.";
    }
}
const mediaFinal = calcMediaDesc(nt1, nt2, nt3).toFixed(2);
const statusAluno = mediaStatus(mediaFinal);

console.log(`O resultado final do aluno é: ${mediaFinal} -> ${statusAluno}`);

