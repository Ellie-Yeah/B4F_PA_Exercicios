/*cria uma funçao que recebe um array e retorna um array contendo apenas as strings que estao no array
exemplos: js filtraStrings([0, "um, "dois", 3, 4, 5, "seis])"])// um, dois,seis
([0,1,2,3,4,5,"seis"])//seis
*/

let array1 = [0, "um", "dois", 3, 4, 5, "seis"];

function filtraStrings(array) {
    let arrayFiltrado = [];
    for (let i = 0; i < array.length; i++) {
        if (i == Object) {
            arrayFiltrado.push(array[i]);
            continue
        };
    };
    return arrayFiltrado;
};
console.log(filtraStrings(array1));