const Conta = require("./conta")

class ContaPoupanca extends Conta{
    constructor(titular,senha, saldo, rendimento){
        super(titular,senha, saldo)
        this.rendimento = rendimento
    }

    aplicarRendimento(valor){
        this.rendimento = valor
        this.saldo += (this.saldo * valor) / 100
        
    }
}

module.exports = ContaPoupanca
