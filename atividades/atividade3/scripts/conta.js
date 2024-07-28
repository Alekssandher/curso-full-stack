class Conta{
    constructor(titular, senha, saldo) {
        this.titular = titular
        this.senha = senha
        this.saldo = saldo
        
    }

    depositar(valor) {
        if (valor > 0) {  // Verifica se o valor a ser depositado é positivo
            this.saldo += valor;  // Adiciona o valor ao saldo
            console.log(`Depósito de R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}`);
        } else {
            console.log('Valor de depósito inválido.');  // Mensagem para valores negativos ou zero
        }
    }
    sacar(valor) {
        if (valor > 0) {  // Verifica se o valor a ser depositado é positivo
            this.saldo -= valor;  // Adiciona o valor ao saldo
            console.log(`Saque R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}`);
        } else {
            console.log('Valor de saque inválido.');  // Mensagem para valores negativos ou zero
        }
    }
}

module.exports = Conta
