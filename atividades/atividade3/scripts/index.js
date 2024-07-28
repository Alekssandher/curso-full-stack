const Conta = require("./conta");
const ContaCorrente = require("./contaCorrente");
const ContaPoupanca = require("./contaPoupanca");

const prompt = require('prompt-sync')();

const users = []

function menuInicial(){
    console.log("Seja bem vindo ao Banco Feliz!")
    console.log("Digite 1 para criar uma conta ou 2 para logar")
    var escolha = prompt()

    switch (escolha) {
        case "1":
            criarConta()
            break
    
        case "2":
            logar()
            break
        default:
            console.clear()
            console.log("Escolha inválida. Por favor, digite 1 ou 2.");
            retornar()
            menuInicial()
            break
    }
}
function criarConta(){
    console.clear()

    var nome = prompt("Digite o seu nome: ")
    var senha = prompt("Crie uma senha: ")
    
    var newConta = new Conta(nome, senha, 0)
    var newContaPoupanca = new ContaPoupanca(nome, senha, 0, 0)
    var newContaCorrente = new ContaCorrente(nome, senha, 0, 0)

    users.push(newConta)
    

    console.log(`Usuário ${users[0].titular} criado com sucesso.`)
    prompt("Precione enter para continuar")
    acessarContas()
}
function acessarContas(){

    console.clear()
    console.log("Qual conta você deseja acessar?")
    console.log("1 - Conta Poupança")
    console.log("2 - Conta Corrente")
    var contaAcessada = prompt()

    switch (contaAcessada) {
        case "1":
            contaPoupanca()
            break;
    
        case "2":
            contaCorrente()
            break;
        default:
            console.log("Digite um valor válido")
            retornar()
            acessarContas()
            break
    }

}

// contaPoupanca(){

// } 
function retornar(){
    prompt("Precione enter para voltar a tela inicial")
    console.clear()
}

menuInicial()
