const Conta = require("./conta")
const ContaCorrente = require("./contaCorrente")
const ContaPoupanca = require("./contaPoupanca")

const prompt = require('prompt-sync')()

// matriz que irá conter a conta dos usuários, sendo Conta - Conta Poupança - Conta Corrente respectivamente
const users = [
    [], 
    [],
    []
]

// variavél utilizada para controlar o indice das contas criadas
var index = 0

// variavel usada para verificar se já foi criado um usuário anteriormente
var usuarioCriado = false 

// function do menu inicial
function menuInicial() {
    console.clear()
    console.log("Seja bem-vindo ao Banco Feliz!")
    console.log("Digite 1 para criar uma conta")
    console.log("Digite 2 para logar")
    console.log("Digite 3 para fechar o programa")
    var escolha = prompt()

    switch (escolha) {
        case "1":
            criarConta()
            break

        case "2":
            logar()
            break

        case "3":
            console.log('Fim do programa!')
            process.exit()
            break
        default:
            console.clear()
            console.log("Escolha inválida. Por favor, digite 1, 2 ou 3 para continuar.")
            retornar()
            menuInicial()
            break
    }
}

function criarConta() {
    console.clear()

    // pede valores ao usuario e os armazena dentro duma variavel
    var nome = prompt("Digite o seu nome: ")
    var senha = prompt("Crie uma senha: ")

    // cria variaveis para inserir os valores dentro das classes
    var newConta = new Conta(nome, senha, 0)
    var newContaPoupanca = new ContaPoupanca(nome, senha, 0, 0)
    var newContaCorrente = new ContaCorrente(nome, senha, 0, 0)

    // insere os novos objetos criados dentro de uma matriz
    users[0].push(newConta)
    users[1].push(newContaPoupanca)
    users[2].push(newContaCorrente)

    // teste se o array está exibindo os valores corretamente
    // console.log(users)

    // aviso ao usuário de que a conta foi criada
    console.log(`Usuário ${users[0][users[0].length - 1].titular} criado com sucesso.`)
    if(usuarioCriado == true){
        console.log("Para logar com ele retorne ao menu inicial.")
    }
    prompt("Pressione enter para continuar")
    // passa a variavel para verdadeiro para que da próxima vez que for criada uma conta o usuário tenha instruções de como prosseguir para acessar a nova conta
    usuarioCriado = true
    acessarContasMenu()
}

function acessarContasMenu() {
    console.clear()
    console.log(`Olá ${users[0][index].titular}`)
    console.log(`O seu saldo é de R$${users[0][index].saldo}`)
    console.log("Qual conta você deseja acessar?")
    console.log("1 - Conta Poupança")
    console.log("2 - Conta Corrente")
    console.log("3 - Retornar ao menu inicial")
    var contaAcessada = prompt()

    switch (contaAcessada) {
        case "1":
            contaPoupanca()
            break

        case "2":
            contaCorrente()
            break
        case "3":
            menuInicial()
            break
        default:
            console.log("Digite um valor válido")
            retornar()
            acessarContasMenu()
            break
    }
}

function contaPoupanca() {
    console.clear()
    console.log(`Olá ${users[1][index].titular}`)
    console.log(`O seu saldo atual é de R$${users[1][index].saldo}`)
    console.log("Pressione 1 para aplicar seus rendimentos")
    console.log("Pressione 2 para depositar")
    console.log("Pressione 3 para sacar")
    console.log("Pressione 4 para voltar ao menu da conta")
    console.log("Pressione 5 para voltar à tela inicial")

    var opcoes = prompt()

    switch (opcoes) {
        case "1":
            users[1][index].aplicarRendimento()
            prompt("Pressione Enter para continuar.")
            contaPoupanca() // voltar ao menu após aplicar o rendimento
            break

        case "2":
            console.log("Qual o valor do depósito?")
            var valorDeposito = prompt()
            valorDeposito = parseFloat(valorDeposito)
            if (isNaN(valorDeposito) || valorDeposito <= 0) {
                console.log("Por favor, insira um valor válido para depósito.")
                prompt("Pressione Enter para continuar.")
                contaPoupanca()
                return
            }

            users[1][index].depositar(valorDeposito)
            prompt("Pressione Enter para continuar.")
            contaPoupanca()
            break

        case "3":
            console.log("Qual o valor do saque?")
            var valorSaque = prompt()
            valorSaque = parseFloat(valorSaque)
            if (isNaN(valorSaque) || valorSaque <= 0) {
                console.log("Por favor, insira um valor válido para saque.")
                prompt("Pressione Enter para continuar.")
                contaPoupanca()
                return
            }

            users[1][index].sacar(valorSaque)
            prompt("Pressione Enter para continuar.")
            contaPoupanca()
            break

        case "4":
            acessarContasMenu()
            break

        case "5":
            menuInicial()
            break

        default:
            console.log("Digite um valor válido")
            prompt("Pressione Enter para continuar.")
            contaPoupanca()
    }
}

function contaCorrente() {
    console.clear()
    console.log(`Olá ${users[2][index].titular}`)
    console.log(`O seu saldo atual é de R$${users[2][index].saldo}`)
    console.log("Pressione 1 para aplicar juros")
    console.log("Pressione 2 para depositar")
    console.log("Pressione 3 para sacar")
    console.log("Pressione 4 para voltar ao menu da conta")
    console.log("Pressione 5 para voltar à tela inicial")

    var opcoes = prompt()

    switch (opcoes) {
        case "1":
            console.log("Qual a taxa de juros em porcentagem?")
            var taxa = prompt()
            taxa = parseFloat(taxa)
            if (isNaN(taxa) || taxa < 0) {
                console.log("Por favor, insira uma taxa de juros válida.")
                prompt("Pressione Enter para continuar.")
                contaCorrente()
                return
            }

            users[2][index].aplicarJuros(taxa)
            console.clear()
            console.log(`Seu saldo atual é de R$${users[2][index].saldo}`)
            prompt("Pressione Enter para continuar.")
            contaCorrente() // volta ao menu após aplicar juros
            break

        case "2":
            console.log("Qual o valor do depósito?")
            var valorDeposito = prompt()
            valorDeposito = parseFloat(valorDeposito)
            if (isNaN(valorDeposito) || valorDeposito <= 0) {
                console.log("Por favor, insira um valor válido para depósito.")
                prompt("Pressione Enter para continuar.")
                contaCorrente()
                return
            }

            users[2][index].depositar(valorDeposito)
            prompt("Pressione Enter para continuar.")
            contaCorrente()
            break

        case "3":
            console.log("Qual o valor do saque?")
            var valorSaque = prompt()
            valorSaque = parseFloat(valorSaque)
            if (isNaN(valorSaque) || valorSaque <= 0) {
                console.log("Por favor, insira um valor válido para saque.")
                prompt("Pressione Enter para continuar.")
                contaCorrente()
                return
            }

            users[2][index].sacar(valorSaque)
            prompt("Pressione Enter para continuar.")
            contaCorrente()
            break

        case "4":
            acessarContasMenu()
            break

        case "5":
            menuInicial()
            break

        default:
            console.log("Digite um valor válido")
            prompt("Pressione Enter para continuar.")
            contaCorrente()
    }
}

function logar() {
    console.clear()
    const nome = prompt("Digite seu nome: ")
    const senha = prompt("Digite sua senha: ")

    // verifica a existência do usuário e valida a senha
    for (let i = 0; i < users.length; i++) {
        const userArray = users[i]
        for (let j = 0; j < userArray.length; j++) {
            if (userArray[j].titular === nome && userArray[j].senha === senha) {
                currentUser = userArray[j]
                index = j
                indexContas = i
                acessarContasMenu()
                return
            }
        }
    }

    console.log("Nome ou senha inválidos. Tente novamente.")
    prompt("Pressione Enter para continuar.")
    menuInicial()
}

// função para evitar digitação desnecessária
function retornar() {
    prompt("Pressione enter para retornar")
    console.clear()
}

// inicia o programa
menuInicial()
