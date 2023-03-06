// Desafio: Percorrer o array a partir do penúltimo elemento decrescendo de 2 em 2 elementos:

const nmd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = nmd.length-2; i >= 0; i-=2){
    console.log(`${i}. ${nmd[i]}`);
}