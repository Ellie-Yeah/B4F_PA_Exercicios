/*Cria uma função que recebe uma string e retorna-a em maiúsculas.
A string não irá conter letras com acentos, nem pontuações.
As palavras da string estarão separadas espaços.*/
let frase = "argeu"

function transformaEmMaiusculas(string) {
    return string.toUpperCase(string);
};
console.log(transformaEmMaiusculas(frase));