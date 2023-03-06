const hora = 7;
let saudação;

// Use a declaração if para executar alguma declaração caso a condição lógica for verdadeira. Use a cláusula opcional else para executar alguma declaração caso a condição lógica for falsa.

if (hora > 0 && hora < 12){
    saudação = "Bom Dia!";
} else {
    if (hora < 18) {
        saudação = "Boa Tarde!";
    } else {
        if (hora <= 24) {
            saudação = "Boa Noite!";
        } else {
            saudação = "Erro! O horário informado não existe.";
        }
        
    } 
}
console.log(saudação);

// Também é possível combinar declarações utilizando else if para obter várias condições testadas em sequência.
