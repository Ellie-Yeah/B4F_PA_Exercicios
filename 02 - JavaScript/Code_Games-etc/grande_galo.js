//todo
//fazer o tabuleiro, 3 arrays, com strings _
//tabuleiro não pode ser alterado, logo temos que fazer um "clone"
//funções que vão programar as jogadas


//tenho que definir jogadores, e colocar acima de tudo
let jogador = "";


const oJogo = {
    tabuleiro: [  //isto é um array, que tem arrays dentroe dele, mas não deixa de ser um array
        ["_", "_", "_"],
        ["_", "_", "_"],
        ["_", "_", "_"],
    ]
};

//fazer uma função que dá o tabuleiro de jogo
function adicionarJogada(jogo, jogador, linha, coluna) {
    if (jogo.tabuleiro[linha][coluna] === "_") {
        jogo.tabuleiro[linha][coluna] = jogador //tabuleiro é um array com duas dimensões, logo leva com dois indexes
        return jogo;
    }
};
//aqui lançamos o jogo, vemos se as coordenadas selecionadas estão livres e colocamos o simbolo do jogador
//depois recebemos um novo tabuleiro com a alteração efetuada

function obterJogadasPossiveis(jogo) { //função que recebe um jogo
    let jogadasPossiveis = []; //criar um array paara receber os resultados

    for (let i = 0; i < jogo.tabuleiro.length; i++) {
        for (let j = 0; j < jogo.tabuleiro.length; j++) {//Percorrer as linhas e colunas
            if (jogo.tabuleiro[i][j] === "_") {   //ver se as linhas e colunas estão livres, ou seja = "_"
                jogadasPossiveis.push({ linhas: i, colunas: j }) //aqui enviamos para o array, as coordenadas das posições livres, as jogadas possiveis
            }
        }
    }
    return jogadasPossiveis
};
console.log(obterJogadasPossiveis(oJogo));


function verificarVencedor(jogo) {

    for (let i = 0; i < jogo.tabuleiro.length; i++) {
        for (let j = 0; j < jogo.tabuleiro.length; j++) {//Percorrer as linhas e colunas

            if (jogo.tabuleiro[0][0] === jogo.tabuleiro[0][1] && jogo.tabuleiro[0][1] === jogo.tabuleiro[0][2]) {
                return oJogo.tabuleiro[0][0];
            }
            else if (jogo.tabuleiro[0][0] === jogo.tabuleiro[1][0] && jogo.tabuleiro[1][0] === jogo.tabuleiro[2][0]) {
                return oJogo.tabuleiro[0][0];
            }
            else if (jogo.tabuleiro[1][0] === jogo.tabuleiro[1][1] && jogo.tabuleiro[1][1] === jogo.tabuleiro[1][2]) {
                return oJogo.tabuleiro[1][0];
            }
            else if (jogo.tabuleiro[0][1] === jogo.tabuleiro[1][1] && jogo.tabuleiro[1][1] === jogo.tabuleiro[2][1]) {
                return oJogo.tabuleiro[0][1];
            }
            else if (jogo.tabuleiro[2][0] === jogo.tabuleiro[2][1] && jogo.tabuleiro[2][1] === jogo.tabuleiro[2][2]) {
                return oJogo.tabuleiro[2][0];
            }
            else if (jogo.tabuleiro[0][2] === jogo.tabuleiro[1][2] && jogo.tabuleiro[1][2] === jogo.tabuleiro[2][2]) {
                return oJogo.tabuleiro[0][2];
            }
            else if (jogo.tabuleiro[0][0] === jogo.tabuleiro[1][1] && jogo.tabuleiro[1][1] === jogo.tabuleiro[2][2]) {
                return oJogo.tabuleiro[0][0];
            }
            else if (jogo.tabuleiro[0][0] === jogo.tabuleiro[1][1] && jogo.tabuleiro[1][1] === jogo.tabuleiro[2][0]) {
                return oJogo.tabuleiro[0][0];
            }
            else {
                return `Undefined`;
            }
        }
    }
};
console.log(verificarVencedor(oJogo));


function verificarFimDoJogo(jogo) {

    for (let i = 0; i < jogo.tabuleiro.length; i++) {
        for (let j = 0; j < jogo.tabuleiro.length; j++) {//Percorrer as linhas e colunas
            if (verificarVencedor !== `Undefined`) {
                return true;
            } else if (obterJogadasPossiveis == 0) {
                return true;
            } else {
                return false;
            }
        }
    }
};
console.log(verificarFimDoJogo(oJogo));
