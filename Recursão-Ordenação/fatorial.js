// "O fatorial é uma operação muito importante para o estudo e desenvolvimento da análise combinatória. Na matemática o número seguido do símbolo de exclamação (!) é conhecido como fatorial, por exemplo, x! (x fatorial). Conhecemos como fatorial de um número natural a multiplicação desse número por seus antecessores com exceção do zero." 

function fatRec(n){

    let result = n;

    if (n === 1 || n === 0) {
        return 1;
    } else {
        for(let i=1; i < n; i++){
        result = result * i;
        }
        return result;
    }   
}
console.log(fatRec(77));