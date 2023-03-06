function BubbleSort(array){
    for(let i = 0; i < array.length; i++) {

        for(let j = i+1; j < array.length; j++) {

            if (array[i] > array[j]) {

                let aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }
    }
}
let bubble = [29, 77, 43, 89, 21, 52, 34, 27, 99, 11, 66, 13, 97, 49, 7, 33, 9];
BubbleSort(bubble);
console.log(bubble);



