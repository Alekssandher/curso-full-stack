// classe construida
class Conta {
    constructor(titular, senha, saldo) {
        this.titular = titular
        this.senha = senha
        this.saldo = saldo
    }

    // funções para realizar depósitos, saques e exibir o saldo
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor
            console.log(`Depósito de R$${valor} realizado com sucesso.`)
        } else {
            console.log("Valor de depósito inválido.")
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor
            console.log(`Saque de R$${valor} realizado com sucesso.`)
        } else {
            console.log("Valor de saque inválido ou saldo insuficiente.")
        }
    }

    exibirSaldo() {
        console.log(`Saldo de ${this.titular}: R$${this.saldo}`)
    }
}

module.exports = Conta
