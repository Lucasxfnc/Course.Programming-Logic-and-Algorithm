// DESAFIO: Relação entre Nota e Conceito. Criar uma função que receba uma nota como parâmetro e retorne um conceito. 

function ResultAvaliação (nt){
    switch (Math.floor(nt)) {
        case 10:
            if (nt == 10) {
                return 'Conceito: A+';
            }
            break;
        case 9:
            if (nt >= 9 && nt < 10) {
                return 'Conceito: A';
            }
            break;
        case 8:
            if (nt >= 8 && nt < 9) {
                return 'Conceito: B+';
            }
            break;
        case 7:
            if (nt >= 7 && nt < 8) {
                return 'Conceito: B';
            }
            break;
        case 6:
            if (nt >= 6 && nt < 7) {
                return 'Conceito: C+';
            }
            break;
        case 5:
            if (nt >= 5 && nt < 6) {
                return 'Conceito: C';
            }
            break;
        case 4:
            if (nt >= 4 && nt < 5) {
                return 'Conceito: D+';
            }
            break;
        case 3:
            if (nt >= 3 && nt < 4) {
                return 'Conceito: D';
            }
            break;
        case 2:
            if (nt >= 2 && nt < 3) {
                return 'Conceito: E+';
            }
            break;
        case 1:
            if (nt >= 1 && nt < 2) {
                return 'Conceito: E';
            }
            break;
        case 0:
            if (nt >= 0 && nt < 1) {
                return 'Conceito: F';
            }
            break;
        default:
            return 'Nota Inválida! Sem Conceito.';
    }
}
console.log(ResultAvaliação(7.7));