//functions
function merge(left, right) {

    let array = [];

    // sai do loop se qualquer um do array ficar vazio
    while (left.length && right.length) {

        // escolhe o menor entre os menores elementos dos sub arrays esquerdo e direito
        if (left[0] < right[0]) {
            array.push(left.shift());
        } else {
            array.push(right.shift());
        }
    }

    // concatenando os elementos restantes
    // caso não tenhamos percorrido todo o array esquerdo ou direito

    return[...array, ...left, ...right ];
}

function mergeSort(array) {
    const half = array.length / 2;

    // caso base ou caso final
    if (array.length < 2) {
        return array;
    }

    const left = array.splice(0, half);
    return merge(mergeSort(left),mergeSort(array));
}

let array = [4, 8, 7, 2, 11, 1, 3];
console.log(mergeSort(array));