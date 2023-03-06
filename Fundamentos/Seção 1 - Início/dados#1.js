// Tipagem dinâmica e fraca:

// JavaScript é uma linguagem dinâmica com tipos dinâmicos. As variáveis ​​em JavaScript não estão diretamente associadas a nenhum tipo de valor específico, e qualquer variável pode receber (e reatribuir) valores de todos os tipos.

// JavaScript também é uma linguagem de tipagem fraca, o que significa que permite a conversão implícita de tipo quando uma operação envolve tipos incompatíveis, em vez de gerar erros de tipo.

// Tipos em JavaScript.:
// O conjunto de tipos na linguagem JavaScript consiste em primitive values e objects.

// Valores primitivos -> Todos os tipos, exceto objetos, definem valores imutáveis ​​(ou seja, valores que não podem ser alterados). Por exemplo, Strings são imutáveis. Referimo-nos a valores desses tipos como "valores primitivos". (dados imutáveis ​​representados diretamente no nível mais baixo do idioma)

// 1. Tipo Boolean
// 2. Tipo Null
// 3. Tipo Undefined
// 4. Tipo Number
// 5. Tipo BigInt
// 6. Tipo String
// 7. Tipo Symbol

// Objetos -> Na ciência da computação, um objeto é um valor na memória que possivelmente é referenciado por um identificador. (coleções de propriedades)

// Manipulçao de dados (Introdução)
// Declarando variáveis (var, let e const):

var nome = "caneta bic"; // nome agora é uma string
var quantidade = 10; // quantidade agora é um número inteiro
{ 
    // Declarando variáveis (var, let e const):
    let preco = 6.4; // preço agora é um número de ponto flutuante
    let imposto = 1.5; // imposto agora é um número de ponto flutuante
    const precoFinal = preco + imposto; // Preço recebe a manipulação de duas variáveis através de uma operação matemática


    // Exibição dos dados na saída 
    console.log(nome);
    console.log(quantidade);
    console.log(preco);
    console.log(imposto);
    console.log(precoFinal);
}
// As declarações de var tem escopo global ou de função, enquanto as declarações de let e de const têm escopo de bloco.

// Variáveis de var podem ser atualizadas e declaradas novamente dentro de seu escopo. As variáveis de let podem ser atualizadas, mas não podem ser declaradas novamente. As variáveis de const não podem ser atualizadas nem declaradas novamente.

// Todas elas passam por hoisting para o topo de seu escopo. Porém, enquanto variáveis com var são inicializadas com undefined, as variáveis com let e const não são inicializadas.

// Enquanto var e let podem ser declaradas sem ser inicializadas, const precisa da inicialização durante a declaração.