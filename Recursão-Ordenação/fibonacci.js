// Dentre todos os mistérios da Matemática, a sequência de Fibonacci é considerada uma das mais fascinantes descobertas da história. A sequência de números proposta pelo matemático italiano Leonardo de Pisa, mais conhecido como Fibonacci, possui o numeral 1 como o primeiro e o segundo termo da ordem, e os elementos seguintes são originados pela soma de seus dois antecessores. 

function fibonnaciRec (sequence){

    let prev = 0;
    let current = 1;
    let next = 1;
    let i = 0;
    
    for (i = 0; i < sequence; i++) {
        console.log(next);
        next = prev + current;
        prev = current;
        current = next;
    }
}
fibonnaciRec(11);

