//Exercícios de Programação Orientada a Objectos (POO)

//Slide 1 - Exercício 1

/*Cria uma classe chamada Inteiro que tem:
um método estático eInteiro(n) que recebe um Number e retorna true se for um inteiro
uma propriedade estática nulo que está associado ao valor 0
*/

class Inteiro {
    static eInteiro(n) {
        return Number.isInteger(n);
    }
    static nulo = 0;
}
/////////////////////////

//Slide 1 - Exercício 2
/*Cria uma classe chamada ContadorDeInstancias que tem:
um construtor, que não recebe nenhum argumento nem define nenhuma propriedade da instância
uma propriedade estática instancias que tem o número de instâncias criadas até um determinado momento
*/

class ContadorDeInstancias {
    static instancias = 0;
    constructor() {
        ContadorDeInstancias.instancias++;
    }
}
/////////////////////////

//Slide 1 - Exercício 3
/*Cria uma classe chamada Mesa que tem:
    um construtor que recebe um Tampo;
    um método montaPerna(perna) que recebe uma Perna e retorna a Mesa em que a perna foi montada. Deves verificar que a Perna recebida é mesmo uma Perna;
    um método estaMontada() que retorna true apenas se a mesa já tiver 4 pernas montadas;
Também deves criar as classes Perna e Tampo.*/

class Tampo { }
class Perna { }

class Mesa {
    pernas = 0;
    constructor(tampo) {
        this.tampo = tampo;
    }

    montaPerna(perna) {
        if (perna instanceof Perna) {
            // instanceof = isto pertence à class Perna
            this.pernas++;
            return this;
        }
    }
    estaMontada() {
        return this.pernas === 4;//isto é uma comparação
    }
}

const batata = new Tampo
const perna1 = new Perna
const perna2 = new Perna
const perna3 = new Perna
const perna4 = new Perna
const mesa = new Mesa(batata)

console.log(mesa.montaPerna(perna1)) //Mesa { pernas: 1, tampo: Tampo {} }
console.log(mesa.montaPerna(perna2)) //Mesa { pernas: 2, tampo: Tampo {} }
console.log(mesa.montaPerna(perna3)) //Mesa { pernas: 3, tampo: Tampo {} }
console.log(mesa.estaMontada()) //false
console.log(mesa.montaPerna(perna4)) //Mesa { pernas: 4, tampo: Tampo {} }
console.log(mesa.estaMontada()) //true
///////////////////////////////////////////////////////////////

//Encapsulamento - Exercício 1
/*Cria uma classe chamada SoInteiro que tem uma propriedade chamada inteiro que só pode ser definida para um número inteiro.
Se houver uma tentativa inválida de alterar o valor da propriedade, este deve manter-se inalterado.
Podes utilizar o método isInteger do objeto global Number:
Number.isInteger(2)*/

class SoInteiro {
    #inteiro; //propriedade privada
    constructor(valor = 0) { //o constructor recebe um valor inicial de zero
        this.#inteiro = Number.isInteger(valor) ? valor : 0;
        //             se o valor é um Intenger
        //esse valor é associado ao #inteiro
        //                                   caso contrário é 0
    }
    get inteiro() {//método getter, para obter o valor do #inteiro
        return this.#inteiro;
    }
    set inteiro(novoValor) { //isto é para definir o novo valor de #inteiro, como Intenger
        if (Number.isInteger(novoValor)) {
            this.#inteiro = novoValor;
        }
        // If not integer, do nothing (value remains unchanged)
        //não tem else, então caso o if não se verifique, não acontece nada.
    }
};

///////////////////////////////////////////////////////////////

//Abstração - Exercício 1
/*Cria uma classe MaquinaDeCafe que implementa o funcionamento de uma máquina de café:
    fazCafe() que consome os centimos, imprime o estado atual da máquina no terminal e devolve o troco
    devolveTroco() que retira do deposito de centimos para troco,
    recebeCentimos(centimos) que simula a inserção de uma moeda
    cancelaOperacao() que devolve o valor inserido até um determinado momento
    esvaziaDepositoBorra() que esvazia o deposito de borra
    adicionaAgua(doses) que adiciona n doses de água ao depósito
    adicionaCafe(doses) que adiciona n doses de café ao depósito
    adicionaTroco(centimos) que adiciona n centimos ao depósito do troco
    toString() que devolve uma representação textual do estado completo da máquina do café

A classe deve ter no seu estado interno:
    a capacidade de cada um dos depósitos (água, café, borra, troco)
    o estado atual de cada um dos depósitos
    o valor introduzido pelo utilizador que ainda não foi utilizado para fazer café
    o valor recebido pelos cafés que foram feitos
    o custo de um café em cêntimos

Sugestão de Campos
    custoDoCafe - custo do café em cêntimos (definido no construtor)
    capacidadeDepositoBorra - capacidade em doses do depósito de borra (definido no construtor)
    centimosParaTroco - número de cêntimos disponíveis para troco
    centimosParaRecolha - número de cêntimos presentes para recolha
    dosesDeCafe - número de doses de café disponíveis
*/


///////////////////////////////////////////////////

//Polimorfismo - Exercício 1

/*Cria uma classe Porta com um método trancar e outro método destrancar que alteram o estado da propriedade trinco.

O trinco deve ser true se a porta estiver trancada e false se estiver destrancada.

Cria uma classe PortaBlindada que reimplementa os mesmos métodos, chamando o método da classe Porta para interagir com o trinco.

A diferença é que a PortaBlindada também tem as propriedades trincoSuperior, trincoInferior, trincoTraseiro.
*/


/////////////////////////////////////////////////////

//Polimorfismo - Exercício 2
/*
Cria uma classe Rectangulo com o método calculaArea(). Um rectângulo tem duas propriedades: altura e largura.

Cria uma classe Quadrado que herda de Rectangulo, definindo apenas o seu construtor com um argumento: lado.
*/

////////////////////////////////////////////
//Singleton - Exercício 1
/*Implementa uma classe Calculadora, garantindo que apenas existe uma instância de calculadora.
Deves implementar métodos para:
    somar 2 números
    subtrair 2 números
    multiplicar 2 números
    dividir 2 números
    imprimir o histórico de operações com o resultado
    Nota
Não existe nenhum motivo para que a Calculadora tenha de ser um singleton, neste caso é apenas conveniente porque garantimos que o histórico é de um único objeto.

Avalia caso a caso a necessidade.
*/



//////////////////////////////////////////////
//Composite - Exercício 1
/*
Cria uma classe File e uma classe Directory em que:
    Ambos têm um name
    Uma Directory é uma File que tem um array de Files
    Ambos têm um método print que imprime o nome e os seus ficheiros.
*/


//////////////////////////////////
//Observer - Exercício 1
/*
Implementa as classes Channel e Subscriber de forma a que o Subscriber seja notificado sempre que um novo vídeo é adicionado ao Channel
*/


//////////////////////////////////
//Observer - Exercício 2
/*
Implementa as classes Stock e User de forma a que o User seja notificado sempre que um Stock tem uma variação superior a 1%.
*/