// Objetos em JavaScript diferem de objetos em outras linguagens de programação mainstream, como o Java, de muitas maneiras. 
// O JavaScript nos permite criar e modificar de forma dinâmica os atributos de um objeto.

// Criando o objeto usuário
// chave : 'valor',
const usuario = {
    // Atributos / Propriedades
    nome: 'lfnc',
    dtNasc: '14/07/2007',
    cpf: '101.010.101-01',
    rg: '01.010.101-0'
}
// Modificando atributos do objeto 'usuario' de forma dinâmica
usuario.nome = 'aluno';

// Criando atributos e adicionando ao objeto 'usuario' de forma dinâmica
usuario.email ='aluno@cod3r.com.br';
usuario.senha = '123@abc';

// Acessando o objeto 'usuario' e retornando na saída
console.log(usuario);
