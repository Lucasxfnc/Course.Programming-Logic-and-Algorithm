function InsertionSort(array) {

    for(let i = 1; i < array.length; i++) {

        let j = i;

        while( j > 0 && array[j] < array[j-1]) {

            let aux = array[j];
            array[j] = array[j-1];
            array[j-1] = aux;

            j -= 1;
        }
    }

} 

// function InsertionSort(array) {

//     let len = array.length;
//     let i = 1;

//     while (i < len) {

//         let x = array[i];
//         let j = i - 1;
//         while (j >= 0 && array[j] > x) {
//             array[j + 1] = array[j];
//             j = j - 1;
//         }
//         array[j+1] = x;
//         i = i + 1;
//     }
// }

let insertion = [29, 77, 43, 89, 21, 52, 34, 27, 99, 11, 66, 13, 97, 49, 7, 33, 9];
InsertionSort(insertion);
console.log(insertion);