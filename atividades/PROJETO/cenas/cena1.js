const prompt = require('prompt-sync')()

const exibirTexto = require("../sistemas/exibirTexto")

const dormir = require ("./dormir")

const Lobo = require('./../personagens/lobo')

var escolha
var nome
var lobo
var loboVive
var dormiuNaCaverna = false
var fugiuLobo
async function acordar(fugiu, player, pausa){
    console.clear()
    

    if (fugiu) {
       
        await exibirTexto("Você sente seu coração batendo forte enquanto tenta entender onde está. As lembranças de sua fuga ainda são frescas na sua mente, você se lembra de cada detalhe, aquela conversa havia sido real demais para ser apenas um pesadelo. O lugar onde acordou é uma clareira cercada por árvores altas e densas. A luz da lua penetra suavemente pelas copas das árvores, criando padrões de sombra no chão. \n", 10);
        escolher()



    } else {
        await exibirTexto("Você acorda perto de uma clareira, o lugar ao seu redor parece ser um campo aberto cercado por árvores altas e densas, A luz da lua penetra suavemente pelas copas das árvores, criando padrões de sombra no chão. Você se lembra da mulher misteriosa e suas palavras ainda ecoam na sua mente.", 10);
        escolher()
    }
    
    async function escolher(){

        player.fome -= 10

        await exibirTexto("Você se levanta e se depara com um caminho de pedras a sua frente. \n O que você faz?\n1 - Seguir o caminho de pedras. 2 - Investigar os arredores\n", 10)
        await (escolha = prompt())

        switch (parseInt(escolha)) {
            case 1:
                console.clear()
                encontroLobo()
                break;
            
            case 2:
                player.itens += 2

                console.clear()
                await exibirTexto("Você decide explorar a clareira mais detalhadamente e encontra uma pequena bolsa de couro oculta entre as raízes de uma árvore e dentro dela você acha duas barrinhas de cereal.\n", 10)
                await exibirTexto("Após isso, você decide que é hora de ir e segue pelo caminho de pedras\n",10)

                await encontroLobo()
                break
            default:
                break;
        }

    }
    async function encontroLobo(){
        console.clear()
        await exibirTexto("Você continua sua jornada pela floresta, seguindo o caminho que se estende à sua frente.Subitamente, você sente os primeiros pingos de chuva caindo sobre sua pele.\n", 10)

        await exibirTexto("A chuva começa a cair com mais intensidade, encharcando o solo e tornando a trilha escorregadia. As árvores ao seu redor oferecem alguma proteção, mas você sabe que precisa encontrar um abrigo rapidamente.\n", 10)

        await exibirTexto("Enquanto busca um lugar seguro, você ouve um rosnado baixo e ameaçador vindo de um arbusto próximo. Seus olhos se ajustam à penumbra e, à sua frente, surge um lobo de pelagem escura. Seus olhos brilhantes refletem a luz da lua que começa a se esconder atrás das nuvens. O lobo está claramente em posição de ataque, rosnando e mostrando os dentes afiados.\n", 10)

        await exibirTexto("O que você faz?\n1 - Enfrentar o lobo. 2 - Tentar acalmar o lobo. 3 - Tentar fugir\n", 10)
        await (escolha = prompt())

        switch (parseInt(escolha)) {
            case 1:
                
                break;
            case 2:
                if (player.itens > 0){

                    loboVive = true
                    player.itens -= 1
                    console.clear()
                    await exibirTexto("Você decide tentar uma abordagem mais pacífica. Com calma, você abre sua mochila e pega uma das barrinhas de cereal. Mantendo uma postura não ameaçadora, avança lentamente em direção ao lobo, segurando a barrinha na mão.\n", 10)
                    await exibirTexto("Você estende a barrinha de cereal em direção ao lobo. O animal observa com cautela, seus olhos fixos na comida. O rosnado do lobo diminui gradualmente, e ele parece intrigado pela oferta.", 10)
                    await exibirTexto("Com um movimento hesitante, o lobo se aproxima e, após um breve momento de hesitação, pega a barrinha de cereal com a boca. Ele começa a comer lentamente, suas feições relaxando conforme a fome é saciada\n", 10)
                    await exibirTexto("Enquanto o lobo come, você percebe que ele está começando a confiar em você. Seus olhos mostram uma expressão mais amigável, e ele para de rosnar. Depois de terminar a barrinha de cereal, o lobo se aproxima e espera, sinal de que aceita sua companhia.\n", 10)
                    await exibirTexto("O seu novo animalzinho de estimação precisa de um nome! Qual nome você gostaria de dar a ele?\n", 10)
                    await (nome = prompt("Digite um nome: "))
                    await criarLobo(nome)

                    
                    await console.clear()
                    await exibirTexto(`O lobo parece aceitar o nome, abanando levemente a cauda em resposta. Com ${lobo.nome} ao seu lado, você se sente mais confiante. Vocês decidem que é hora de achar um lugar para ficar, um abrigo seguro onde possam descansar e se proteger da tempestade que continua a cair.\n`, 10)

                    await exibirTexto(`A noite é escura e a chuva constante torna a busca desafiadora. Mas, com ${lobo.nome} guiando o caminho, vocês seguem adiante, explorando cada canto e fenda na esperança de encontrar um refúgio. A presença de ${lobo.nome} ao seu lado oferece conforto, e seus instintos de caça ajudam a evitar perigos e a encontrar possíveis abrigos.\n`, 10)

                    await exibirTexto(`Depois de algum tempo, vocês avistam uma pequena caverna escondida por entre as árvores e rochas. Aproximando-se com cautela, você percebe que é um lugar seguro, longe do alcance da tempestade e grande o suficiente para você e ${lobo.nome}.\n`, 10)

                    await exibirTexto(`Vocês entram na caverna, e a sensação de segurança é imediata. As paredes de pedra oferecem proteção contra o vento e a chuva, e o espaço é aconchegante. ${lobo.nome} se deita ao seu lado, parecendo igualmente aliviado.\n`, 10)

                    await exibirTexto(`Com o som suave da chuva lá fora e o calor da presença de ${lobo.nome}, você se deita e fecha os olhos. A exaustão finalmente toma conta de você, e o sono chega rapidamente. Saber que ${lobo.nome} está ali, vigiando e protegendo, traz uma sensação de segurança que você não sentia há muito tempo.\n`, 10)

                    dormiuNaCaverna = true
                    loboVive = true
                    await dormir(player, fugiu, lobo, loboVive, dormiuNaCaverna)
                } else if(player.itens == 0){
                    await exibirTexto("Com o lobo à sua frente, você percebe que a agressão pode não ser a melhor resposta. Lembrando-se de histórias sobre como os animais às vezes reagem bem à gentileza, decide tentar acalmá-lo.\n", 10)

                    await exibirTexto("Você se aproxima lentamente, mantendo as mãos visíveis e falando em um tom calmo e suave. Você estende lentamente a mão na direção do lobo, com a palma voltada para cima, tentando mostrar que não representa uma ameaça. O lobo hesita por um momento, mas então, em vez de se acalmar, ele avança e morde sua mão.\n", 10)
                }
                break
            case 3:
                console.clear()
                await exibirTexto("Com o coração acelerado e a adrenalina correndo em suas veias, você dá meia volta e começa a correr o mais rápido que consegue. Cada músculo em seu corpo está em alerta máximo, e você sente o vento cortante da tempestade em seu rosto.\n", 10)

                await exibirTexto("O lobo, surpreso com sua reação, começa a correr atrás de você. Seus passos são rápidos e pesados, e o som de suas patas batendo no chão mistura-se com o barulho da chuva e do vento. A chuva torrencial torna o terreno escorregadio, mas seu desespero faz com que você continue a correr, ignorando o cansaço e a dor.\n", 10)

                await exibirTexto("Você olha para trás e vê o lobo cada vez mais distante. Apesar de sua velocidade e agilidade, ele parece incapaz de continuar. Sua corrida é uma mistura de pura determinação e medo, que juntas tornam o lobo incapaz de lhe alcançar, o fazendo ficar cada vez mais distante.\n", 10)

                await exibirTexto("Com o lobo despistado, as coisas parecem mais seguras agora. Então você decide que é hora de procurar um lugar para passar a noite. A escuridão da floresta é densa e os sons noturnos começam a ecoar ao seu redor, mas você mantém a calma e continua caminhando, atento a qualquer sinal de perigo.\n", 10)

                await exibirTexto("Após um tempo de procura você decide que a melhor opção é subir em uma árvore alta, onde ficará fora do alcance de predadores. Após encontrar uma árvore robusta com galhos grossos, você escala cuidadosamente até encontrar um galho seguro que irá aguentar o seu peso sem quebrar.\n", 10)
                await exibirTexto("Com a visão panorâmica da floresta ao seu redor, você se sente mais seguro.Você se encosta na arvore e, apesar de não ser o lugar mais confortável do mundo, eventualmente você pega no sono com o som dos grilos e da chuva caindo nas folhas.\n", 10)

                dormiuNaCaverna = false
                loboVive = true
                fugiuLobo = true
                await dormir(player, fugiu, lobo, loboVive, dormiuNaCaverna)
                break
            default:
                break;
        }
        
    }
    function criarLobo(newNome){
        lobo = new Lobo(newNome, 100, 10, 5, 10) 
        
    }

}

module.exports = acordar