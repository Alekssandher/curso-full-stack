import {Conta} from '/conta.js'

import {ContaCorrente} from 'contaCorrente.js'
import {ContaPoupanca} from 'contaPoupanca.js'

// Criando uma lista de contas para comparação
let contas = [
    new Conta('João', 1000),
    new Conta('Maria', 1500),
    new Conta('José', 2000)
];

window.onload = function() {
    document.getElementById("logar").addEventListener("click", function() {
        var titular = document.getElementById("titular").value;
        var senha = document.getElementById("senha").value;

        // Testando se o valor está sendo pego corretamente
        console.log(`Conta: ${titular}, Senha: ${senha}`);

        // Comparando com cada titular de cada conta
        let contaEncontrada = contas.find(conta => conta.titular === titular);

        if (contaEncontrada) {
            console.log('Titular autenticado com sucesso');
            // Lógica adicional para autenticação
        } else {
            console.log('Titular não encontrado');
            // Lógica para quando o titular não for encontrado
        }
    });
}
