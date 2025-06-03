//Exercício 1 - Recursão
//Implementa uma função *contapares* que conta o número de elementos pares de um array.
//usar recursão

//minha resolução:
/*let array1 = [1, 2, 3, 4, 5, 6, 7, 8];

function contaPares(array) {
  let array2 = [];
  for (let i = 0; i < array.length; i++) {
    if ([i] % 2 === 0) {
      array2.push([i]);
    }
  }
  return array2.length;
}
console.log(contaPares(array1));
//4
//funciona, mas não tem a recursão
*/
/*
//solução do prof
function contaParesProf(array) {
  if (array.length === 0) {
    return 0;
  }
  if (array[0] % 2 === 0) {
    return 1 + contaParesProf(array.slice(1)); //slice corta tudo antes do indice indicado; tambem funciona como o clip na app de edição de video, podendo deixar os valores determinados pelo intervalo
  }
  return contaParesProf(array.slice(1));
}

console.log(contaParesProf([2, 3, 4, 5, 6, 8, 10]));*/
/////////////////////////////////////////
//exercicio 1 programação funcional em JS
let array1 = [1, 2, 3, 4, 5, 6, 7, 8];

function cenas(e) {
  return e.length;
}
function mapmapmap(arr) {
  //ou
  const novo_arr = arr.map(cenas);
  return novo_arr;
  /*const novo_arr = arr.map((e) => {
    return novo_arr;
  }
);*/
}

console.log(mapmapmap(["hsdbjfbasdfn", "batata", "cenoura", "couve"]));
///////////////////////////////
//exercicio 2

function filtrar(arr) {
  return arr
    .filter((elemento) => elemento % 2 === 0)
    .map((elemento) => elemento ** 2)
    .reduce((acc, elemento) => acc + elemento);
}
console.log(filtrar([1, 2, 3, 4, 5, 6, 7, 8])); //120
//////////////////////////////////////////////////////
//exercicio 7
/*
function mapear(array){
  return array(array.name, array.birthday,array.age)
}
console.log(mapear(array1))*/
//resolução
function objecto(arr) {
  const objecto = arr.map((elemento) => { //se substituir const objecto por const elemento, vai dar na consola apenas [{age:"312"}]
    return { ...objecto, age: "312" };
  });
  return objecto;
}
console.log(objecto([{ name: "ellie", birthday: "09-10-1990" }]));
//a resolução acima não funciona
//resolução do copilot
function objecto(arr) {
  return arr.map((elemento) => {
    return { ...elemento, age: "312" };
  });
}
console.log(objecto([{ name: "ellie", birthday: "09-10-1990" }]));
// Output: [{ name: "ellie", birthday: "09-10-1990", age: "312" }]
