const Conta = require("./conta")

class ContaCorrente extends Conta {
    constructor(titular, senha, saldo, limite) {
        super(titular, senha, saldo)
        this.limite = limite
    }

    // função para calcular o saldo com o valor da taxa inserida pelo usuário
    aplicarJuros(taxa) {
        if (taxa > 0) {
            let juros = this.saldo * (taxa / 100)
            this.saldo += juros
            console.log(`Juros de ${taxa}% aplicado. Novo saldo: R$${this.saldo}`)
        } else {
            console.log("Taxa de juros inválida.")
        }
    }
}

module.exports = ContaCorrente
