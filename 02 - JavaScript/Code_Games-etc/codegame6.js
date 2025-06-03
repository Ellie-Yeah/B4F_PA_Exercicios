/*Corrige o código do editor de forma a que:

Implemente uma função
que recebe uma string e retorna um booleano correspondente a se a string é um palíndromo ou não.*/



///////////////////////
function verificaPalindromo(string) {
    let indiceCentral = string.length / 2;
    let primeiraMetade = "";
    let segundaMetade = "";

    for (let i = 0; i < indiceCentral; i++) {
        primeiraMetade += string[i]
    }
    for (let i = string.length - 1; i >= indiceCentral - 0.5; i--) {
        segundaMetade += string[i]
    }
    return primeiraMetade.toLowerCase() === segundaMetade.toLowerCase()
}
console.log(verificaPalindromo("osso"))
