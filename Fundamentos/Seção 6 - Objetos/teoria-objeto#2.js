// Referenciando a própria classe.:
// Quem é this?
// Trata-se do próprio escopo atual onde o mesmo está sendo referenciado, ou seja, dentro da classe o this nada mais é do que uma referência da própria classe.

// Para que serve o this?
// Para referenciarmos a própria classe (tratando-se apenas de OO) dentro de funções ou métodos.

// Porque usar o this?
// Para referênciar atributos ou funções da própria classe dentro de outras funções da mesma classe.

// Quando usar o this?
// Quando precisa-se invocar ou pegar valores de atributos ou funções da própria classe.

class People {
    // Atributos -  Propriedades
    constructor (name, gender, age, dtBirth, native){
        if (name === undefined) {
            throw new Error('O nome é obrigatório!');
        } else {
            this.nome = name;
        }
        this.sexo = gender;
        this.idade = age;
        this.dtNascimento = dtBirth;
        this.natural = native;
    }

    // Métodos - Funções
    greetings(){
        console.log(`Olá, me chamo ${this.nome}! Tenho ${this.idade} anos de idade, e sou natural do Rio de Janeiro.`);
    }
};
const firstPeople = new People('Vicente','Masculino', 23, '21/07/1999', 'Rio de Janeiro');
firstPeople.greetings();