// O mais recente padrão ECMAScript define sete tipos de dados:
// Seis tipos de dados são os chamados primitivos:

// Boolean -> true e false.
// null ->Uma palavra-chave que indica valor nulo. Devido JavaScript ser case-sensitive, null não é o mesmo que Null, NULL, ou ainda outra variação.
// undefined -> Uma propriedade superior cujo valor é indefinido.
// Number -> 42 ou 3.14159.
// String -> "Howdy"
// Symbol -> Um tipo de dado cuja as instâncias são únicas e imutáveis.
// e Object;

// Embora esses tipos de dados sejam uma quantidade relativamente pequena, eles permitem realizar funções úteis em suas aplicações. Objetos e funções são outros elementos fundamentais na linguagem. Você pode pensar em objetos como recipientes para os valores, e funções como métodos que suas aplicações podem executar.

// Conversão de tipos de dados
// JavaScript é uma linguagem dinamicamente tipada. Isso significa que você não precisa especificar o tipo de dado de uma variável quando declará-la, e tipos de dados são convertidos automaticamente conforme a necessidade durante a execução do script.
{ 
    // Manipulçao de dados (Introdução):

    let preco = 19.90; // ponto flutuante;
    let desconto = 0.4; // ponto flutuante;
    let PrecoComDesconto = preco * (1 - desconto); // operação aritmética;

    console.log("Valor total:", preco);
    console.log("\nValor com desconto:", PrecoComDesconto);
    
   
    let produto = "caderno"; //String (texto) = sequência de símbolos/letras;
    let categoria = "papelaria"; //String = sequência de símbolos/letras;
    //Concatenação (+):
    console.log("\nProduto: " + produto + ", categoria: " + categoria + ", Preço: " + preco + ", Desconto: " + desconto + ", Preço com Desconto: " + PrecoComDesconto);
}
    
