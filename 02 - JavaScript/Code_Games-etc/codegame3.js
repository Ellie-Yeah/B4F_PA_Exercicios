/*Corrige a função  que recebe uma string e verifica se é um Pangrama. Só são consideradas as letras do alfabeto português, ou seja: .

Caso a string seja um pangrama a função deve retornar true, caso contrário false.*/

function verificaPangrama(string) {
  const myString = string;
  const abcd = "abcdefghijlmnopqrstuvxz";

  console.log(myString.toLowerCase().includes(abcd));
  
  return myString.toLowerCase().includes(abcd);
}
verificaPangrama("Um pequeno jabuti xereta viu dez cegonhas felizes.");

