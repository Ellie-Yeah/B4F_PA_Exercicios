/*let i = 0;
let sum = 0;
while (i < 100) {
  console.log(i);
  i++;
} //até aqui conta de 0 a 99
console.log(i);
//conta de 0 a 100
///////////////////////////////

do {
  sum += 1;
  i++;
} while (i < 100);
{
  console.log(i);
  i++;
}
/////////////
class Cat {
  catName = String;
  weight = Number;
  maxJumpHeight = Number;
  verticalPosition = Number;

  constructor(catName, weight, maxJumpHeight, verticalPosition) {
    this.catName = catName;
    this.weight = weight;
    this.maxJumpHeight = maxJumpHeight;
    this.verticalPosition = verticalPosition;
  }
}

console.log(new Cat("mimi", 4, 2, 1));

////////////////////////

const aplica = (numero, func) => {
  return func(numero);
};
/*function multipl(n){
return n * n
}
= isto é igual a =
(n) => n * n*/
/*
//                     ***funçao***
console.log(aplica(5, (n) => n * n)); //25

console.log(aplica(5, (n) => n * -1)); //-5

console.log(aplica(5, (n) => (n % 2 === 0 ? "Par" : "Impar"))); //"Impar"
*/

/////////////////
/*exercicio 3*/
/*
let sD1 = "9875";
let sD2 = "12";
let sD3 = "1";

const superDigito = (n) => {
  const arr = n.split("");
  console.log(arr);

  if (n >= 0 && n <= 9) {
    return n;
  } else if (n >= 10) {
    for (let i = 0; i < arr.length; i++) {
      return Number(arr[i]) + Number(arr[i++]);
    }
  }
};

console.log(superDigito("9875")); //29
console.log(superDigito("12")); //3
console.log(superDigito("1"));
//solução sem recursão
function superDigit(n) {
  while (n.length > 1) {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
      sum += Number(n[i]);
    }
    n = String(sum);
  }
  return n;
}
console.log(superDigit("9875")); //29 -- 11 -- 2
console.log(superDigit("12")); //3
console.log(superDigit("1")); //1

//solução com recursão
function superDigitRecursao(n) {
  let sum = 0;
  if (n.length <= 1) {
    return n;
  }

  for (let i = 0; i < n.length; i++) {
    sum += Number(n[i]);
  }
  return superDigitRecursao(String(sum));
}

console.log(superDigitRecursao("9875")); //29 -- 11 -- 2
console.log(superDigitRecursao("12")); //3
console.log(superDigitRecursao("1")); //1
*/
/*
let array1 = [1, 2, 3, 4, 5];
let n1 = 4;
//[10,14]
let array2 = [1, 2, 3, 4, 5];
let n2 = 2;
//[3, 9]

function minMax(array, n) {
  array.sort();
  let minMaxArray = [];
  let minSum=0;
  let maxSum=0;
  for (let i = 0; i < n-1; i++) {
    minSum += array[i];
    minMaxArray.push(minSum);

    array.reverse(array)
    maxSum += array[i];
    minMaxArray.push(maxSum);
  //break;
    
  }
  return maxSum;
}

console.log(minMax(array2,2));

*/
/*
let map = new Map (
  [
    ['jan', 'Janeiro'],
    ['fev', 'Fevereiro'],
    ['mar', 'Março'],
    ['abr', 'JAbril'],
    ['mai', 'Maio'],
    ['jun', 'Junho'],
    ['jul', 'Julho'],
    ['ago', 'Agosto'],
    ['set', 'Setembro'],
    ['out', 'Outubro'],
    ['nov', 'Novembro'],
    ['dez', 'Dezembro'],
  ]
);

console.log(map.get('jan'));
*/

let array1 = [1,1,3,4,2,3,3];
function removeDuplicados(array){
let removeDoubles = new Set ([...array]); //o [...array, está a fazer um clone do array original, para depois ser modificado, ou seja, para os valores repetidos serem eliminados]
return removeDoubles;
}
console.log(removeDuplicados(array1));

