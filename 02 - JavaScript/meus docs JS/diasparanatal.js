function calculaDiasAteAoNatal(dia, mes) {
    if (mes < 1 || mes > 12) {
        return "PPor favor insira um mês entre 1 e 12.";
    }

    if (mes === 2) {
        if (dia < 1 || dia > 28) {
            return "Por favor insira um dia entre 1 e 28.";
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
        return "Hoje é Natal!";
    }
    let soma = 0;
    if (mes > 1) soma += 31;
    if (mes > 2) soma += 28;
    if (mes > 3) soma += 31;
    if (mes > 4) soma += 30;
    if (mes > 5) soma += 31;
    if (mes > 6) soma += 30;
    if (mes > 7) soma += 31;
    if (mes > 8) soma += 31;
    if (mes > 9) soma += 30;
    if (mes > 10) soma += 31;
    if (mes > 11) soma += 30;
    let diaDoAno = soma + dia;

    let diaNatal = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 25;

    let diasEmFalta = diaNatal - diaDoAno;

    if (diasEmFalta < 0) {
        diasEmFalta += 365;
    }
    return `Faltam ${diasEmFalta} dias até ao Natal.`
}