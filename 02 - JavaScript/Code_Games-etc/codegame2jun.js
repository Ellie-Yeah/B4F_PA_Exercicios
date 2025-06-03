/*Implementa a função  que recebe um array de números e devolve a sua mediana.

Caso o array tenha um número par de elementos a mediana é calculada através da média dos números das posições centrais.*/

function computeMedian(array) {
    let meio = array.length / 2;
    for (let i = 0; i < array.length; i++) {
        if (meio % 2 === 1) {
            return [meio]
        } else if (meio % 2 === 0) {
        ((array.length))}
    }
}

const array = [1, 2, 3, 1]

console.log(computeMedian(array))

/*function computeMedian(array) {
    array.sort((a, b) => a - b);  //ordenar array primeiro
    const meio = Math.floor(array.length / 2); //arredonda para baixo o meio do comprimento do array
    if (array.length % 2 !== 0) {
        return array[meio];
    } else {
        return (array[meio - 1] + array[meio]) / 2
    }
}*/

//mediana é o numero a meio do array
//se são 2 nunmeros então faz-se a média dos mesmo