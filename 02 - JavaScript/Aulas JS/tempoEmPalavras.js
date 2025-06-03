/*javascript - 1 - 6 - Exercício #2

A função tempoEmPalavras recebe como argumentos a hora(h) e o minuto(m).

Implementa a função para retornar a hora dita em português com os números por extenso.

Regras:

    A hora varia entre 0 e 23
    O minuto varia entre 0 e 59
    Depois do minuto 30, deve ser dito, por exemplo, "dez para as cinco"
    12 horas devem ser lidas como meio dia
    00 horas devem ser lidas como meia noite
    As horas da tarde devem ser lidas iguais às da manhã, exceto meio dia e meia noite
    A hora certa deve ser seguida pela expressão "em ponto",
    30 minutos devem ser lidos como "meia"
    15 minutos devem ser lidos como "um quarto"

Utiliza o que aprendeste sobre *Map*
para resolver este exercício.*/

function tempoEmPalavras(horas, minutos) {
    let horasMap = new Map([
        [0, "meia noite"],
        [1, "uma"],
        [2, "duas"],
        [3, "três"],
        [4, "quatro"],
        [5, "cinco"],
        [6, "seis"],
        [7, "sete"],
        [8, "oito"],
        [9, "nove"],
        [10, "dez"],
        [11, "onze"],
        [12, "meio dia"],
        [13, "uma"],
        [14, "duas"],
        [15, "três"],
        [16, "quatro"],
        [17, "cinco"],
        [18, "seis"],
        [19, "sete"],
        [20, "oito"],
        [21, "nove"],
        [22, "dez"],
        [23, "onze"]
    ]);

    let minutosMap = new Map([
        [0, "em ponto"],
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
        [30, "meia"],

        //... para x hora
        [59, "um"],
        [58, "dois"],
        [57, "três"],
        [56, "quatro"],
        [55, "cinco"],
        [54, "seis"],
        [53, "sete"],
        [52, "oito"],
        [51, "nove"],
        [50, "dez"],
        [49, "onze"],
        [48, "doze"],
        [47, "treze"],
        [46, "catorze"],
        [45, "um quarto"],
        [44, "dezasseis"],
        [43, "dezassete"],
        [42, "dezoito"],
        [41, "dezanove"],
        [40, "vinte"],
        [39, "vinte e um"],
        [38, "vinte e dois"],
        [37, "vinte e três"],
        [36, "vinte e quatro"],
        [35, "vinte e cinco"],
        [34, "vinte e seis"],
        [33, "vinte e sete"],
        [32, "vinte e oito"],
        [31, "vinte e nove"],
    ]);

    return horasMap.get(horas) + " e " + minutosMap.get(minutos)
}

console.log(tempoEmPalavras(10, 20))

//funciona mas para a plataforma não está totalmente correto