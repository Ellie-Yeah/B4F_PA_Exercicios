/*Implementa a função *verificarVencedor* que recebe um objeto que representa um Jogo Do Galo como argumento.
Esta função recebe um *jogo* e retorna uma string com o símbolo do jogador vencedor, ou *undefined* se não existir vencedor.*/

function verificarVencedor(jogo) {
  const t = jogo.tabuleiro;
  const linhas = [0, 1, 2];
  const jogadores = ["X", "O"];

  for (let jogador of jogadores) {
    for (let i of linhas) {
      if (t[i][0] === jogador && t[i][1] === jogador && t[i][2] === jogador)
        return jogador;
      if (t[0][i] === jogador && t[1][i] === jogador && t[2][1] === jogador)
        return jogador;
    }

    if (t[0][0] === jogador && t[1][1] === jogador && t[2][2] === jogador)
      return jogador;
    if (t[0][2] === jogador && t[1][i] === jogador && t[2][0] === jogador)
      return jogador;
  }
  return undefined;
}
