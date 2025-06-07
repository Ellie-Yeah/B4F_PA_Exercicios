/*Cria a classe  que recebe no construtor nome, idade e sexo e guarda os valores em propriedades.

A classe deve possuir um método  que recebe uma outra  como argumento e retorna uma string de relações de idade.*/

class Pessoa {
    constructor(nome, idade, sexo) {
        this.nome = nome,
            this.idade = idade,
            this.sexo = sexo
    };

    comparaIdade(pessoa) {
        if (this.idade > pessoa.idade) {
            return `${pessoa.sexo === "m" ? "O" : "A"} ${pessoa.nome} é mais ${pessoa.sexo === "m" ? "velho" : "velha"}  do que eu.`
        } else if (this.idade < pessoa.idade) {
            return `${pessoa.sexo === "m" ? "O" : "A"} ${pessoa.nome} é mais ${pessoa.sexo==="m"? "novo":"nova"} do que eu.`
        } else if (this.idade === pessoa.idade) {
            return `${pessoa.sexo === "m" ? "O" : "A"} ${pessoa.nome} é da mesma idade que eu.`
        };
    }
}

