/*javascript - 1 - 7 - Exercício #8
Cria uma função que recebe um raio como argumento e calcula a área da superfície de uma esfera.*/

function superficieDaEsfera(raio) {
    // escreve aqui a função
}

/*
5. Esfera
Área Total: ( A = 4 \cdot \pi \cdot r^2 )
Onde ( r ) é o raio da esfera.
*/

//copilot:
function superficieDaEsfera(raio) {
    if (raio <= 0) {
        return "O raio deve ser maior que zero.";
    }
    const area = 4 * Math.PI * Math.pow(raio, 2);
    return area;
}

// Exemplo de uso:
console.log(superficieDaEsfera(5)); // Output: 314.1592653589793
////////////////////////

/*javascript - 1 - 7 - Exercício #9
Cria uma função que recebe um lado como argumento e calcula a área da superfície de um cubo.*/

function superficieDoCubo(lado) {
    return 6 * lado ** 2
}

/*1. Cubo
Área Total: ( A = 6 \cdot a^2 )
Onde ( a ) é o comprimento da aresta.*/
////////////////////////////
/*
javascript - 1 - 7 - Exercício #10
Cria uma função que recebe o lado da base e o comprimento como argumentos e calcula a área da superfície de um paralelepípedo quadrado.*/

function superficieDoParalelepipedoQuadrado(ladodabase, comprimento) {
    return ((ladodabase * ladodabase) * 2) + ((ladodabase * comprimento) * 4)
}

/*2. Paralelepípedo
Área Total: ( A = 2 \cdot (ab + bc + ac) )
Onde ( a ), ( b ), e ( c ) são as dimensões do paralelepípedo.*/
/////////////////////////////////////

/*javascript - 1 - 7 - Exercício #11
Cria uma função que recebe o lado da base e a altura como argumentos e calcula a área da superfície de uma pirâmide quadrada.*/

function superficieDaPiramideQuadrada(ladodabase, altura) {
    return ((ladodabase ** 2) + ((ladodabase * altura) / 2)*4)
}

/*
copilot:

6. Pirâmide
Área Total: ( A = A_{\text{base}} + A_{\text{lateral}} )
Onde ( A_{\text{base}} ) é a área da base e ( A_{\text{lateral}} ) é a soma das áreas das faces laterais.*/
/*function superficieDaPiramideQuadrada(ladoBase, alturaPiramide) {
    // Calcula a altura do triângulo usando o Teorema de Pitágoras
    const alturaTriangulo = Math.sqrt(Math.pow(ladoBase / 2, 2) + Math.pow(alturaPiramide, 2));

    // Calcula a área da base
    const areaBase = Math.pow(ladoBase, 2);

    // Calcula a área lateral (4 triângulos)
    const areaLateral = 2 * ladoBase * alturaTriangulo;

    // Calcula a área total
    const areaTotal = areaBase + areaLateral;

    return areaTotal;
}*/