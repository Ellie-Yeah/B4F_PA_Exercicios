//javascript - 1 - 4 - Exercício #2
/*Cria a função "obtemPropriedadeDeObjecto"  que recebe dois argumentos, objeto, do tipo objeto, e propriedade, do tipo string, e retorna a propriedade do objeto.*/
/*minha resolução
function obtemPropriedadeDeObjeto(objeto, propriedade) {
    
    let objecto={
        propriedade:(typeof(objeto))
    }
    return objecto.propriedade
}
console.log(obtemPropriedadeDeObjeto(1<3))*/
/*
//resolução do copilot:
function obtemPropriedadeDeObjeto(objeto, propriedade) {
    return objeto[propriedade]; // Access and return the property directly
    //the function directly accesses the property of the object using bracket notation: objeto[propriedade].
}

// Example usage
const exemplo = { nome: "João", idade: 30 };
console.log(obtemPropriedadeDeObjeto(exemplo, "nome")); // Output: "João"
console.log(obtemPropriedadeDeObjeto(exemplo, "idade")); // Output: 30
console.log(obtemPropriedadeDeObjeto(exemplo, "altura")); // Output: undefined
*/


/////////////////////////
//javascript - 1 - 4 - Exercício #3
/*Adiciona ao objeto pessoa a propriedade idade que seja o valor da constante idade.*/
/*
const pessoa = {
    nome: "Alfredo",
    altura: 1.78
}

const idade = 26

pessoa.idade = 26;

console.log(pessoa)*/



/////////////////////////

/*javascript - 1 - 4 - Exercício #4
Cria a função  que recebe um objeto
e retorna um array que inclui os nomes de todas as propriedades.*/
/*function obtemPropriedades(objeto) {
   return arr=[objeto];
}
console.log(obtemPropriedades())*/

//chatgpt:
function obtemPropriedades(objeto) {

    return Object.keys(objeto);
    //Object.keys(objeto) é um método do JavaScript que retorna um array com o nome de todas as propriedades (chaves) enumeráveis do objeto.
}




/////////////////////////////////////
/*javascript - 1 - 4 - Exercício #5
Cria a função  "determinaTamanhoDeObjecto" que 
recebe um argumento do tipo objeto e 
retorna o tamanho (quantidade de propriedades) do objeto.*/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
//https://www.scaler.com/topics/object-length-in-javascript/
function determinaTamanhoDeObjeto(objeto) {
    return Object.keys(objeto).length
}


////////////////////////////////////
/*javascript - 1 - 4 - Exercício #6
Cria a função "verificaIdade" que recebe um argumento "pessoa" 
que é do tipo objeto 
e retorna o mesmo objeto com uma propriedade maiorDeIdade que é um booleano, dependente da "idade"*/
const pessoa = {
    nome: "Daniel",
    idade: 17
}
function verificaIdade(pessoa) {
    if (pessoa.idade < 18) {
        pessoa.maiorDeIdade = false;
    } else if (pessoa.idade >= 18) {
        pessoa.maiorDeIdade = true;
    }
    return pessoa
}
console.log(verificaIdade(pessoa))