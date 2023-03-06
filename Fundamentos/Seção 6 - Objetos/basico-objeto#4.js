// Em JavaScript um objeto é uma coleção de propriedades, sendo cada propriedade definida como uma sintaxe de par chave : valor. A chave pode ser uma string e o valor pode ser qualquer informação.

// Objetos em JavaScript, assim como em muitas outras linguagens de programação, podem ser comparados com objetos na vida real. O conceito de objetos em JavaScript pode ser entendido com objetos tangíveis da vida real.

// criando um objeto -> propriedade (chave : 'valor',)
const client = {
    // definindo seus atributos - Propriedades
    personalData: {
        clientCode: 79137,
        name: 'xfncy',
        birthDate: '14/07/2007',
        email: 'xfncy@cod3r.com.br',
        cpf: '101.010.101-01',
        rg: '01.010.101-0',
        vip: true
    },

    address: {
        publicPlace: 'Rua NMD',
        addressNumber: 43,
        postalCode: 01010101,
        district: 'Venice',
        city: 'Los Angeles',
        state: 'Califórnia'
    }
    // esse objeto não possui métodos 
}
// acessando seus atributos e retornando na saída:
console.log(client)

// Relação de função com objetos.: Criar objetos usando a sintaxe literal de objeto é bastante simples, porém não tão apropriado em  alguns casos...

// Existem diversas maneiras de tornar esse modo de criação mais enxuto e menos redundante, como por exemplo, utilizando funções que retornam objetos. Um artifício que pode ser útil em determinadas situações

function fnc(day, month, year){
    return {
        day: day,
        month: month,
        year: year,

        display: function(){
            return `${this.day}/${this.month}/${this.year}`;
        }
    }
}
// ...
const firstDate = fnc(17, 6, 2016);
const seconDate = fnc(26, 08, 2011);
const thirDate = fnc(09, 05, 2006);
// ...
console.log(firstDate.display());
console.log(seconDate.display());
console.log(thirDate.display());