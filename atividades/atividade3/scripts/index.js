const Conta = require("./conta");
const ContaCorrente = require("./contaCorrente");
const ContaPoupanca = require("./contaPoupanca");

const prompt = require('prompt-sync')();

const users = [
    [], 
    [],
    []
]

var indexContas = 0;
var index = 0;

function menuInicial() {
    console.clear();
    console.log("Seja bem vindo ao Banco Feliz!");
    console.log("Digite 1 para criar uma conta ou 2 para logar");
    var escolha = prompt();

    switch (escolha) {
        case "1":
            criarConta();
            break;

        case "2":
            logar();
            break;

        default:
            console.clear();
            console.log("Escolha inválida. Por favor, digite 1 ou 2.");
            retornar();
            menuInicial();
            break;
    }
}

function criarConta() {
    console.clear();

    var nome = prompt("Digite o seu nome: ");
    var senha = prompt("Crie uma senha: ");

    var newConta = new Conta(nome, senha, 0);
    var newContaPoupanca = new ContaPoupanca(nome, senha, 0, 0);
    var newContaCorrente = new ContaCorrente(nome, senha, 0, 0);

    users[0].push(newConta);
    users[1].push(newContaPoupanca);
    users[2].push(newContaCorrente);

    console.log(users);
    console.log(`Usuário ${users[0][users[0].length - 1].titular} criado com sucesso.`);
    prompt("Precione enter para continuar");
    acessarContasMenu();
}

function acessarContasMenu() {
    console.clear();
    console.log(`Olá ${users[0][index].titular}`);
    console.log(`O seu saldo é de ${users[0][index].saldo} reais`);
    console.log("Qual conta você deseja acessar?");
    console.log("1 - Conta Poupança");
    console.log("2 - Conta Corrente");
    var contaAcessada = prompt();

    switch (contaAcessada) {
        case "1":
            contaPoupanca();
            break;

        case "2":
            contaCorrente();
            break;

        default:
            console.log("Digite um valor válido");
            retornar();
            acessarContasMenu();
            break;
    }
}

function contaPoupanca() {
    console.clear();
    console.log(`Olá ${users[1][index].titular}`);
    console.log(`O seu saldo atual é de ${users[1][index].saldo} reais`);
    console.log("Pressione 1 para aplicar seus rendimentos");
    console.log("Pressione 2 para voltar ao menu da conta");
    console.log("Pressione 3 para voltar à tela inicial");

    var opcoes = prompt();

    switch (opcoes) {
        case "1":
            console.log("Qual o seu rendimento em porcentagem?");
            var rendimento = prompt();
            rendimento = parseFloat(rendimento); // Converter para número decimal
            if (isNaN(rendimento) || rendimento < 0) {
                console.log("Por favor, insira um valor válido de rendimento.");
                prompt("Pressione Enter para continuar.");
                contaPoupanca();
                return;
            }

            users[1][index].aplicarRendimento(rendimento);
            console.clear();
            console.log(`Seu saldo atual é de ${users[1][index].saldo}`);
            prompt("Pressione Enter para continuar.");
            contaPoupanca(); // Voltar ao menu após aplicar o rendimento
            break;

        case "2":
            acessarContasMenu();
            break;

        case "3":
            menuInicial();
            break;

        default:
            console.log("Digite um valor válido");
            prompt("Pressione Enter para continuar.");
            contaPoupanca();
    }
}

function retornar() {
    prompt("Pressione enter para retornar");
    console.clear();
}

menuInicial();
