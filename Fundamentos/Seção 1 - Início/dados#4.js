// Var or Let -> variáveis , Const -> constante

// VAR.: A variável var é declarada e iniciada no escopo da função não respeitando bloco e permitindo a redeclaração e reatribuição.
// Hoisting de var:
// Hoisting é um mecanismo do JavaScript que faz com que as declarações de variáveis e de funções sejam movidas para o topo de seu escopo antes da execução do código.

// LET.: A variável let é declarada no escopo da função, mas só é inicializada posteriormente respeitando bloco e permitindo reatribuição, mas não permite a redeclaração.
// Hoisting de let:
// Assim como as declarações com var, as feitas com let também sofrem o hoisting para o topo. Diferentemente de var, porém, que é inicializado como undefined, a palavra-chave let não é inicializada. Assim, se você tentar usar uma variável let antes de sua declaração, terá um Reference Error.

// CONST.: A variável const é declarada no escopo da função, mas só é inicializada posteriormente respeitando bloco e não permitindo reatribuição nem redeclaração.
// Hoisting de const:
// Assim como as declarações de let, as de const sofrem o hoisting para o topo do escopo, mas não são inicializadas.

// Manipulçao de dados (Introdução)

var x = 5; // variável

//...
x = x + 15; // atribuição a uma variável (alterando seu valor)

//...
let y = x * 7; // variável

//...
const z = y + 10; // constante

console.log(x); // saída de dados
console.log(y); // saída de dados
console.log(z); // saída de dados