// funcionalidade -> utilizar um valor padrão para o parâmetro/argumento.
function adç (l = 0, m = 0, n = 0, t = 0) {
    return l + m + n + t;
}

console.log(adç(1, 2, 3, 4));
console.log(adç(1, 2, 3));
console.log(adç(1, 2));
console.log(adç(1));
console.log(adç()); 
console.log(adç(1, 2, 3, 4, 5, 6)); 
// js ignora argumentos/parâmetros que são passados a mais do que o informando;