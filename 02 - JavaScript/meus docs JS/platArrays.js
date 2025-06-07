/*javascript - 1 - 6 - Exercício #7

Cria uma função que recebe um número como argumento e retorna um array com os números de 0 a n.

Caso o número seja inválido deve retornar a seguinte mensagem: "Por favor insira um número superior a 0."

Utiliza o que aprendeste sobre recursão para resolver este exercício.*/

function arrayDeZeroAN(n) {
  let array = [];
  for (let i = 0; i < n + 1; i++) {
    array.push(i);
  }
  if (n <= 0) {
    return "Por favor insira um número superior a 0.";
  }
  return array
}
console.log(arrayDeZeroAN(4))
//resolução do Gonçalo com recursão:
/*function arrayDeZeroAN(n) {
  if (n < 0 || !Number.isInteger(n)) {
    return "Por favor insira um número superior a 0.";
  }

  // Função auxiliar recursiva
  function gerarArray(atual) {
    if (atual === 0) {
      return [0];
    } else {
      const arr = gerarArray(atual - 1);
      arr.push(atual);
      return arr;
    }
  }

  return gerarArray(n);
}*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*javascript - 1 - 6 - Exercício #8

Cria uma função que recebe um número como argumento e retorna um array com os números de n a 0.

Caso o número seja inválido deve retornar a seguinte mensagem: "Por favor insira um número superior a 0."*/

function arrayDeNAZero(n) {
  let array = [];
  for (let i = 0; i < n + 1; i++) {
    array.push(i);
  }
  if (n <= 0) {
    return "Por favor insira um número superior a 0.";
  }
  return array.sort((a, b) => (b - a));
}
console.log(arrayDeNAZero(4))

//resolução do Gonçalo, com recursão:
/*function arrayDeNAZero(n) {
  if (n < 0 ) {
    return "Por favor insira um número superior a 0.";
  }
  if (n === 0) return [0];
  return [n, ...arrayDeNAZero(n - 1)];
}*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*javascript - 1 - 6 - Exercício #9

Cria uma função que recebe um número como argumento e retorna um array com os números pares de 0 a n.
Caso o número seja inválido deve retornar a seguinte mensagem: "Por favor insira um número superior a 0."*/
function paresDeZeroAN(n) {
  let array = [];
  for (let i = 0; i < n + 1; i++) {
    if (i % 2 === 0) {
      array.push(i);
    }
  }
  if (n <= 0) {
    return "Por favor insira um número superior a 0.";
  }
  return array
}
////////////////////////////////////////////////////
/*javascript - 1 - 6 - Exercício #10

Cria uma função que recebe um array como argumento e retorna um array com os números pares desse array.*/
function arrayDePares(array) {
  let newArray = [];
  for (let i = 0; i < n + 1; i++) {
    if (i % 2 === 0) {
      newArray.push(i);
    }
  }
  return newArray
}

//resolução do github:
function arrayDePares(array) {
  const pares = array.filter((numero) => numero % 2 === 0);
  //O método .filter() em JavaScript é usado para criar um novo array apenas com os elementos que passam num teste (função) fornecido.
  //Se a função retornar true, o elemento é incluído no novo array.
  //Se retornar false, o elemento é descartado.
  return pares;
}
///////////////////////////////////////////////////////////
/*javascript - 1 - 6 - Exercício #11

Cria uma função que recebe um array e um número como argumentos e retorna o número de vezes em que n aparece nesse array.
usar o filter*/
let array = [1, 2, 3, 4, 1, 1, 2, 3, 4];
function contarNsNoArray(n, array) {
  const nIguais = array.filter((n) => n);
  return nIguais
}


//resolução github
function contarNsNoArray(n, array) {
  return array.filter(function (elemento) {
    return elemento === n;
  }).length;
}
console.log(contarNsNoArray(1, array))

////////////////////////////
/*
javascript - 1 - 6 - Exercício #12

Cria uma função que recebe um array e um número como argumentos e retorna um array sem o número.*/
function arraySemN(n, array) {
  return array.filter(function (elemento) {
    return elemento !== n;
  });
}
/////////////////////////////////////////
/*javascript - 1 - 6 - Exercício #13

Cria uma função que recebe um array como argumento e retorna um array sem números duplicados.

Utiliza o que aprendeste sobre SET para resolver este exercício.*/
function arraySemDuplicados(array) {
  return [...new Set(array)];
}

console.log(arraySemDuplicados(array))
////////////////////////////////////
/*javascript - 1 - 6 - Exercício #14

Cria uma função que recebe um array de duas dimensões, uma matriz quadrada como argumento e calcula a soma de todos os elementos da diagonal principal (começa no canto superior esquerdo e termina no canto inferior direito).*/
//matriz quadrada é uma matriz (array de arrays) que tem o mesmo número de linhas e de colunas. Exemplo: uma matriz 3x3 (3 linhas e 3 colunas)
/*[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
] 
  somar o 1+5+9*/

let matrizquadrada = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
function somaDiagonalPrincipal(matrizquadrada) {
  let soma = 0;
  for (let i = 0; i < matrizquadrada.length; i++) {
    for (let j = 0; j < matrizquadrada.length; j++) {
      if (matrizquadrada[i] === matrizquadrada[j]) {
        soma += matrizquadrada[i][j];
      }
    }
  }
  return soma
}

console.log(somaDiagonalPrincipal(matrizquadrada));
///////////////////////////////////////////
/*javascript - 1 - 6 - Exercício #15

Cria uma função que recebe um array de duas dimensões, uma matriz quadrada como argumento e calcula a soma de todos os elementos da diagonal secundária (começa no canto superior direito e termina no canto inferior esquerdo).*/
//3+5+7
let matrizquadrada2 = [
  // 0   1   2    3
  [1, 2, 3, 4], //0
  [5, 6, 7, 8], //1
  [9, 10, 11, 12], //2
  [13, 14, 15, 16]  //3
]
//3,0 + 2,1 + 1,2 + 0,3

function somaDiagonalSecundaria(matrizquadrada2) {
  let soma = 0;
  for (let i = 0; i < matrizquadrada2.length; i++) {
    soma += matrizquadrada2[i][matrizquadrada2.length - 1 - i];
  }
  //Para cada linha i, somas o elemento da coluna matriz.length - 1 - i.
  return soma
}

console.log(somaDiagonalSecundaria(matrizquadrada2))
////////////////////////////////////////
/*javascript - 1 - 6 - Exercício #16

Cria uma função que recebe um array de duas dimensões, uma matriz quadrada como argumento e calcula a o valor absoluto da diferença entre a soma da diagonal principal (começa no canto superior esquerdo e termina no canto inferior direito) e a soma da diagonal secundária (começa no canto superior direito e termina no canto inferior esquerdo).*/

function diferencaAbsolutaEntreDiagonais(matrizquadrada2) {
  let somaP = 0;
  for (let i = 0; i < matrizquadrada2.length; i++) {
    for (let j = 0; j < matrizquadrada2.length; j++) {
      if (matrizquadrada2[i] === matrizquadrada2[j]) {
        somaP += matrizquadrada2[i][j];
      }
    }
  };

  let somaS = 0;
  for (let i = 0; i < matrizquadrada2.length; i++) {
    somaS += matrizquadrada2[i][matrizquadrada2.length - 1 - i];
  }
  return Math.abs(somaP - somaS)
  //A diferença absoluta é o valor da diferença entre dois números, sem sinal (ou seja, sempre positiva). Em JavaScript, usa-se Math.abs() para obter a diferença absoluta

}

console.log(diferencaAbsolutaEntreDiagonais(matrizquadrada2))
///////////////////////////////////////
/*javascript - 1 - 6 - Exercício #17

Cria uma função que recebe um array de duas dimensões, uma matriz quadrada como argumento e calcula a o valor da diferença entre a soma da diagonal principal (começa no canto superior esquerdo e termina no canto inferior direito) e a soma da diagonal secundária (começa no canto superior direito e termina no canto inferior esquerdo).*/

function diferencaEntreDiagonais(matrizquadrada2) {
  let somaP = 0;
  for (let i = 0; i < matrizquadrada2.length; i++) {
    for (let j = 0; j < matrizquadrada2.length; j++) {
      if (matrizquadrada2[i] === matrizquadrada2[j]) {
        somaP += matrizquadrada2[i][j];
      }
    }
  };

  let somaS = 0;
  for (let i = 0; i < matrizquadrada2.length; i++) {
    somaS += matrizquadrada2[i][matrizquadrada2.length - 1 - i];
  }
  return somaP - somaS
}
/////////////////////////////////////////
/*javascript - 1 - 6 - Exercício #5

Cria uma função que recebe um array como argumento e retorna o número que mais vezes se repete.

Utiliza o que aprendeste sobre MAP para resolver este exercício.*/

function calculaModa(array) {
  //Cria um novo Map para contar as ocorrências de cada número.
  const mapa = new Map();

  //Percorre o array e conta quantas vezes cada número aparece.
  for (let num of array) {
    let count = (mapa.get(num) || 0) + 1; //mapa.get(num) devolve o número de vezes que já vimos num (ou 0 se ainda não apareceu).
    mapa.set(num, count); //Depois soma 1 e atualiza o Map.
  }
  //Encontra o número com mais ocorrências (a moda).
  let moda = null; //começa em null porque, antes de percorrermos o Map, ainda não sabemos qual é o número mais frequente no array. Ou seja, null indica que ainda não foi encontrado nenhum valor para a moda.
  let max = 0; //para guardar o maior número de repetições encontrado até agora. Começa em 0.
  for (let [num, count] of mapa) { //percorre cada par [num, count] do mapa. num é o número do array original; count é o número de vezes que esse número aparece.
    //O let ... of é uma forma de fazer um loop em JavaScript que percorre todos os elementos de um array (ou de outro objeto iterável). Ele percorre cada par [chave, valor] do Map, atribuindo num à chave e count ao valor em cada iteração.
    if (count > max) { //Verifica se o número de repetições deste número (count) é maior do que o máximo encontrado até agora (max).
      max = count; //Se for maior, atualiza o valor de max para este novo valor.
      moda = num; //E atualiza a variável moda para este número, pois agora é o que mais se repete.
    }
  }
  return moda;
}