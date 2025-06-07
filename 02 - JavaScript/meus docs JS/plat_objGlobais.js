/*javascript - 1 - 7 - Exercício #2

Cria uma função que recebe dois inteiros como argumentos e retorna o valor absoluto maior.*/

function maiorAbsoluto(a, b) {
    a = Math.round(a);
    b = Math.round(b);
    return Math.max(Math.abs(a), Math.abs(b));
}
////////////////////////////////////////////////////////////////////////
/*javascript - 1 - 7 - Exercício #3

Cria uma função que recebe um decimal como argumento e retorna o inteiro mais próximo inferior.*/

function inteiroMaisPróximoInferior(d) {
    return Math.floor(d)
}

////////////////////////////////////////////////////////////////////////
/*javascript - 1 - 7 - Exercício #4

Cria uma função que recebe um decimal como argumento e retorna o inteiro mais próximo superior.*/

function inteiroMaisProximoSuperior(d) {
    return Math.ceil(d)
}

////////////////////////////////////////////////////////////////////////
/*javascript - 1 - 7 - Exercício #5

Cria uma função que recebe um decimal como argumento e retorna o número arredondado às décimas, recorrendo ao arredondamento padrão (que aprendeste em Matemática).*/
function arredondarAsDecimas(d) {
    return Math.round(d * 10) / 10;
}
/*GitHub Copilot:
Para arredondar um número às décimas (uma casa decimal) em JavaScript, multiplicas o número por 10, arredondas com Math.round(), e depois divides por 10.
Isto porque Math.round() só arredonda a números inteiros.

Exemplo:
let numero = 3.14159;
let arredondado = Math.round(numero * 10) / 10; // Resultado: 3.1
--------------------------
Explicação:
Multiplicas por 10 para mover a casa decimal para a direita.
Arredondas para o inteiro mais próximo.
Divides por 10 para voltar à posição original, agora arredondada às décimas.*/


///////////////////////////////////////////////
/*javascript - 1 - 7 - Exercício #6

Cria uma função que recebe um array como argumento e retorna o valor mais baixo desse array*/
function valorMaisBaixoDoArray(array) {
    return Math.min(...array);
}
//copilot: A forma correta é usar o operador spread (...) para passar todos os elementos do array para Math.min

///////////////////////////////////////
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
    return ((ladodabase ** 2) + ((ladodabase * altura) / 2) * 4)
}


copilot:

function superficieDaPiramideQuadrada(ladoBase, alturaPiramide) {
    // Calcula a altura inclinada (apotema lateral) de uma face triangular
    const apotema = Math.sqrt(Math.pow(ladoBase / 2, 2) + Math.pow(alturaPiramide, 2));
    // Área da base
    const areaBase = Math.pow(ladoBase, 2);
    // Área lateral (4 triângulos)
    const areaLateral = 2 * ladoBase * apotema;
    // Área total
    return areaBase + areaLateral;
}


/*Explicação:

A área da base é ladoBase².
Cada face lateral é um triângulo com base ladoBase e altura igual à apotema lateral.
A apotema lateral é calculada usando o Teorema de Pitágoras:
  apotema = sqrt((ladoBase/2)² + alturaPiramide²)
A área lateral total são 4 triângulos: 4 * (ladoBase * apotema) / 2 = 2 * ladoBase * apotema.
Soma a área da base com a área lateral para obter a área total.
*/
////////////////////////////////////////////////////
/*javascript - 1 - 7 - Exercício #12

Cria uma função que recebe o raio e a altura como argumentos e calcula a área da superfície de um cone.*/

function superficieDoCone(raio, altura) {
    // escreve aqui a função
}
/*Área da superfície:
  A = π × r × (r + g)
onde r é o raio da base e g é a geratriz (lado inclinado).*/

//github
function superficieDoCone(raio, altura) {
    // Calcula a geratriz (g) usando o Teorema de Pitágoras
    const geratriz = Math.sqrt(Math.pow(raio, 2) + Math.pow(altura, 2));
    // Área da superfície: A = π × r × (r + g)
    return Math.PI * raio * (raio + geratriz);
}
////////////////////////////
/*javascript - 1 - 7 - Exercício #13

Cria uma função que recebe o raio e a altura como argumentos e calcula a área da superfície de um cilindro.*/
function superficieDoCilindro(raio, altura) {
    return 2 * Math.PI * raio * (raio + altura)
}
////////////////////////////////
/*javascript - 1 - 7 - Exercício #14

Cria uma função que recebe dois objetos do tipo Date como argumentos e retorna o tempo entre a primeira e a segunda string em dias (períodos de 24h).

O valor retornado deve ser sempre um número positivo e inteiro.

Utiliza o que aprendeste sobre DATE 
para resolver este exercício.*/
function diferencaEmDias(data1, data2) {
    // 1. Calcula a diferença em milissegundos (sempre positiva)
    const diffMs = Math.abs(data2 - data1);
    // 2. Converte de milissegundos para dias
    const diffDias = diffMs / (1000 * 60 * 60 * 24);
    // 3. Retorna o valor inteiro (dias completos)
    return Math.floor(diffDias);
}

/*Receber dois objetos Date
A função recebe dois argumentos, ambos do tipo Date.

Obter o valor em milissegundos de cada data
Cada objeto Date pode ser convertido para o número de milissegundos desde 1 de janeiro de 1970 usando .getTime() ou simplesmente subtraindo um do outro.

Calcular a diferença absoluta em milissegundos
Subtrai uma data da outra e usa Math.abs() para garantir que o resultado é sempre positivo.

Converter milissegundos em dias
Um dia tem 24 horas, cada hora tem 60 minutos, cada minuto tem 60 segundos, e cada segundo tem 1000 milissegundos.
Portanto, 1 dia = 24 × 60 × 60 × 1000 = 86_400_000 milissegundos.

Dividir a diferença de milissegundos pelo número de milissegundos em um dia
Isso dá o número de dias (pode ser decimal).

Arredondar para baixo para garantir um número inteiro de dias completos
Usa Math.floor() para garantir que só conta dias completos de 24h.*/

/*Tens de calcular em milissegundos porque os objetos Date em JavaScript guardam o tempo internamente como o número de milissegundos desde 1 de janeiro de 1970 (o chamado "Unix Epoch").
Quando subtrais dois objetos Date, o resultado é a diferença em milissegundos.

Como um dia tem 86 400 000 milissegundos (24 × 60 × 60 × 1000), divides essa diferença por esse valor para obter o número de dias.
Assim, consegues converter facilmente qualquer diferença de datas para dias, horas, minutos, etc., apenas mudando o fator de conversão.*/
////////////////////////////////

/*javascript - 1 - 7 - Exercício #15

Cria uma função que recebe duas datas e retorna a mais recente.*/