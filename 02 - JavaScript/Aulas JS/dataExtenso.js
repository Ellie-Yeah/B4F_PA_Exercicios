/*javascript - 1 - 6 - Exercício #3

Cria uma função que recebe um dia, um mês e um ano como argumentos e retorna essa data por extenso.

Caso o número do dia inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 31."

Caso o número do mês inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um mês entre 1 e 12."

Nos meses em que os dias só vão até ao 30 deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 30."

No mês de Fevereiro em anos não bissextos só pode aceitar o número de dias até 28, caso seja inserido um número diferente deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 28."

No mês de Fevereiro em anos bissextos só pode aceitar o número de dias até 29, caso seja inserido um número diferente deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 29."

Os anos devem estar entre 2000 e 2030. Caso seja inserido um ano inválido deve retornar a mensagem de erro: "Por favor introduza um ano entre 2000 e 2030."

Utiliza o que aprendeste sobre "map" para resolver este exercício.

*/

function diaEmPalavras(dia, mes, ano) {

    // Validação do ano
    if (ano < 2000 || ano > 2030) {
        return "Por favor introduza um ano entre 2000 e 2030."
    }

    // Validação do mês
    if (mes < 1 || mes > 12) {
        return "Por favor introduza um mês entre 1 e 12."
    }

    // Validação do dia geral
    if (dia < 1 || dia > 31) {
        return "Por favor introduza um dia entre 1 e 31."
    }

    // Meses com 30 dias
    if ([4, 6, 9, 11].includes(mes) && dia > 30) {
        return "Por favor introduza um dia entre 1 e 30."
    }

    // Fevereiro
    const bissexto = [2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028].includes(ano);
    if (mes === 2) {
        if (bissexto && dia > 29) {
            return "Por favor introduza um dia entre 1 e 29."
        }
        if (!bissexto && dia > 28) {
            return "Por favor introduza um dia entre 1 e 28."
        }
    }



    let mapaDias = new Map([
        [1, "um"],
        [2, "dois"],
        [3, "três"],
        [4, "quatro"],
        [5, "cinco"],
        [6, "seis"],
        [7, "sete"],
        [8, "oito"],
        [9, "nove"],
        [10, "dez"],
        [11, "onze"],
        [12, "doze"],
        [13, "treze"],
        [14, "catorze"],
        [15, "um quarto"],
        [16, "dezasseis"],
        [17, "dezassete"],
        [18, "dezoito"],
        [19, "dezanove"],
        [20, "vinte"],
        [21, "vinte e um"],
        [22, "vinte e dois"],
        [23, "vinte e três"],
        [24, "vinte e quatro"],
        [25, "vinte e cinco"],
        [26, "vinte e seis"],
        [27, "vinte e sete"],
        [28, "vinte e oito"],
        [29, "vinte e nove"],
        [30, "trinta"],
        [31, "trinta e um"]
    ])

    let mapaMeses = new Map([
        [1, "Janeiro"],
        [2, "Fevereiro"],
        [3, "Março"],
        [4, "Abril"],
        [5, "Maio"],
        [6, "Junho"],
        [7, "Julho"],
        [8, "Agosto"],
        [9, "Setembro"],
        [10, "Outubro"],
        [11, "Novembro"],
        [12, "Dezembro"]
    ])

    let mapaAnos = new Map([
        [2000, "dois mil"],//b
        [2001, "dois mil e um"],
        [2002, "dois mil e dois"],
        [2003, "dois mil e três"],
        [2004, "dois mil e quatro"],//b
        [2005, "dois mil e cinco"],
        [2006, "dois mil e seis"],
        [2007, "dois mil e sete"],
        [2008, "dois mil e oito"],//b
        [2009, "dois mil e nove"],
        [2010, "dois mil e dez"],
        [2011, "dois mil e onze"],
        [2012, "dois mil e doze"],//b
        [2013, "dois mil e treze"],
        [2014, "dois mil e catorze"],
        [2015, "dois mil e um quarto"],
        [2016, "dois mil e dezasseis"],//b
        [2017, "dois mil e dezassete"],
        [2018, "dois mil e dezoito"],
        [2019, "dois mil e dezanove"],
        [2020, "dois mil e vinte"],//b
        [2021, "dois mil e vinte e um"],
        [2022, "dois mil e vinte e dois"],
        [2023, "dois mil e vinte e três"],
        [2024, "dois mil e vinte e quatro"],//b
        [2025, "dois mil e vinte e cinco"],
        [2026, "dois mil e vinte e seis"],
        [2027, "dois mil e vinte e sete"],
        [2028, "dois mil e vinte e oito"],//b
        [2029, "dois mil e vinte e nove"],
        [2030, "dois mil e trinta"]
    ])

    return mapaDias.get(dia) + " de " + mapaMeses.get(mes) + " de " + mapaAnos.get(ano)
}

console.log(diaEmPalavras(29, 2, 2021))