// Exercícios - Curso Fundamentos de Programação [Cod3r]
// Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
// Considere que todas as palavras só são separadas por um espaço.
// Exemplos:
// contarPalavras("Sou uma frase") -> retornará 3 
// contarPalavras("Me divirto aprendendo a programar") -> retornará 5


function contarPalavras(frase){
    const palavras = frase.split(" ");
    return palavras.length;
}

console.log(contarPalavras("Fnatic World Champion"));
console.log(contarPalavras("Me divirto aprendendo a programar"));

// O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método.