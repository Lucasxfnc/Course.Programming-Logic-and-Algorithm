// Exercícios - Curso Fundamentos de Programação [Cod3r]
// A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para identificar palavras semelhantes. Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
// Exemplos:
// buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) -> retornará ["programação", "profissional"]
// buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) -> retornará []

// function palavrasSemelhantes(palavra, arryStr){
//     const result = [];
//     for (let word of arryStr){
//         if(word.includes(palavra)){
//             result.push(word);
//         }
//     }
//     return result;
// }
// console.log(palavrasSemelhantes("pro", ["programação", "mobile", "profissional"]));

function palavrasSemelhantes(palavra, arryStr){
    return arryStr.filter(word => word.includes(palavra));
}
console.log(palavrasSemelhantes("python", ["javascript", "java", "c++"]));

// O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.