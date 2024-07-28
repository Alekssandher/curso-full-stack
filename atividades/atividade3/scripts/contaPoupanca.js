const Conta = require("./conta")

class ContaPoupanca extends Conta {
    constructor(titular, senha, saldo, rendimento = 0) {
        super(titular, senha, saldo)
        this.rendimento = rendimento
        this.taxaJuros = 6.17 // taxa de juros fixa da poupança
    }

    // função para realizar o cálculo do saldo com a taxa de juros
    aplicarRendimento() {
        let rendimentoValor = this.saldo * (this.taxaJuros / 100)
        this.saldo += rendimentoValor
        console.log(`Rendimento de ${this.taxaJuros}% aplicado. Novo saldo: R$${this.saldo}`)
    }
}

module.exports = ContaPoupanca
