/* IIEF -> (Immediately invoked function expression) -> Uma expressão de função imediatamente invocada é um idioma de linguagem de programação que produz um escopo léxico usando o escopo de função. Era popular em JavaScript como um método para suportar programação modular antes da introdução de soluções mais padronizadas, como módulos CommonJS e ES.
(function(m, n){
    return m * n;
}) ();                   
*/
(function(){
    function produto(a, b){
        return a * b;
    }
   console.log(produto(7, 9));
})
// Armazenar uma function em uma variável/constante
const x = 777;
let y = 2114;
// função anônima
let adição = function (h, d) {
    return h + d;
}
console.log(adição(x, y));