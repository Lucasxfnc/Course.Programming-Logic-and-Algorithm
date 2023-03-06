function partition(array, start, end) {

    // Tomando o último elemento como pivô
    const pivotValue = array[end];
    let pivotIndex = start;

    for (let i = start; i < end; i++) {

        if (array[i] < pivotValue) {
            // Trocando elementos
            [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
            // Movendo para o próximo elemento
            pivotIndex++;
        }
    }

    // Colocando o valor pivô no meio
    [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]]
    return pivotIndex;
};

function quickSortRecursive(array, start, end) {
    // Caso base ou caso final
    if (start >= end) {
        return;
    }
    
    // Retorna pivotIndex
    let index = partition(array, start, end);
    
    // Aplique recursivamente a mesma lógica aos subarrays esquerdo e direito
    quickSortRecursive(array, start, index - 1);
    quickSortRecursive(array, index + 1, end);
}

let array = [7, -2, 4, 1, 6, 5, 0, -4, 2];
quickSortRecursive(array, 0, array.length - 1);

console.log(array);