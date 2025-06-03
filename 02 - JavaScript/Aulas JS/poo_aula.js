//exercício 3
class Tampo {}
class Perna {}

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

