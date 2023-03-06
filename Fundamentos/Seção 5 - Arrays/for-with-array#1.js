// Percorrer os elementos de um array através da estrutura de controle 'for', 'for in' e 'for of':

let frutas = ['Maçã','Uva','Banana','Cereja','Abacaxi','Goiaba','Limão','Jabuticaba','Manga','Laranja'];

// exemplo for:
for (let i = 0; i < frutas.length; i++) {
    console.log(`${i+1}. ${frutas[i]}`);
}

console.log('\n');

for (let i = 0; i < frutas.length; i++) {
    console.log(`${i+1}. ${frutas[i]}`);
    if (frutas[i] === 'Abacaxi') break;
}

console.log('\n');

for (let i in frutas){
    console.log(frutas[i]);
}

console.log('\n');

for (let vlr of frutas){
    console.log(vlr)
}