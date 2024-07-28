class Conta {
    constructor(titular, senha, saldo) {
        this.titular = titular;
        this.senha = senha;
        this.saldo = saldo;
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}`);
        } else {
            console.log('Valor de depósito inválido.');
        }
    }

    sacar(valor) {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}`);
        } else {
            console.log('Valor de saque inválido ou saldo insuficiente.');
        }
    }
}

class ContaCorrente extends Conta {
    constructor(titular, senha, saldo, taxaJuros) {
        super(titular, senha, saldo);
        this.taxaJuros = taxaJuros;
    }

    aplicarJuros() {
        this.saldo += (this.saldo * this.taxaJuros) / 100;
        console.log(`Juros aplicados. Saldo atual: R$${this.saldo}`);
    }
}

class ContaPoupanca extends Conta {
    constructor(titular, senha, saldo, rendimento) {
        super(titular, senha, saldo);
        this.rendimento = rendimento;
    }

    aplicarRendimento() {
        this.saldo += (this.saldo * this.rendimento) / 100;
        console.log(`Rendimento aplicado. Saldo atual: R$${this.saldo}`);
    }
}

window.onload = function() {
    document.getElementById("logar").addEventListener("click", function() {
        var titular = document.getElementById("titular").value;
        var senha = document.getElementById("senha").value;

        console.log(`Conta: ${titular}, Senha: ${senha}`);

        // Exemplo de conta para autenticação (isso deve ser substituído pela lógica correta)
        var contaExemplo = new Conta("usuario", "1234", 1000);

        if (titular === contaExemplo.titular && senha === contaExemplo.senha) {
            console.log('Titular autenticado com sucesso');
            // Lógica adicional para autenticação
        } else {
            console.log('Titular não encontrado');
            // Lógica para quando o titular não for encontrado
        }
    });
}
