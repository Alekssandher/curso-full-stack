const Conta = require("conta")

export class ContaPoupanca extends Conta{
    constructor(titular, saldo, rendimento){
        super(titular, saldo)
        this.rendimento = rendimento
    }

    aplicarRendimento(valor){
        this.saldo += (this.saldo * this.rendimento) / 100
        valor = saldo
    }
}

module.exports = ContaPoupanca