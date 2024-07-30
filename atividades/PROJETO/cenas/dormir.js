const exibirTexto = require('../sistemas/sistemas')
const cena2 = require('./cena2')

const prompt = require('prompt-sync')()

var escolha

async function dormir (player, fugiu, lobo, loboVive, pausa, dormiuNaCaverna){
    if (fugiu == true) {
        console.clear()
        await exibirTexto(`Você está em um ambiente nebuloso, cercado por uma névoa espessa. A iluminação é suave e a atmosfera é etérea, como se estivesse em um sonho. À medida que o você avança, uma figura familiar começa a emergir da névoa: é a mulher misteriosa de antes. Ela está parada em um local central, com uma expressão calma e enigmática.\n`, 10)
        await exibirTexto(`"Será que o senhorzinho poderia me dizer o por que você fugiu de mim?" ela diz, assim que você se aproxima.\n O que você responde?\n 1 - Eu fiquei com medo, por isso fugi. 2 - Minha mãe me ensinou que eu não devo falar com estranhos.\n`, 10)

        await (escolha = prompt())
        console.clear()
        switch (parseInt(escolha)) {
            case 1:
                if (loboVive == false) {
                    await exibirTexto(`"Engraçado você dizer isso, eu não te vi ficar com medo quando você teve que lutar contra aquele lobo, na verdade`,10)
                    await exibirTexto("...", 600)
                    await exibirTexto(` VOCÊ FOI ATÉ UM POUCO CRUEL COM ELE!"\n`, 20)
                    pausa()
                    dialogoSeFugiu()
                    
                    
                }else if (dormiuNaCaverna == false && loboVive == true){
                    await exibirTexto("O medo é uma caracteristica muito presente em você, eu vi a forma que você correu desesperado daquele lobo, eu nunca vi alguém correr tão rápido daquele jeito.\n", 10)
                    pausa()
                    dialogoSeFugiu()

                } else if(dormiuNaCaverna == true){
                    await exibirTexto("Sério, ficou medo de mim? Mas você não ficou com medo na hora de falar com aquele lobo, eu não mordo, sabia!?\n", 10)
                    await exibirTexto(`Bem, agora eu preciso te dizer algumas informações importantes, que eu não pude antes por conta do seu comportamento inadequado.\n`, 10)
                    await exibirTexto(`A partir de agora o seu nome é ${player.nome}. Fui eu mesmo quem escolheu, já que você `, 10)
                    await exibirTexto("FUGIU DA ULTIMA VEZ!\n", 20)
                    await exibirTexto(`Eu não sei muito bem o que isso significa, mas estes são os status de você e do ${lobo.nome}: \n`, 10)
                    await player.status()
                    await lobo.status()
                    pausa()
                    console.clear()
                    await exibirTexto(`Por enquanto isso é tudo que eu tenho a dizer, nos vemos mais tarde, Sr ${player.nome}\n`, 10)

                    pausa("Precione enter para acordar")
                    await cena2(player, lobo, loboVive, pausa, dormiuNaCaverna)
                    
                }
                break;
            
            case 2:
                await exibirTexto("A minha mãe também me dizia a mesma coisa. Já que é assim, vamos fazer um favor a elas e seguir esse conselho.\n", 10)
                pausa("Precione enter para acordar")
                await cena2(player, lobo, loboVive, pausa, dormiuNaCaverna)
                break
            

            default:
                break;
        }
    } else {
        await exibirTexto(`Você está em um ambiente nebuloso, cercado por uma névoa espessa. A iluminação é suave e a atmosfera é etérea, como se estivesse em um sonho. À medida que o você avança, uma figura familiar começa a emergir da névoa: é a mulher misteriosa de antes. Ela está parada em um local central, com uma expressão calma e enigmática.\n`, 10)

        if (loboVive == false) {
            await exibirTexto(`"Olá novamente, ${player.nome}, devo dizer que você está um caco, aquele lobo realmente te machucou. Apesar disso, você foi muito bem e conseguiu escapar vivo, parabéns!"\n`, 10)

            if (player.itens == 0) {
                await exibirTexto("Eu esqueci de avisar, mas havia algumas barrinhas de cereal dentro duma bolsa perto daquela clareira, é uma pena que você não tenha parado para procurar.\n", 10)
                await exibirTexto(`Atualmente estes são os seus status: \n`, 10)
                await player.status()
                pausa()
                console.clear()
                await exibirTexto("Eu te desejo uma boa sorte na sua jornada, você irá precisar!\n", 10)
                pausa("Precione enter para acordar")
                await cena2(player, lobo, loboVive, pausa, dormiuNaCaverna)

            } else if (player.itens > 0){
                await exibirTexto("Vejo que você achou umas barrinhas de cereal perto da clareira, gostaria de utiliza-las para restaurar vida?\n 1 - Restaurar vida. 2 - Não restaurar vida.", 10)

                escolha = prompt() 
                switch (parseInt(escolha)) {
                    case 1:
                        player.restaurar(40)
                        player.itens -= 1

                        await exibirTexto("Mesmo isso sendo um sonho você é capaz de restaurar a sua vida comendo as barrinhas de cereal, que estranho.\nSeus novos status são:\n", 10)
                        await player.status()
                        await exibirTexto("Certo, agora é hora de acordar.\n", 10)

                        pausa("Precione enter para acordar")
                        cena2()

                        break;

                    case 2:
                        await exibirTexto("Bem, eu não faria isso se eu fosse você", 10)
                        await exibirTexto("...", 600)
                        await exibirTexto(" Mas como eu não sou você e as ", 10)
                        await exibirTexto("CONSEQUENCIAS ", 20)
                        await exibirTexto("não são minhas, então está tudo bem.\nEstes são os seus status atuais: ", 10)
                        await player.status()

                        pausa()

                        await exibirTexto("Nos vemos num futuro próximo! (ou não)\n", 10)
                        pausa("Precione enter para continuar")
                        break
                    default:
                        break;
                }
            }
            

        } else if (loboVive == true && dormiuNaCaverna == true){
            await exibirTexto(`"E aí ${player.nome}, vejo que desta vez você não está sozinho, conseguiu um bichinho de estimação, tenho certeza que ele será muito útil na sua jornada."\n`, 10)
            await exibirTexto(`"Esses aqui são os seus status e os status do ${lobo.nome}:"\n`, 10)
            player.status()
            lobo.status()
            await exibirTexto("Nos vemos num futuro próximo! (ou não).", 10)
            pausa("Precione enter para acordar")
            await cena2(player, lobo, loboVive, pausa, dormiuNaCaverna)
        } else if (loboVive == true && dormiuNaCaverna == false){
            
        }


    }
    async function dialogoSeFugiu(){

        console.clear()

        await exibirTexto(`"Bem, mas isso não importa, eu tenho algo importante para te dizer. Por conta do seu comportamento de antes, você acabou não escolhendo um nome para si. \n"`, 10)
        console.clear()
        await exibirTexto(`"Então eu acabei tendo que improvisar, mas não se preocupe, eu sou muito boa em escolher nomes, Sr. ${player.nome}."\n`, 10)
        
        await exibirTexto(`"Eu não pude te mostrar isso antes, mas estes são os seus status atuais, eu não sei muito bem o que isso significa, mas aqui está:\n`, 10)
        await player.status()
        pausa()
        await exibirTexto(`Por enquanto isso é tudo que eu tenho a dizer, nos vemos mais tarde, Sr ${player.nome}\n`, 10)
        pausa("Precione enter para acordar")
        cena2(player, lobo, loboVive, pausa, dormiuNaCaverna)
        

    }
   
}
module.exports = dormir