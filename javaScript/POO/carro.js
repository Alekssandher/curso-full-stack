
const Veiculo = require("./veiculo")

class Carro extends Veiculo{
    constructor(marca, modelo, ano, tipo, combustivel, numPortas) {
        super(marca, modelo, ano, tipo, combustivel)
        this.numPortas = numPortas
    }

    show(){
        console.log(`${this.marca} Modelo: ${this.modelo}, ano ${this.ano} \nTipo: ${this.tipo}, Combustivel: ${this.combustivel}`)
    }
}

module.exports = Carro