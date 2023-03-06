// Declaração label
// Um label provê um identificador que permite que este seja referenciado em outro lugar no seu programa. Por exemplo, você pode usar uma label para identificar um laço, e então usar break ou continue para indicar quando o programa deverá interromper o laço ou continuar sua execução.

// Declaração break
// Use break para terminar laços, switch, ou um conjunto que utiliza label.

// Quando você utiliza break sem um label, ele encerrará imediatamente o laço mais interno while, do-while, for, ou switch e transferirá o controle para a próxima instrução.
// Quando você utiliza break com um label, ele encerrará o label específico.

// Desvio / Interrupção das estruturas de controle

// Break -> interrompe o fluxo e sai do laço de controle. 
// Finaliza o laço for
for(let i = 1; i <= 5; i++) {
    if(i === 3){
        break;
    }
    console.log(i);
}

// Declaração continue
// A declaração continue pode ser usada para reiniciar uma instrução while, do-while, for, ou label.

// Quando você utiliza continue sem uma label, ele encerrará a iteração atual mais interna de uma instrução while, do-while, ou for e continuará a execução do laço a partir da próxima iteração. Ao contrário da instrução break, continue não encerra a execução completa do laço. Em um laço while, ele voltará para a condição. Em um laço for, ele pulará para a expressão de incrementação.

// Quando você utiliza continue com uma label, o continue será aplicado ao laço identificado por esta label.

// Continue -> Interrompe apenas a repetição indicada e continua no laço de controle. 
// Não finaliza o laço for
for(let i = 1; i <= 5; i++) {
    if(i === 3){
        continue;
    }
    console.log(i);
}