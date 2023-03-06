// Crie um objeto do tipo "data" (que tenha como prorpiedade uma data qualquer do calendário) e possua um método "exibir" que tem como objetivo retornar uma string no seguinte formato dia/mês/ano.:

// classe -> estrutura do objeto que armazena suas propriedades e métodos
class Date {
    // função construtora
    constructor(day, month, year){
        // atributos
        this.day = day;
        this.month =  month;
        this.year = year;
    }
    // métodos - funções
    display(){
        return `${this.day}/${this.month}/${this.year}`;
    }
}
// criando um objeto -> passando suas propriedade (chave : 'valor',) por referência
const fnc = new Date(26, 08, 2011);
// acessando seus atributos e retornando na saída:
console.log(fnc);