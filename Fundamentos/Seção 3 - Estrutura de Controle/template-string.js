// Template Strings são _string_s que permitem expressões embutidas. Você pode utilizar string multi-linhas e interpolação de string com elas.

// Basicamente é uma nova forma de criar strings e tornar o seu código um pouco mais legível.
let i = 3;
let j = 7;

// Template String ` $ { } `

console.log(`i = ${i} , j = {j}.`);

console.log(`i * j = ${i*j}`);

console.log(`O valor aleatório gerado foi: ${Math.random()}`);

// Template strings são envolvidas por (acentos graves) (` `) em vez de aspas simples ou duplas. Template strings podem possuir placeholders. Estes são indicados por um cifrão seguido de chaves (${expression}). As expressões nos placeholders, bem como o texto em volta delas são passados a uma função. A função padrão apenas concatena as partes em uma string única. Se existir uma expressão precedendo a template string (função tag exemplo), a template string é definida como "tagged template string". No caso, a expressão tag (geralmente uma função) é chamada pela template string processada, que você pode manipular antes de produzir o resultado.