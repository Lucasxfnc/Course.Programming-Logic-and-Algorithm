// Exercícios - Curso Fundamentos de Programação [Cod3r]
// Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
// Exemplo:
// recerberMelhorEstudante({ 
//  Joao: [8, 7.6, 8.9, 6], -> média 7.625 
//  Mariana: [9, 6.6, 7.9, 8], -> média 7.875 
//  Carla: [7, 7, 8, 9] -> média 7.75 
// }) -> retornará { nome: "Mariana", media: 7.875 }

const alunos = {Joao: [8, 7.6, 8.9, 6], Mariana: [9, 6.6, 7.9, 8], Carla: [7, 7, 8, 9]};

function melhorEstudante(objeto){
    const media = array => array.reduce((x, y)=> x+y, 0) / array.length;

    const estudantesComMedias = Object.entries(objeto).map(aluno => {
        const key=0, value=1;
        return {nome: aluno[key], media: media(aluno[value])};
    });

    const estudantesOrdenados = estudantesComMedias.sort((alunoX, alunoY) => 
    alunoY.media - alunoX.media);

    const melhorDesempenho = estudantesOrdenados[0];
    return melhorDesempenho;
}
console.log(melhorEstudante(alunos));

