const prompt = require('prompt-sync')()

const exibirTexto = require("./sistemas/exibirTexto")
const acordar = require ("./cenas/cena1")

const Personagens = require("./personagens/player")
const Player = require('./personagens/player')

var escolha 
var nome
var player

var fugiu = false
async function exibirTextosSequencialmente() {
    console.clear()
    await exibirTexto("Você está diante de uma pessoa misteriosa, você não sabe quem ela é, um véu negro esconde a sua face, porém por sua silhueta você percebe que se trata de uma mulher.  ", 10);

    await pausa()
    await console.clear()
    await exibirTexto("“Chegue mais perto, criança.” Ela diz com uma serena e doce voz.\nO que você faz?\n1 – Caminhar até Ela. 2 – Correr.\n", 10);
    

    await (escolha = prompt())

    switch (parseInt(escolha)) {
        case 1:
            console.clear()
            await exibirTexto("Você costumava se chamar", 10)
            await exibirTexto("...", 600)
            await exibirTexto(" Bem, não importa mais, isso ficou no passado, agora a ocasião exige que você tenha uma nova identidade, eu poderia escolher o seu nome, mas acho que essa é uma decisão que você deveria tomar sozinho.\n", 10)
            await (nome = prompt("Digite o seu nome: "))
            await criarPlayer(nome)
            
            await exibirTexto(`Certo, ${player.nome}, acho que isso é tudo por enquanto. Agora é hora de você acordar...\n`, 10)
            await acordar(fugiu, player)
            

            break;
    
        case 2:
            console.clear()
            await exibirTexto("Você corre o mais rápido que consegue em direção ao eterno breu, a medida que você se distancia, um som se mistura ao som de seus passos e um barulho de choro é ouvido. \nO que você faz?\n 1 – Parar de correr e se virar. 2 – Continuar a correr.\n", 10)

            
            correu()
            break
    }
    function criarPlayer(newNome){
        player = new Player(newNome, 100, 10, 5, 50) 
        
    }

    async function correu(){
        criarPlayer("Finn")
        fugiu = true

        await (escolha = prompt())
        
        switch (parseInt(escolha)) {
            case 1:
                console.clear()
                await exibirTexto("Você para, se vira e de longe vê aquela moça com as mãos no rosto, exprimindo leves soluços de dor. E então você", 10)
                await exibirTexto("...", 600)
                await lembrete()
                await acordar(fugiu, player)
                break;
            
            case 2:
                console.clear()
                await exibirTexto("Você continua correndo com todas as suas forças em direção ao desconhecido, sem nem sequer pensar em olhar para trás.\n", 10)
                await lembrete()
                await acordar(fugiu, player)
                
            default:
                break;
        }
        
    }
    async function lembrete(){
        await console.clear()
        await exibirTexto("Lembre-se", 100)
        await exibirTexto("...", 600)
        await console.clear()
        await exibirTexto("Suas ações possuem consequências", 100)
        pausa()
    }
    
}

function pausa(){
    prompt("\nAperte enter para continuar")
}
exibirTextosSequencialmente();


