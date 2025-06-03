function bubbleSort(arr) {
    //compara o primeiro elemento (i) com o segundo valor (j) faz a comparação ao longo do array
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) { //aqui tem arr.length-i-1, porque não interessa comparar o ultimo nº, que será o maior e será definido no primeiro ciclo do loop, nem interessa comparar o primeiro numeor que será o menor; 
            if (arr[j] > arr[j + 1]) { // este código é para trocar os elementos, do menor para o maior
                let temp = arr[j]; //variavel para guardar os valores temporariamente durante a comparação e ordenação dos valores
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
const arr = [28, 1, 32, 84, 22, 71, 54];
console.log(bubbleSort(arr))
/*
function bubbleSort(arr) {
    // compares the first element (i) with the second value (j) and makes the comparison throughout the array
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            // here we use arr.length - i - 1 because we don't need to compare the last number,
            // which will be the largest and will be sorted in the first loop cycle,
            // nor the first number which will be the smallest;
            if (arr[j] > arr[j + 1]) {
                // this code is to swap the elements, from smallest to largest
                let temp = arr[j]; // variable to temporarily store values during comparison and sorting
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
const arr = [28, 1, 32, 84, 22, 71, 54];
console.log(bubbleSort(arr));
*/
//////////////////////////////////////////////
