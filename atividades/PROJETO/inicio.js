// Importa o módulo prompt-sync para obter a entrada do usuário
const prompt = require('prompt-sync')()

// Importa a função para exibir textos e a função para acordar da caverna
const exibirTexto = require("./sistemas/sistemas")
const acordar = require ("./cenas/floresta")

// Importa a classe Player para criar instâncias de jogadores
const Player = require('./personagens/player')

// Declara variáveis para armazenar a escolha do jogador, nome e instância do player
var escolha 
var nome
var player

// Declara uma variável para verificar se o jogador fugiu
var fugiu = false

// Função principal que inicia a execução do programa
async function inicio() {
    // Limpa o console e exibe o texto inicial
    console.clear()
    await exibirTexto("")
    await exibirTexto("Você está diante de uma pessoa misteriosa, você não sabe quem ela é, um véu negro esconde a sua face, porém por sua silhueta você percebe que se trata de uma mulher.  ", 50);

    // Espera a entrada do usuário para continuar
    await pausa()
    await console.clear()
    await exibirTexto("“Chegue mais perto.” Ela diz com uma serena e doce voz.\nO que você faz?\n1 – Caminhar até Ela. 2 – Correr.\n", 50);
    
    // Obtém a escolha do usuário
    await (escolha = prompt())

    // Avalia a escolha do usuário
    switch (parseInt(escolha)) {
        case 1:
            // Limpa o console e exibe o texto se o jogador decidir caminhar até a mulher
            console.clear()
            await exibirTexto("Você costumava se chamar", 50)
            await exibirTexto("...", 600)
            await exibirTexto(" Bem, não importa mais, isso ficou no passado, agora a ocasião exige que você tenha uma nova identidade, eu poderia escolher o seu nome, mas acho que essa é uma decisão que você deveria tomar sozinho.\n", 50)
            // Obtém o novo nome do jogador
            await (nome = prompt("Digite o seu nome: "))
            // Cria uma nova instância do jogador com o nome fornecido
            await criarPlayer(nome)
            await console.clear()
            await exibirTexto(`Estes são os seus status atuais:\n`, 50)

            //Exibe os status atuais do player com uma função do próprio objeto
            await player.status()

            await exibirTexto(`Certo, ${player.nome}, acho que isso é tudo por enquanto. Agora é hora de você acordar...\n`, 50)
            await pausa("Precione enter para continuar")
            // Chama a função para acordar na caverna
            await acordar(fugiu, player, pausa)
            break;
    
        case 2:
            // Limpa o console e exibe o texto se o jogador decidir correr
            console.clear()
            await exibirTexto("Você corre o mais rápido que consegue em direção ao eterno breu, a medida que você se distancia, um som se mistura ao som de seus passos e um grito é ouvido dizendo para você retornar. \nO que você faz?\n 1 – Parar de correr e se virar. 2 – Continuar a correr.\n", 50)
            // Chama a função que lida com a decisão de correr
            correu()
            break
    }

    // Função para criar uma instância do jogador
    function criarPlayer(newNome){
        player = new Player(newNome, 100, 25, 5, 50, 0) 
    }

    // Função que será chamada se o usuário decidir correr
    async function correu(){
        // Cria uma instância do jogador com um nome padrão
        criarPlayer("Finn")
        // Marca que o jogador fugiu
        fugiu = true

        // Obtém a nova escolha do usuário
        await (escolha = prompt())
        // Avalia a escolha do usuário
        switch (parseInt(escolha)) {
            case 1:
                // Limpa o console e exibe o texto se o jogador decidir parar e se virar
                console.clear()
                await exibirTexto("Você para, se vira e de longe vê aquela moça correndo em sua direção. E então você", 50)
                await exibirTexto("...", 600)
                await lembrete()
                await acordar(fugiu, player, pausa)
                break;
            
            case 2:
                // Limpa o console e exibe o texto se o jogador continuar correndo
                console.clear()
                await exibirTexto("Você continua correndo com todas as suas forças em direção ao desconhecido, sem nem sequer pensar em olhar para trás.\n", 50)
                await lembrete()
                await acordar(fugiu, player, pausa)
                break;
                
            default:
                break;
        }
    }

    // Função que exibe uma mensagem específica
    async function lembrete(){
        await console.clear()
        await exibirTexto("Lembre-se", 100)
        await exibirTexto("...", 600)
        await console.clear()
        await exibirTexto("Suas ações possuem consequências", 100)
        pausa()
    }
}

// Função usada para colocar uma pausa e esperar a entrada do usuário
function pausa(textoPausa){
    if (textoPausa == null) {
        prompt("\nAperte enter para continuar")
    } else {
        prompt(`\n ${textoPausa}`)
    }
}

// Chama a função principal para iniciar o programa
inicio();
