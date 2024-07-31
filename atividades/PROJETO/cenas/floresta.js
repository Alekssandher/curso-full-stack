const prompt = require('prompt-sync')()

const exibirTexto = require("../sistemas/sistemas")
// const lutar = require("../sistemas/sistemas")

const dormir = require ("./dormir")

const Inimigo = require('../personagens/inimigos')

var escolha
var nome
var lobo
var loboVive
var dormiuNaCaverna = false
var fugiuLobo

async function acordar(fugiu, player, pausa){
    
    console.clear()
    

    if (fugiu) {
       
        await exibirTexto("Você sente seu coração batendo forte enquanto tenta entender onde está. As lembranças de sua fuga ainda são frescas na sua mente, você se lembra de cada detalhe, aquela conversa havia sido real demais para ser apenas um pesadelo. O lugar onde acordou é uma clareira cercada por árvores altas e densas. A luz da lua penetra suavemente pelas copas das árvores, criando padrões de sombra no chão. \n", 70);
        escolher()



    } else {
        await exibirTexto("Você acorda perto de uma clareira, o lugar ao seu redor parece ser um campo aberto cercado por árvores altas e densas, A luz da lua penetra suavemente pelas copas das árvores, criando padrões de sombra no chão. Você se lembra da mulher misteriosa e suas palavras ainda ecoam na sua mente.", 70);
        escolher()
    }
    
    async function escolher(){

        player.fome -= 10

        await exibirTexto("Você se levanta e se depara com um caminho de pedras a sua frente. \n O que você faz?\n1 - Seguir o caminho de pedras. 2 - Investigar os arredores\n", 70)
        await (escolha = prompt())

        switch (parseInt(escolha)) {
            case 1:
                console.clear()
                await encontroLobo()
                break;
            
            case 2:
                player.itens += 2

                console.clear()
                await exibirTexto("Você decide explorar a clareira mais detalhadamente e encontra uma pequena bolsa de couro oculta entre as raízes de uma árvore e dentro dela você acha duas barrinhas de cereal.\n", 70)
                await exibirTexto("Após isso, você decide que é hora de ir e segue pelo caminho de pedras\n", 70)

                await pausa()
                console.clear()

                await encontroLobo()
                break
            default:
                break;
        }

    }
    async function encontroLobo(){
        console.clear()
        await exibirTexto("Você continua sua jornada pela floresta, seguindo o caminho que se estende à sua frente.Subitamente, você sente os primeiros pingos de chuva caindo sobre sua pele.\n", 70)

        await exibirTexto("A chuva começa a cair com mais intensidade, encharcando o solo e tornando a trilha escorregadia. As árvores ao seu redor oferecem alguma proteção, mas você sabe que precisa encontrar um abrigo rapidamente.\n", 70)

        await exibirTexto("Enquanto busca um lugar seguro, você ouve um rosnado baixo e ameaçador vindo de um arbusto próximo. Seus olhos se ajustam à penumbra e, à sua frente, surge um lobo de pelagem escura. Seus olhos brilhantes refletem a luz da lua que começa a se esconder atrás das nuvens. O lobo está claramente em posição de ataque, rosnando e mostrando os dentes afiados.\n", 70)

        await exibirTexto("O que você faz?\n1 - Enfrentar o lobo. 2 - Tentar acalmar o lobo. 3 - Tentar fugir\n", 70)
        await (escolha = prompt())

        switch (parseInt(escolha)) {
            case 1:
                await exibirTexto("Você sente o frio da chuva encharcando suas roupas enquanto encara o lobo de pelagem escura à sua frente. A fera rosna, os dentes à mostra, e você percebe que não há como escapar dessa situação. Suas mãos estão vazias, sem nenhuma arma ou objeto que possa usar para se defender. Mesmo assim, decide enfrentar o lobo com coragem.\n", 70)



                await criarLobo("Lobo")
                await lutar(player, lobo, 
                    // Texto caso o jogador vença
                    `A chuva continua a cair pesadamente enquanto você luta desesperadamente contra o lobo de pelagem escura. Seus golpes são rápidos, mas a fera é ágil e forte, tornando cada momento um teste de sobrevivência. Suas forças começam a diminuir, mas uma determinação feroz surge dentro de você.\nCom um grito de guerra, você avança contra o lobo, desviando de suas garras afiadas e desferindo um golpe decisivo. O lobo solta um uivo de dor e recua, mas você não lhe dá chance de se recuperar. Com uma série de movimentos rápidos e precisos, você ataca novamente, acertando o lobo no flanco.\nO lobo cambaleia, sua respiração se torna irregular. Seus olhos ainda brilham com uma fúria selvagem, mas a força está se esvaindo de seu corpo. Com um último esforço, você avança e, com toda a sua força, desferindo um golpe final que atinge o lobo no peito. A fera solta um último rosnado antes de cair no chão, imóvel.\nA chuva continua a cair, misturando-se ao sangue que escorre pelos seus ferimentos e ao do lobo. Você se afasta lentamente do corpo inerte do animal, sentindo a exaustão tomar conta. A dor e o cansaço são intensos, mas a sensação de vitória é inegável. Você sobreviveu.\n`, 

                    // Texto caso o jogador perca
                    `A chuva continua a cair pesadamente enquanto você luta desesperadamente contra o lobo de pelagem escura. Seus golpes são rápidos, mas a fera é ágil e forte, tornando cada momento um teste de sobrevivência. Suas forças começam a diminuir, e o cansaço toma conta do seu corpo. O lobo, percebendo sua fraqueza, avança com ainda mais ferocidade.\nVocê tenta se defender, mas um golpe mal calculado faz com que perca o equilíbrio e caia no chão lamacento. O lobo aproveita a oportunidade e crava suas garras em você, a dor é insuportável. Você sente o sangue escorrer pelos ferimentos e suas forças se esvaírem rapidamente. Cada tentativa de se levantar é em vão, e a escuridão começa a tomar conta de sua visão.\nEnquanto a tempestade continua a rugir ao seu redor, seus pensamentos ficam nebulosos. As lembranças da mulher misteriosa e das promessas de aventura se dissipam como fumaça. Com um último suspiro, você sente a vida se esvair do seu corpo. O lobo, com um rosnado final, se afasta lentamente, deixando você sozinho no chão.\nA chuva lava seu corpo, misturando-se ao sangue e à lama. A escuridão completa toma conta, e tudo ao seu redor desaparece.\nA jornada de ${player.nome} chegou ao fim, mas a memória de sua coragem e determinação permanecerá. As florestas guardam seus segredos, e o mundo continua a girar, indiferente à perda de mais um aventureiro.\n`)
                break;
            case 2:
                if (player.itens > 0){

                    loboVive = true
                    player.itens -= 1
                    console.clear()
                    await exibirTexto("Você decide tentar uma abordagem mais pacífica. Com calma, você abre sua mochila e pega uma das barrinhas de cereal. Mantendo uma postura não ameaçadora, avança lentamente em direção ao lobo, segurando a barrinha na mão.\n", 70)
                    await exibirTexto("Você estende a barrinha de cereal em direção ao lobo. O animal observa com cautela, seus olhos fixos na comida. O rosnado do lobo diminui gradualmente, e ele parece intrigado pela oferta.", 70)
                    await exibirTexto("Com um movimento hesitante, o lobo se aproxima e, após um breve momento de hesitação, pega a barrinha de cereal com a boca. Ele começa a comer lentamente, suas feições relaxando conforme a fome é saciada\n", 70)
                    await exibirTexto("Enquanto o lobo come, você percebe que ele está começando a confiar em você. Seus olhos mostram uma expressão mais amigável, e ele para de rosnar. Depois de terminar a barrinha de cereal, o lobo se aproxima e espera, sinal de que aceita sua companhia.\n", 70)
                    await exibirTexto("O seu novo animalzinho de estimação precisa de um nome! Qual nome você gostaria de dar a ele?\n", 70)
                    await (nome = prompt("Digite um nome: "))
                    await criarLobo(nome)
                    
                    
                    await console.clear()
                    await exibirTexto(`O lobo parece aceitar o nome, abanando levemente a cauda em resposta. Com ${lobo.nome} ao seu lado, você se sente mais confiante. Vocês decidem que é hora de achar um lugar para ficar, um abrigo seguro onde possam descansar e se proteger da tempestade que continua a cair.\n`, 70)

                    await exibirTexto(`A noite é escura e a chuva constante torna a busca desafiadora. Mas, com ${lobo.nome} guiando o caminho, vocês seguem adiante, explorando cada canto e fenda na esperança de encontrar um refúgio. A presença de ${lobo.nome} ao seu lado oferece conforto, e seus instintos de caça ajudam a evitar perigos e a encontrar possíveis abrigos.\n`, 70)

                    await exibirTexto(`Depois de algum tempo, vocês avistam uma pequena caverna escondida por entre as árvores e rochas. Aproximando-se com cautela, você percebe que é um lugar seguro, longe do alcance da tempestade e grande o suficiente para você e ${lobo.nome}.\n`, 70)

                    await exibirTexto(`Vocês entram na caverna, e a sensação de segurança é imediata. As paredes de pedra oferecem proteção contra o vento e a chuva, e o espaço é aconchegante. ${lobo.nome} se deita ao seu lado, parecendo igualmente aliviado.\n`, 70)

                    await exibirTexto(`Com o som suave da chuva lá fora e o calor da presença de ${lobo.nome}, você se deita e fecha os olhos. A exaustão finalmente toma conta de você, e o sono chega rapidamente. Saber que ${lobo.nome} está ali, vigiando e protegendo, traz uma sensação de segurança que você não sentia há muito tempo.\n`, 70)

                    dormiuNaCaverna = true
                    loboVive = true
                    fugiuLobo = false

                    await dormir(player, fugiu, lobo, loboVive, pausa, dormiuNaCaverna)
                } else if(player.itens == 0){
                    player.vida -= 40
                    await exibirTexto("Com o lobo à sua frente, você percebe que a agressão pode não ser a melhor resposta. Lembrando-se de histórias sobre como os animais às vezes reagem bem à gentileza, decide tentar acalmá-lo.\n", 70)

                    await exibirTexto("Você se aproxima lentamente, mantendo as mãos visíveis e falando em um tom calmo e suave. Você estende lentamente a mão na direção do lobo, com a palma voltada para cima, tentando mostrar que não representa uma ameaça. O lobo hesita por um momento, mas então, em vez de se acalmar, ele avança e morde sua mão.\n", 70)

                    await exibirTexto(`Por conta disso, sua você perde 40 pontos de vida e agora a sua vida atual é de ${player.vida}, prepare-se para a batalha! O Lobo não está para brincadeira.\n`, 70)

                    await pausa()
                    await criarLobo("Lobo")
                    await lutar(player, lobo, 
                        // Texto caso o jogador vença
                        `A chuva continua a cair pesadamente enquanto você luta desesperadamente contra o lobo de pelagem escura. Seus golpes são rápidos, mas a fera é ágil e forte, tornando cada momento um teste de sobrevivência. Suas forças começam a diminuir, mas uma determinação feroz surge dentro de você.\nCom um grito de guerra, você avança contra o lobo, desviando de suas garras afiadas e desferindo um golpe decisivo. O lobo solta um uivo de dor e recua, mas você não lhe dá chance de se recuperar. Com uma série de movimentos rápidos e precisos, você ataca novamente, acertando o lobo no flanco.\nO lobo cambaleia, sua respiração se torna irregular. Seus olhos ainda brilham com uma fúria selvagem, mas a força está se esvaindo de seu corpo. Com um último esforço, você avança e, com toda a sua força, desferindo um golpe final que atinge o lobo no peito. A fera solta um último rosnado antes de cair no chão, imóvel.\nA chuva continua a cair, misturando-se ao sangue que escorre pelos seus ferimentos e ao do lobo. Você se afasta lentamente do corpo inerte do animal, sentindo a exaustão tomar conta. A dor e o cansaço são intensos, mas a sensação de vitória é inegável. Você sobreviveu.\n`, 

                        // Texto caso o jogador perca
                        `A chuva continua a cair pesadamente enquanto você luta desesperadamente contra o lobo de pelagem escura. Seus golpes são rápidos, mas a fera é ágil e forte, tornando cada momento um teste de sobrevivência. Suas forças começam a diminuir, e o cansaço toma conta do seu corpo. O lobo, percebendo sua fraqueza, avança com ainda mais ferocidade.\nVocê tenta se defender, mas um golpe mal calculado faz com que perca o equilíbrio e caia no chão lamacento. O lobo aproveita a oportunidade e crava suas garras em você, a dor é insuportável. Você sente o sangue escorrer pelos ferimentos e suas forças se esvaírem rapidamente. Cada tentativa de se levantar é em vão, e a escuridão começa a tomar conta de sua visão.\nEnquanto a tempestade continua a rugir ao seu redor, seus pensamentos ficam nebulosos. As lembranças da mulher misteriosa e das promessas de aventura se dissipam como fumaça. Com um último suspiro, você sente a vida se esvair do seu corpo. O lobo, com um rosnado final, se afasta lentamente, deixando você sozinho no chão.\nA chuva lava seu corpo, misturando-se ao sangue e à lama. A escuridão completa toma conta, e tudo ao seu redor desaparece.\nA jornada de ${player.nome} chegou ao fim, mas a memória de sua coragem e determinação permanecerá. As florestas guardam seus segredos, e o mundo continua a girar, indiferente à perda de mais um aventureiro.\n`)
                }
                break
            case 3:
                console.clear()
                await exibirTexto("Com o coração acelerado e a adrenalina correndo em suas veias, você dá meia volta e começa a correr o mais rápido que consegue. Cada músculo em seu corpo está em alerta máximo, e você sente o vento cortante da tempestade em seu rosto.\n", 70)

                await exibirTexto("O lobo, surpreso com sua reação, começa a correr atrás de você. Seus passos são rápidos e pesados, e o som de suas patas batendo no chão mistura-se com o barulho da chuva e do vento. A chuva torrencial torna o terreno escorregadio, mas seu desespero faz com que você continue a correr, ignorando o cansaço e a dor.\n", 70)

                await exibirTexto("Você olha para trás e vê o lobo cada vez mais distante. Apesar de sua velocidade e agilidade, ele parece incapaz de continuar. Sua corrida é uma mistura de pura determinação e medo, que juntas tornam o lobo incapaz de lhe alcançar, o fazendo ficar cada vez mais distante.\n", 70)

                await exibirTexto("Com o lobo despistado, as coisas parecem mais seguras agora. Então você decide que é hora de procurar um lugar para passar a noite. A escuridão da floresta é densa e os sons noturnos começam a ecoar ao seu redor, mas você mantém a calma e continua caminhando, atento a qualquer sinal de perigo.\n", 70)

                await exibirTexto("Após um tempo de procura você decide que a melhor opção é subir em uma árvore alta, onde ficará fora do alcance de predadores. Após encontrar uma árvore robusta com galhos grossos, você escala cuidadosamente até encontrar um galho seguro que irá aguentar o seu peso sem quebrar.\n", 70)
                await exibirTexto("Com a visão panorâmica da floresta ao seu redor, você se sente mais seguro.Você se encosta na arvore e, apesar de não ser o lugar mais confortável do mundo, eventualmente você pega no sono com o som dos grilos e da chuva caindo nas folhas.", 70)

                dormiuNaCaverna = false
                loboVive = true
                fugiuLobo = true
                await dormir(player, fugiu, lobo, loboVive, pausa, dormiuNaCaverna)
                break
            default:
                break;
        }
        
    }
    function criarLobo(newNome){
        lobo = new Inimigo(newNome, 650, 25, 5, 30) 
        
    }
    async function lutar(player, inimigo, textoVenceu, textoPerdeu){

        console.clear()

        while (player.vida > 0 && inimigo.vida > 1){
            await inimigo.defender(player.atacar())
            await player.defender(inimigo.atacar())
            await exibirTexto(`Sua vida é de ${player.vida}\n`, 70)
            await exibirTexto(`A vida do ${inimigo.nome} é de ${inimigo.vida}\n`, 70)
            
    
        }
        if (player.vida < 1){
            console.clear()
            await exibirTexto(textoPerdeu, 70)
            await pausa("GAME OVER! Precione enter para voltar do ultimo ponto salvo!")
            loboVive = true
            player.vida = 100
            console.clear()
            await acordar(fugiu, player, pausa)
            
            return false
        } else {
            console.clear()
            await exibirTexto(textoVenceu, 70)
            await pausa()

            loboVive = false
            fugiuLobo = false
            console.clear()
            await exibirTexto("Após a dura batalha com o lobo, você percebe que precisa encontrar um lugar seguro para passar a noite e se recuperar. A chuva continua a cair, mas a intensidade diminuiu um pouco, proporcionando um alívio momentâneo. Com o corpo dolorido e a mente ainda em alerta, você começa a explorar os arredores em busca de um abrigo.\nA floresta ao seu redor é densa e escura, os sons da vida noturna misturando-se com o som da chuva caindo nas folhas. Cada passo é cauteloso, seus olhos atentos a qualquer sinal de perigo. A exaustão começa a pesar, mas a determinação de encontrar um lugar seguro o impulsiona a continuar.\nDepois de algum tempo de busca, você avista uma árvore alta e robusta com galhos espessos que parecem oferecer uma boa proteção contra a chuva e os predadores. Com cuidado, você começa a escalar a árvore, usando os galhos e as irregularidades do tronco para se apoiar.\nAo alcançar um galho grosso e estável, você se acomoda, ajustando-se da melhor maneira possível para passar a noite. A altura da árvore proporciona uma visão panorâmica da floresta, e você sente uma leve sensação de segurança sabendo que está fora do alcance de possíveis ameaças no chão.\nVocê se deita no galho, encostando-se ao tronco da árvore para se proteger do vento frio. Embora não seja o lugar mais confortável, a sensação de segurança permite que você relaxe um pouco. O som suave da chuva continua a ecoar ao seu redor, misturado com os sons da floresta noturna.\nEnquanto o cansaço finalmente começa a tomar conta, você fecha os olhos, permitindo-se um breve momento de descanso. A imagem da luta contra o lobo ainda está fresca em sua mente, mas a vitória traz uma sensação de alívio e satisfação.\n", 70)

            await dormir(player, fugiu, lobo, loboVive, pausa, dormiuNaCaverna)
            

            return true
        }
        
    }

}

module.exports = acordar