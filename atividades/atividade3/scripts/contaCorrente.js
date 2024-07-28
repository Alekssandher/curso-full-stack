const Conta = require("./conta")

class ContaCorrente extends Conta{
    constructor(titular, saldo, taxaJuros){
        super(titular, saldo)
        this.taxaJuros = taxaJuros
    }
    
    aplicarJuros(valor){
        this.saldo += (this.saldo * this.taxaJuros) / 100
        valor = saldo
    }
}

module.exports = ContaCorrente
