function SelectionSort(array) {
    var len = array.length;
    for (var i = 0; i < len - 1; i = i + 1) {
        var j_min = i;
        for (var j = i + 1; j < len; j = j + 1) {
            if (array[j] < array[j_min]) {
                j_min = j;
            } else {}
        }
        if (j_min !== i) {
            swap(array, i, j_min);
        } else {}
    }
}

function swap(array, x, y) {
    var temp = array[x];
    array[x] = array[y];
    array[y] = temp;
}

let selection = [29, 77, 43, 89, 21, 52, 34, 27, 99, 11, 66, 13, 97, 49, 7, 33, 9];
SelectionSort(selection);
console.log(selection);

// function SelectionSort(array) {

//     let len = array.length;
//     let i;
//     let j;
//     let aux;
//     let minimo;
//     let pos_minimo;

//     for(i = 0; i < len-1; i++) {

//         minimo = array[i];
//         pos_minimo =  i;

//         for(j = i+1; j < len; j++) {

//             if(minimo > array[j]) {
//                 minimo = array[j];
//                 pos_minimo = j;
//             }
//                 if (pos_minimo != i) {
//                     aux = array[pos_minimo];
//                     array[pos_minimo] = array[i];
//                     array[i] = aux;
//                 }
//             }
//         }
// }