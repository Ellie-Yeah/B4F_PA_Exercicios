let arr1 = [1, 2, 3, 4, 5, 6, 7, 89];

function calculaOMaiorEmArray(array) {
    let maiorValor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maiorValor) {
            maiorValor = array[i];
        }
    }
    return maiorValor;
}
console.log(calculaOMaiorEmArray(arr1));
//////////////////////////////////////////////////////////////
//seen here: https://stackoverflow.com/questions/13794225/finding-largest-integer-in-an-array-in-javascript/13794246#13794246
let arr = [3, 6, 2, 56, 32, 5, 89, 32];
let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log(largest);

//////////////////////////////
/*javascript - 1 - 2 - Exercício #3

Cria uma função que recebe como argumentos três booleanos e que ***retorna true se um, e apenas um, deles for true***.
Utiliza o que aprendeste sobre boolean para resolver este exercício.

Exemplo de Output: umOuOutro ( true, true, false) // false*/

function umOuOutro(boolean1, boolean2, boolean3) {
    if ((boolean1 === true && boolean2 === false && boolean3 === false) || (boolean1 === false && boolean2 === true && boolean3 === false) || (boolean1 === false && boolean2 === false && boolean3 === true)) {
        return true;
    } else {
        return false;
    }

};
//////////////////////////////////////////////
/*javascript - 1 - 2 - Exercício #4

Cria uma função que recebe como argumentos dois booleanos e que retorna false se ambos forem true.
E retorna true em todos os outros casos.
Utiliza o que aprendeste sobre booleans para resolver este exercício.

Exemplo de Output: contrarioDoE(true, true) // false*/

function contrarioDoE(boolean1, boolean2) {
    if ((a === true && b === true)) {
        return false;
    } else {
        return true;
    }
};
///////////////////////////////////////////////
/* javascript - 1 - 2 - Exercício #5

Cria uma função que recebe o comprimento do lado de um quadrado como argumento e calcula o perímetro dessa figura geométrica.
Utiliza o que aprendeste sobre number para resolver este exercício.

Exemplo de Output:perimetroDoQuadrado(1) //4 */

function perimetroDoQuadrado(lado) {
    let perimetro = (lado * 4);
    return perimetro;
};
///////////////////////////////////////////////////
/*javascript - 1 - 2 - Exercício #6

Cria uma função que recebe o comprimento do lado de um quadrado como argumento e calcula a área dessa figura geométrica.
Utiliza o que aprendeste sobre number para resolver este exercício.

Exemplo de Output: areaDoQuadrado(2) //4 */

function areaDoQuadrado(lado) {
    let area = (lado * lado);
    return area;
};
////////////////////////////////////////////////
/* javascript - 1 - 2 - Exercício #7

Cria uma função que recebe o comprimento do lado de um cubo como argumento e calcula o volume desse sólido.
Utiliza o que aprendeste sobre number para resolver este exercício.

Exemplo de Output: volumeDoCubo(2) //8*/

function volumeDoCubo(lado) {
    let volume = (lado * lado) * lado;
    return volume;
};
////////////////////////////////////
/*javascript - 1 - 2 - Exercício #8

Cria uma função que recebe o comprimento e a largura de um retângulo como argumentos e calcula o perímetro dessa figura geométrica.

Utiliza o que aprendeste sobre number para resolver este exercício.
*/
function perimetroDoRectangulo(comprimento, largura) {
    let perimetroR = (comprimento * 2) + (largura * 2);
    return perimetroR;
};
//////////////////////////////////////
/*javascript - 1 - 2 - Exercício #9

Cria uma função que recebe o comprimento e a largura de um retângulo como argumentos e calcula a área dessa figura geométrica.*/

function areaDoRectangulo(comprimento, largura) {
    let areaR = comprimento * largura;
    return areaR;
};
/////////////////////////////////////
/*javascript - 1 - 2 - Exercício #10

Cria uma função que recebe o comprimento, a largura e a altura de um paralelepípedo como argumentos e calcula o volume desse sólido.*/

function volumeDoParalelepipedo(comprimento, largura, altura) {
    let volumeP = (comprimento * largura) * altura;
    return volumeP;
};
//////////////////////////////////////
/*javascript - 1 - 2 - Exercício #11

Cria uma função que recebe o raio de um círculo como argumento e calcula o perímetro desse círculo.*/
function perimetroDoCirculo(raio) {
    let perimetroC = (2 * Math.PI * raio);
    return perimetroC;
};
//////////////////////////
/*javascript - 1 - 2 - Exercício #12

Cria uma função que recebe o raio de um círculo como argumento e calcula a área desse círculo.*/
function areaDoCirculo(raio) {
    let areaC = (Math.PI * raio * raio);
    return areaC;
};
////////////////////////////
/*javascript - 1 - 2 - Exercício #13

Cria uma função que recebe o raio e a altura de um cilindro como argumentos e calcula o volume desse sólido.*/
function volumeDoCilindro(raio, altura) {
    let volumeC = (Math.PI * (raio * raio)) * altura;
    return volumeC;
};
//////////////////////////////////////
/*javascript - 1 - 2 - Exercício #14

Cria uma função que recebe o raio e a altura de um cone como argumentos e calcula o volume desse sólido.*/

function volumeDoCone(raio, altura) {
    let volCone = ((Math.PI * raio * raio) * altura) / 3;
    return volCone;
};
//////////////////////////////////////////
/*javascript - 1 - 2 - Exercício #15

Cria uma função que recebe dois comprimentos (das bases) e a altura de um trapézio isósceles como argumentos e calcula o perímetro desse trapézio.*/

function perimetroDoTrapezio(comprimentoMaior, comprimentoMenor, altura) {
    let obliqueSideProjection = ((comprimentoMaior - comprimentoMenor) / 2);
    let obliqueSide = (Math.sqrt((obliqueSideProjection * obliqueSideProjection) + (altura * altura)));
    let perimeterTrapezoid = comprimentoMaior + comprimentoMenor + (2 * obliqueSide);
    return perimeterTrapezoid;
};
//////////////////////////////////////////////
/*javascript - 1 - 2 - Exercício #16

Cria uma função que recebe dois comprimentos (das bases) e a altura de um trapézio retângulo como argumentos e calcula a área dessa figura geométrica.*/
function areaDoTrapezio(comprimentoMaior, comprimentoMenor, altura) {
    let areaTrapezoid = (((comprimentoMaior + comprimentoMenor) * altura) / 2);
    return areaTrapezoid;
};
/////////////////////////////////////////////////
/*javascript - 1 - 2 - Exercício #17

Cria uma função que recebe duas diagonais de um losango como argumentos e calcula o perímetro dessa figura geométrica.*/

function perimetroDoLosango(diagonalMaior, diagonalMenor) {
    let rhombusPerimeter = 4 * (Math.sqrt(((diagonalMaior / 2) * (diagonalMaior / 2)) + ((diagonalMenor / 2) * (diagonalMenor / 2))));
    return rhombusPerimeter;
};
///////////////////////////////////
/*javascript - 1 - 2 - Exercício #19

Cria uma função que recebe o lado de um hexágono como argumento e calcula o perímetro dessa figura geométrica.*/
function perimetroDoHexagono(lado) {
    let perimeterHex = lado * 6;
    return perimeterHex;
};
///////////////////////////////////////////
/*javascript - 1 - 2 - Exercício #20

Cria uma função que recebe o lado de um hexágono como argumento e calcula a área dessa figura geométrica.
Retorna o inteiro inferior mais próximo da área. Math.floor().*/

function areaDoHexagono(lado) {
    let areaHex = (((3 * Math.sqrt(3)) / 2) * (lado * lado));
    return Math.floor(areaHex);
};
///////////////////////////////////////////
/*javascript - 1 - 2 - Exercício #21

Cria uma função que recebe dois inteiros como argumentos e calcula o resultado de elevar o primeiro ao segundo.
Utiliza o que aprendeste sobre BigInt para resolver este exercício.*/

function umElevadoAoOutro(um, outro) {
    return BigInt(um) ** BigInt(outro);
};
//////////////////////////////////
/*javascript - 1 - 2 - Exercício #22

Cria uma função que recebe duas strings como argumentos e retorna a concatenação dessas strings separadas por um espaço.
Utiliza o que aprendeste sobre string para resolver este exercício.*/

function concatenaStrings(string1, string2) {
    let sentence = (string1 + " " + string2);
    return sentence;
};
/////////////////////////////////////////
/*javascript - 1 - 2 - Exercício #23

Cria uma função que recebe um nome e uma idade como argumentos e retorna a frase "O meu nome é ... e tenho ... anos." .*/
function retornaNomeEIdade(nome, idade) {
    return (`O meu nome é ${nome} e tenho ${idade} anos.`);
};
////////////////////////////////////
/*javascript - 1 - 2 - Exercício #24

Cria uma função que recebe duas strings como argumentos e retorna uma string por linha.*/
function umaStringPorLinha(string1, string2) {
    return (`${string1} \n ${string2}`);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////

