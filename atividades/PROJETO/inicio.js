const prompt = require('prompt-sync')()

const exibirTexto = require("./sistemas/sistemas")
const acordar = require ("./cenas/floresta")


const Player = require('./personagens/player')

var escolha 
var nome
var player

var fugiu = false

//Função principal, que será chamada para dar início a execução do programa 

async function exibirTextosSequencialmente() {
    console.clear()
    await exibirTexto("")
    await exibirTexto("Você está diante de uma pessoa misteriosa, você não sabe quem ela é, um véu negro esconde a sua face, porém por sua silhueta você percebe que se trata de uma mulher.  ", 65);

    await pausa()
    await console.clear()
    await exibirTexto("“Chegue mais perto.” Ela diz com uma serena e doce voz.\nO que você faz?\n1 – Caminhar até Ela. 2 – Correr.\n", 65);
    

    await (escolha = prompt())

    switch (parseInt(escolha)) {
        case 1:
            console.clear()
            await exibirTexto("Você costumava se chamar", 65)
            await exibirTexto("...", 600)
            await exibirTexto(" Bem, não importa mais, isso ficou no passado, agora a ocasião exige que você tenha uma nova identidade, eu poderia escolher o seu nome, mas acho que essa é uma decisão que você deveria tomar sozinho.\n", 65)
            await (nome = prompt("Digite o seu nome: "))
            await criarPlayer(nome)
            await console.clear()
            await exibirTexto(`Estes são os seus status atuais:`)
            await exibirTexto(`Certo, ${player.nome}, acho que isso é tudo por enquanto. Agora é hora de você acordar...\n`, 65)
            await acordar(fugiu, player, pausa)
            

            break;
    
        case 2:
            console.clear()
            await exibirTexto("Você corre o mais rápido que consegue em direção ao eterno breu, a medida que você se distancia, um som se mistura ao som de seus passos e um grito é ouvido dizendo para você retornar. \nO que você faz?\n 1 – Parar de correr e se virar. 2 – Continuar a correr.\n", 65)

            
            correu()
            break
    }
    //Função que cria o player, sendo necessário passar um parâmetro nela
    function criarPlayer(newNome){
        player = new Player(newNome, 100, 10, 5, 50, 0) 
        
    }
    //Função que será chamada caso o usuário coloque para correr
    async function correu(){
        criarPlayer("Finn")
        fugiu = true

        await (escolha = prompt())
        //Switch de escolha para tela inicial
        switch (parseInt(escolha)) {
            case 1:
                console.clear()
                await exibirTexto("Você para, se vira e de longe vê aquela moça correndo em sua direção. E então você", 65)
                await exibirTexto("...", 600)
                await lembrete()
                await acordar(fugiu, player, pausa)
                break;
            
            case 2:
                console.clear()
                await exibirTexto("Você continua correndo com todas as suas forças em direção ao desconhecido, sem nem sequer pensar em olhar para trás.\n", 65)
                await lembrete()
                await acordar(fugiu, player, pausa)
                
            default:
                break;
        }
        
    }
    //Função que coloca uma mensagem específica, quando chamada
    async function lembrete(){
        await console.clear()
        await exibirTexto("Lembre-se", 100)
        await exibirTexto("...", 600)
        await console.clear()
        await exibirTexto("Suas ações possuem consequências", 100)
        pausa()
    }
    
}

//Função usada para colocar uma pausa
function pausa(textoPausa){
    if (textoPausa == null) {
        prompt("\nAperte enter para continuar")
    }else{
        prompt(`\n ${textoPausa}`)
    }
    
}
exibirTextosSequencialmente();


