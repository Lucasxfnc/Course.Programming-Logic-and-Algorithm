// tipo básico de função padão (recebe um parâmetro e retorna um resultado)
// FirstType:
function adição (x, y) {
    return x + y;
}
console.log(`O resultado soma é: ${adição(7, 9)}`);

// tipo básico de função (recebe um parâmetro e não retorna nada) -> "procedimento"
// SecondType
function multiplicação (m, n) {
    console.log("O resultado do produto é:", m*n);
}
multiplicação(7, 9);

// tipo básico de função (não recebe parâmetro, mas retorna um resultado)
// ThirdType
function DataAtual () {
    return new Date();
    //     Date.now();
}
console.log(DataAtual());

// tipo básico de função (não recebe parâmetro e não retorna um resultado)
// FourthType
function HoraAtual (){
//  console.log(new Date().getHours());
    console.log(DataAtual().getHours());
}
HoraAtual();