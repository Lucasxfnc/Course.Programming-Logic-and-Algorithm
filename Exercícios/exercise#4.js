// Exercícios - Curso Fundamentos de Programação [Cod3r]
// Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma  string. Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
// Exemplos:
// nomeDoMes(1) -> retornará "janeiro" 
// nomeDoMes(4) -> retornará "abril"

function months(nms){
    switch(Math.floor(nms)){
        case 12:
            return 'Dezembro.';
        case 11:
            return 'Novembro.';
        case 10:
            return 'Outubro.';
        case 9:
            return 'Setembro.';
        case 8:
            return 'Agosto.';
        case 7:
            return 'Julho.';
        case 6:
            return 'Junho.';
        case 5:
            return 'Maio.';
        case 4:
            return 'Abril.';
        case 3:
            return 'Março.';
        case 2:
            return 'Fevereiro.';
        case 1:
            return 'Janeiro.';
        default: 
            return 'Erro: Informação Inválida!'
        ;
    }   
}
console.log(months(5));