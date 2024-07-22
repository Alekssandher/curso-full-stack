const Veiculo = require("./veiculo")

class Moto extends Veiculo{
    constructor(marca, modelo, ano, tipo, combustivel, cilindrada){
        super(marca, modelo, ano, tipo, combustivel)
        this.cilindrada = cilindrada
    }
    
}

module.exports = Moto