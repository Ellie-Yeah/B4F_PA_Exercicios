//***********exercicios de controlo de fluxo 
/*javascript - 1 - 3 - Exercício #3

Cria uma função que recebe como argumentos um dia e um mês e retorna a estação do ano.
Caso o número do dia inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 31."
Caso o número do mês inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um mês entre 1 e 12."
Nos meses em que os dias só vão até ao 30 deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 30."
No mês de Fevereiro só pode aceitar o número de dias até 28, caso seja inserido um número diferente deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 28." [mais específico primeiro]

Utiliza o que aprendeste sobre ***if...else*** para resolver este exercício.*/
/*
function calculaEstacaoDoAno(dia, mes) {

    //condições para os dias e meses
    //fevereiro
    if (mes === 2 && (dia < 1 || dia > 28)) {
        return "Por favor introduza um dia entre 1 e 28.";
    }
    //dias
    // Validation conditions:
    //if (dia < 1 && dia > 31) will never be true, because a number can't be less than 1 and greater than 31 at the same time. Use OR (||) instead. [copilot]
    if (dia < 1 || dia > 31) {
        return "Por favor introduza um dia entre 1 e 31.";
    }
    //meses de 30 dias
    if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30) {
        return "Por favor introduza um dia entre 1 e 30.";
    }

    //meses
    if (mes < 1 || mes > 12) {
        return "Por favor introduza um mês entre 1 e 12.";
    }


    //as condições da função
    if ((mes === 3 && dia >= 21) || (mes === 4) || (mes === 5) || (mes === 6 && dia <= 20)) {
        return "Primavera";
    } else if ((mes === 6 && dia >= 21) || (mes === 7) || (mes === 8) || (mes === 9 && dia <= 20)) {
        return "Verão";
    } else if ((mes === 9 && dia >= 21) || (mes === 10) || (mes === 11) || (mes === 12 && dia <= 20)) {
        return "Outono";
    } else if ((mes === 12 && dia >= 21) || (mes === 1) || (mes === 2) || (mes === 3 && dia <= 20)) {
        return "Inverno";
    }
    //desta forma, mostrada pelo copilot: temos parte do 1ºmes corresponde a cada estação, mais ou outros 2 meses completos e finalmente a outra parte do ultimo mes de cada estação.

}
*/
/////////////////////////////////////////////////////////////////
/*javascript - 1 - 3 - Exercício #4

Cria uma função que recebe como argumentos um dia e um mês e retorna o dia do ano correspondente (entre 1 e 365).

Caso o número do dia inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 31."
Caso o número do mês inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um mês entre 1 e 12."
Nos meses em que os dias só vão até ao 30 deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 30."
No mês de Fevereiro só pode aceitar o número de dias até 28, caso seja inserido um número diferente deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 28."

Utiliza o que aprendeste sobre if...else para resolver este exercício.
*/
/*
const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//copilot criou um array com o ultimo dia de cada mês

function calculaDiaDoAno(dia, mes) {

    if (mes === 2 && (dia < 1 || dia > 28)) {
        return "Por favor introduza um dia entre 1 e 28.";
    }

    if (dia < 1 || dia > 31) {
        return "Por favor introduza um dia entre 1 e 31.";
    }

    if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30) {
        return "Por favor introduza um dia entre 1 e 30.";
    }

    if (mes < 1 || mes > 12) {
        return "Por favor introduza um mês entre 1 e 12.";
    }



    let soma = 0;
    for (let i = 0; i < mes - 1; i++) {
        soma += diasPorMes[i];
    }
    return soma + dia;

    //nesta parte, o copilot criou uma variavel para guardar o numero total de dias de todos os meses até uma determinada data
    //foi criado um loop para iterar com o array diasPorMes
    //isto adiciona (à variavel soma) os dias de todos os meses antes do mes dos argumentos da função
    //depois de somar todos os dias dos meses anteriores, adiciona o dia(argumento), para obter o dia do ano

}

console.log(calculaDiaDoAno(31, 12))*/
/*
a resolução acima funcionava mas não era aceite pela plataforma:
resolução aceite abaixo: function calculaDiaDoAno(dia, mes) {
    // Validação do mês
    if (mes < 1 || mes > 12) {
        return "Por favor introduza um mês entre 1 e 12.";
    }
    // Validação dos dias
    if (mes === 2) {
        if (dia < 1 || dia > 28) {
            return "Por favor introduza um dia entre 1 e 28.";
        }
    } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
        if (dia < 1 || dia > 30) {
            return "Por favor introduza um dia entre 1 e 30.";
        }
    } else {
        if (dia < 1 || dia > 31) {
            return "Por favor introduza um dia entre 1 e 31.";
        }
    }

    // Soma dos dias dos meses anteriores sem array
    let soma = 0;
    if (mes > 1) soma += 31; // Janeiro
    if (mes > 2) soma += 28; // Fevereiro
    if (mes > 3) soma += 31; // Março
    if (mes > 4) soma += 30; // Abril
    if (mes > 5) soma += 31; // Maio
    if (mes > 6) soma += 30; // Junho
    if (mes > 7) soma += 31; // Julho
    if (mes > 8) soma += 31; // Agosto
    if (mes > 9) soma += 30; // Setembro
    if (mes > 10) soma += 31; // Outubro
    if (mes > 11) soma += 30; // Novembro

    return soma + dia;
}*/
//////////////////////////////////////////////////////////

//javascript - 1 - 3 - Exercício #5
/*
Cria uma função que recebe como argumentos um dia e um mês e retorna o signo correspondente.

Caso o número do dia inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 31."

Caso o número do mês inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um mês entre 1 e 12."

Nos meses em que os dias só vão até ao 30 deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 30."

No mês de Fevereiro só pode aceitar o número de dias até 28, caso seja inserido um número diferente deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 28."

Os signos estão divididos da seguinte maneira:
    Carneiro - 21.03 a 20.04
    Touro - 21.04 a 20.05
    Gémeos - 21.05 a 20.06
    Caranguejo - 21.06 a 22.07
    Leão - 23.07 a 22.08
    Virgem - 23.08 a 22.09
    Balança - 23.09 a 22.10
    Escorpião - 23.10 a 21.11
    Sagitário - 22.11 a 21.12
    Capricórnio - 22.12 a 20.01
    Aquário - 21.01 a 18.02
    Peixes - 19.02 a 20.03
usar if...else
*/
/*
function calculaSigno(dia, mes) {
    if (mes < 1 || mes > 12) {
        return "Por favor introduza um mês entre 1 e 12.";
    }

    if (mes === 2) {
        if (dia < 1 || dia > 28) {
            return "Por favor introduza um dia entre 1 e 28.";
        }
    } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
        if (dia < 1 || dia > 30) {
            return "Por favor introduza um dia entre 1 e 30.";
        }
    } else {
        if (dia < 1 || dia > 31) {
            return "Por favor introduza um dia entre 1 e 31.";
        }
    }

    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 20)) {
        return "Carneiro";
    } else
        if ((mes === 4 && dia >= 21) || (mes === 5 && dia <= 20)) {
            return "Touro";
        } else
            if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
                return "Gémeos";
            } else
                if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
                    return "Caranguejo";
                } else
                    if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
                        return "Leão";
                    } else
                        if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
                            return "Virgem";
                        } else
                            if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
                                return "Balança";
                            } else
                                if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
                                    return "Escorpião";
                                } else
                                    if ((mes === 11 && dia >= 21) || (mes === 12 && dia <= 21)) {
                                        return "Sagitário";
                                    } else
                                        if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 20)) {
                                            return "Capricórnio";
                                        } else
                                            if ((mes === 1 && dia >= 21) || (mes === 2 && dia <= 18)) {
                                                return "Aquário";
                                            } else
                                                if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
                                                    return "Peixes";
                                                }
}
console.log(calculaSigno(9, 10))
*/

/////////////////////////////////////////////////
//javascript - 1 - 3 - Exercício #6
/*
Cria uma função que recebe como argumentos um dia e um mês e retorna o número de dias em falta para o Natal.

Caso o número do dia inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 31."

Caso o número do mês inserido seja inválido deve retornar a mensagem de erro: "PPor favor introduza um mês entre 1 e 12."

Nos meses em que os dias só vão até ao 30 deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 30."

No mês de Fevereiro só pode aceitar o número de dias até 28, caso seja inserido um número diferente deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 28."

No dia 25 de Dezembro deve retornar a seguinte mensagem: "Hoje é Natal!"

Nos restantes dias deve retornar a seguinte mensagem: "Faltam x dias até ao Natal."
*/

/*
function calculaDiasAteAoNatal(dia, mes) {
    if (mes < 1 || mes > 12) {
        return "Por favor introduza um mês entre 1 e 12.";
    }

    if (mes === 2) {
        if (dia < 1 || dia > 28) {
            return "Por favor introduza um dia entre 1 e 28.";
        }
    } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
        if (dia < 1 || dia > 30) {
            return "Por favor introduza um dia entre 1 e 30.";
        }
    } else {
        if (dia < 1 || dia > 31) {
            return "Por favor introduza um dia entre 1 e 31.";
        }
    }
    if (mes === 12 && dia === 25) {
        return `Hoje é Natal!`
    }
    let soma = 0;
    if (mes > 1) soma += 31; // Janeiro
    if (mes > 2) soma += 28; // Fevereiro
    if (mes > 3) soma += 31; // Março
    if (mes > 4) soma += 30; // Abril
    if (mes > 5) soma += 31; // Maio
    if (mes > 6) soma += 30; // Junho
    if (mes > 7) soma += 31; // Julho
    if (mes > 8) soma += 31; // Agosto
    if (mes > 9) soma += 30; // Setembro
    if (mes > 10) soma += 31; // Outubro
    if (mes > 11) soma += 30; // Novembro

    let diaDoAno = soma + dia;

    // Calcula o dia do ano para o Natal (25/12)
    let diaNatal = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 25;

    let diasEmFalta = diaNatal - diaDoAno;
    //este if faz tipo um loop, de modo a que possa voltar a contar os 365 dias
    if (diasEmFalta < 0) {
        diasEmFalta += 365;
    }
    return `Faltam ${diasEmFalta} dia(s) até ao Natal`


}
console.log(calculaDiasAteAoNatal(24, 12))
*/


//////////////////////////////////////
//javascript - 1 - 3 - Exercício #7
/*
Cria uma função que recebe como argumento um número t e retorna os meses desse trimestre.

Correspondências:

1 - Janeiro, Fevereiro, Março
2 - Abril, Maio, Junho
3 - Julho, Agosto, Setembro
4 - Outubro, Novembro, Dezembro

Quando recebe um número diferente deve retornar a mensagem: "Número inválido. Por favor insira um número entre 1 e 4."

Utiliza o que aprendeste sobre switch...case para resolver este exercício.*/
/*
function trimestresDoAno(t) {
    switch (t) {
        case 1:
            return "Janeiro, Fevereiro, Março"
            break;
        case 2:
            return "Abril, Maio, Junho"
            break;
        case 3:
            return "Julho, Agosto, Setembro"
            break;
        case 4:
            return "Outubro, Novembro, Dezembro"
            break;
        default:
            return "Número inválido. Por favor insira um número entre 1 e 4."
            break;
    }
}

console.log(trimestresDoAno(4))
*/
/////////////////////////////////////////////////////
//javascript - 1 - 3 - Exercício #8
/*
Cria uma função que recebe como argumento um número m e retorna o mês correspondente.

Correspondências:

1 - Janeiro
2 - Fevereiro
3 - Março
4 - Abril
5 - Maio
6 - Junho
7 - Julho
8 - Agosto
9 - Setembro
10 - Outubro
11 - Novembro
12 - Dezembro

Quando recebe um número diferente deve retornar a mensagem: "Número inválido. Por favor insira um número entre 1 e 12."
Usar Switch..case.*/
/*
function mesesDoAno(m) {
    switch (m) {
        case 1:
            return "Janeiro"
            break;
        case 2:
            return "Fevereiro"
            break;
        case 3:
            return "Março"
        case 4:
            return "Abril"
            break;
        case 5:
            return "Maio"
            break;
        case 6:
            return "Junho"
            break;
        case 7:
            return "Julho"
            break;
        case 8:
            return "Agosto"
            break;
        case 9:
            return "Setembro"
            break;
        case 10:
            return "Outubro"
            break;
        case 11:
            return "Novembro"
            break;
        case 12:
            return "Dezembro"
            break;
        default:
            return "Número inválido. Por favor insira um número entre1 e 12."
            break;
    }
}
console.log(mesesDoAno(10))
*/
/////////////////////////////////////////////////////////////
//javascript - 1 - 3 - Exercício #9
/*
Cria uma função que recebe como argumento um número e retorna a soma de todos os números do zero até ao número inclusive.

Utiliza o que aprendeste sobre *while* para resolver este exercício.*/
/*
function somatorioAteN(n) {
    let y = 0; //começamos do zero
    let soma = 0; //criamos uma variável para guardar a soma de todos os nºs até n
    while (y <= n) {// o ciclo se repete enquanto y for <n e vai até (=)n.
        soma += y; //adicionamos o valor atual de y à soma
        y++; //incrementa o y em 1, ao passar para o próximo numero
        console.log(y) //apenas para visualização dos numeros que foram dados (e calculados)
    }
    //quando y>n o ciclo termina, saimos do while e é nos retornada a soma
    return soma;
    //a soma de todos os numeros de 0 até n inclusive;
};

console.log(somatorioAteN(5))
////////////////////////////////////////////
//javascript - 1 - 3 - Exercício #10

/*
Cria uma função que recebe como argumento um número e retorna o fatorial desse número.

Utiliza o que aprendeste sobre *while* para resolver este exercício.*/
/*
function fatorialN(n) {

    let resultado = 1; //começamos por 1 porque é o elemento neutro da multipl1cação, aqui guardaremos os resultados das operações
    while (n > 1) { //o ciclo rep+ete-se enquanto n for maior que 1
        resultado *= n;  //aqui, vamos multiplocar o resultado por n
        n--;  //n vai diminuindo em 1, a cada ciclo
    }
    return resultado;

}
console.log(fatorialN(2));*/
//está a funcionar mas a plataforma não o aceita


///////////////////////////////////////////////
//javascript - 1 - 3 - Exercício #11
/*
Cria uma função que recebe como argumento um número e retorna a soma de todos os quadrados de um até ao número inclusive.

Utiliza o que aprendeste sobre *for* (loop) para resolver este exercício.
*/
/*
function somaQuadradosAteN(n) {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
        soma += i ** 2;
    }
    return soma;
}
console.log(somaQuadradosAteN(4));*/
////////////////////////////////////////////////////////////////////////
//javascript - 1 - 3 - Exercício #12
/*
Cria uma função que recebe como argumentos dois valores e conta o número de pares que existem entre esses dois valores, incluindo os próprios se forem pares.

Caso sejam introduzidos dois valores iguais deve retornar a mensagem de erro: "Por favor introduza dois valores diferentes."

Utiliza o que aprendeste sobre *for* para resolver este exercício.*/
/*
function contaParesEntreDoisValores(valor1, valor2) {
    if (valor1 === valor2) {
        return "Por favor introduza dois valores diferentes."
    }
    // Garantir que valor1 é o menor[copilot]
    let inicio = Math.min(valor1, valor2);
    let fim = Math.max(valor1, valor2);

    let pares = "";
    for (let i = inicio; i <= fim; i++) { //para o i começar no valor mais baixo (inicio) e ir verificando um a um (i++), até ao valor mais alto (fim)
        if (i % 2 === 0) {
            pares++; //assim vai contando e incrementando na variável

        }
    }
    return pares;
}
console.log(contaParesEntreDoisValores(1, 10))
*/

/////////////////////////////////
//javascript - 1 - 3 - Exercício #13
/*
Cria uma função que recebe como argumento um número e retorna o número de vezes em que é possível fazer a divisão inteira desse número por 2.

Utiliza o que aprendeste sobre *for* para resolver este exercício.*/
function contaNumeroDeDivisoesPorDois(n) {

    let contaDivs = 0; //variavel para guardar a contagem
    for (;n>=2;n=Math.floor(n/2)) { //não se justifica criar uma nova variavel dentro deste loop, passa-se para a fase seguinte: para se realizar as operações pedidas, n tem que ser > ou = a 2; a seguir vamos dividir o n por dois, mas com o math.floor que vai permitir que o loop faça as divisões até que o resultado (inteiro) seja menor que 2, aí sai do loop. 
        contaDivs++; //a cada volta do loop que cumpre os requisitos, vai incrementando o contador
    }
    return contaDivs;
}

console.log(contaNumeroDeDivisoesPorDois(4));