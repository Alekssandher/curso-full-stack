const prompt = require('prompt-sync')()

const exibirTexto = require("../sistemas/sistemas")

const Inimigo = require('../personagens/inimigos')

var escolha
var onca
var comLobo

//Função utilizada na cena dormir para passar parametros para esta e dar inicio a ela

async function cenaFinal(player, lobo, loboVive, pausa, dormiuNaCaverna){
    console.clear()
    await criarOnca()

    //Condição caso o jogador tenha fugido do lobo
    if (loboVive == true && dormiuNaCaverna != true || loboVive == false) {
        await exibirTexto("Você desperta com os primeiros raios de sol filtrando pelas folhas da árvore onde você passou a noite. O som dos pássaros cantando é calmante, mas algo parece errado.\n", 50)
        await exibirTexto("Você sente uma presença abaixo e, com cuidado, olha para baixo. Uma onça está lá, com seus olhos fixos em você.\n", 50)
        await exibirTexto("O que você faz?\n 1 - Tentar fugir. 2 - Lutar contra a onça.\n", 50)
        
        escolha = prompt()

        switch (parseInt(escolha)) {
            //Caso ele escolha a opção 1
            case 1:
                console.clear()
                await exibirTexto("Decidindo que a fuga é a melhor opção, você se move cuidadosamente para não alertar a onça. Quando você acha que é seguro, você desce rapidamente pela árvore e começa a correr.\n", 50)

                await exibirTexto("A onça percebe seu movimento quase imediatamente e começa a te perseguir. Você corre o mais rápido que pode, seu coração batendo forte no peito. As árvores e os arbustos passam por você em um borrão, mas a onça é rápida e está se aproximando cada vez mais.\n", 50)

                await exibirTexto("No último momento, você vê um rio à frente. Sem pensar, você salta no rio, esperando que a correnteza te leve para longe da onça. Porém, ao aterrissar na margem, você tropeça em uma pedra e cai, machucando o tornozelo. A dor é intensa e você mal consegue se levantar.\n", 50)

                await exibirTexto("Antes que você possa tentar fugir novamente, a onça está sobre você. Seus olhos selvagens brilham com uma determinação feroz. Você tenta se defender, mas a dor em seu tornozelo e a exaustão tornam isso impossível.\n", 50)

                await exibirTexto("Com um movimento rápido, a onça ataca, suas garras afiadas rasgando sua pele. Você sente uma dor lancinante e sua visão começa a escurecer. Em seus últimos momentos, você pensa em tudo o que poderia ter feito de forma diferente, mas é tarde demais.\n", 50)
                
                await exibirTexto("A escuridão te envolve completamente, e você sucumbe à inevitável realidade. A floresta fica em silêncio novamente, com apenas o som distante do rio correndo ao fundo e indiferente a morte de mais um aventureiro dentre tantos outros.\n", 50)

                pausa("Precione enter para retornar ao ultimo ponto salvo")

                console.clear()
                await cenaFinal(player, lobo, loboVive, pausa, dormiuNaCaverna)
                break;

            case 2:
                console.clear()
                await exibirTexto("Decidindo que enfrentar a onça é a única opção, você respira fundo, firmando sua resolução. Você desce cuidadosamente da árvore, mantendo os olhos na onça o tempo todo. Ao chegar ao chão, você encontra um galho robusto, que pega e segura firmemente como uma arma improvisada.\n", 50)

                await lutar(player, onca,
                    "A onça avança lentamente, seus movimentos são elegantes, mas predatórios. Você sabe que não pode demonstrar medo. Com um grito de desafio, você se coloca em posição defensiva, brandindo o galho em frente a você.\nA onça recua um pouco, estudando você com curiosidade. Em um momento de tensão máxima, a onça pula para cima de você com as garras estendidas. Você desvia para o lado, batendo com o galho nas costelas da onça com toda a sua força. O animal rosna de dor e fúria, mas você não recua.\nVocê decide que fugir não é uma opção e se prepara para enfrentar a onça. Seu coração bate forte no peito enquanto você encara o predador feroz. A onça rosna, exibindo seus dentes afiados, e você sabe que será uma luta difícil.\nA batalha começa com a onça avançando rapidamente. Você tenta desviar do ataque, mas a velocidade e agilidade do animal são impressionantes. Com um movimento rápido, a onça golpeia seu braço, fazendo você recuar de dor. Você se recompõe e tenta contra-atacar, mas seus golpes parecem ineficazes contra a pele grossa do animal.\nCada vez que você ataca, a onça responde com uma ferocidade ainda maior. Ela morde sua perna, rasgando a carne e fazendo o sangue jorrar. A dor é insuportável, mas você se recusa a desistir. Com todas as suas forças, você continua a lutar, tentando se defender dos ataques implacáveis.\nCom um último esforço, você concentra toda a sua força em um golpe decisivo. Você golpeia a onça com o galho, atingindo-a na cabeça. O animal solta um rosnado de dor e cambaleia para trás. Você aproveita a oportunidade e continua atacando, determinado a sobreviver.\nFinalmente, a onça decide que a luta não vale a pena. Com um rosnado de frustração, ela se afasta, desaparecendo na floresta. Você venceu, mas está exausto e com alguns ferimentos." ,
                    "A onça avança lentamente, seus movimentos são elegantes, mas predatórios. Você sabe que não pode demonstrar medo. Com um grito de desafio, você se coloca em posição defensiva, brandindo o galho em frente a você.\nA onça recua um pouco, estudando você com curiosidade. Em um momento de tensão máxima, a onça pula para cima de você com as garras estendidas. Você desvia para o lado, batendo com o galho nas costelas da onça com toda a sua força. O animal rosna de dor e fúria, mas você não recua.\nCom um último esforço, a onça decide que a luta não vale a pena e se afasta, desaparecendo na floresta. Você vence, mas está exausto e com alguns ferimentos.\nVocê sobreviveu a mais um encontro perigoso.\n", "Você decide que fugir não é uma opção e se prepara para enfrentar a onça. Seu coração bate forte no peito enquanto você encara o predador feroz. A onça rosna, exibindo seus dentes afiados, e você sabe que será uma luta difícil.\nA batalha começa com a onça avançando rapidamente. Você tenta desviar do ataque, mas a velocidade e agilidade do animal são impressionantes. Com um movimento rápido, a onça golpeia seu braço, fazendo você recuar de dor. Você se recompõe e tenta contra-atacar, mas seus golpes parecem ineficazes contra a pele grossa do animal.\nCada vez que você ataca, a onça responde com uma ferocidade ainda maior. Ela morde sua perna, rasgando a carne e fazendo o sangue jorrar. A dor é insuportável, mas você se recusa a desistir. Com todas as suas forças, você continua a lutar, tentando se defender dos ataques implacáveis.\nA onça, no entanto, não dá trégua. Em um movimento final, ela se lança sobre você, derrubando-o no chão. Você sente o peso esmagador do animal sobre seu corpo, suas garras afiadas perfurando seu peito. A dor é excruciante e a visão começa a escurecer.\nCom suas últimas forças, você tenta afastar a onça, mas é inútil. Seus golpes ficam mais fracos e sua respiração se torna mais difícil. Finalmente, você sente a vida escapando de seu corpo, enquanto a onça continua a atacar impiedosamente.\n")


            

                pausa("Pressione enter para continuar")
                await textoFinal(2)
                break;

            default:
                await exibirTexto("Opção inválida. Tente novamente.\n", 50)
                await cenaFinal(player, lobo, loboVive, pausa, dormiuNaCaverna)
                break;
        } 

        
    }else if (dormiuNaCaverna == true){
        await console.clear()
        await exibirTexto(`Você desperta com um sobressalto, o som suave da chuva que caía antes agora se transformou em um silêncio inquietante. O frio da caverna envolve seu corpo, e você se sente um pouco desorientado ao abrir os olhos. ${lobo.nome} está deitado ao seu lado, dormindo profundamente. Você se levanta lentamente, tentando não fazer barulho para não perturbar o animal.\nA caverna está iluminada apenas pela luz fraca que penetra através da entrada. O ambiente é úmido e o cheiro de terra e musgo é predominante. Você se aproxima da entrada da caverna com cautela, tentando entender o que está acontecendo fora.\nQuando chega perto da entrada, você ouve um rugido baixo e ameaçador que reverbera pela floresta. O som é inconfundível — é o rugido de uma onça. Seu coração acelera. Com cuidado, você espreita para fora da caverna e vê a silhueta imponente da onça parada a uma certa distância, observando a entrada da caverna com olhos ferozes.\nA onça parece estar aguardando algo, talvez sua chance de atacar ou apenas monitorando a área. Seu corpo tenso e musculoso está pronto para o movimento a qualquer momento. A presença da onça é um lembrete sombrio dos perigos que a floresta pode oferecer, mesmo quando você pensa que está seguro.\n O que você faz?\n 1 - Lutar junto de ${lobo.nome}. 2 - Correr e abandonar o ${lobo.nome}.\n`, 50)

        escolha = prompt()
        await console.clear()
        switch (parseInt(escolha)) {
            case 1:
                await exibirTexto(`Você respira fundo, sentindo o peso da decisão sobre seus ombros. Com ${lobo.nome} ao seu lado, seus olhos se encontram e você percebe a determinação refletida no olhar dele. A onça está à espreita, seus olhos brilhando na penumbra da floresta enquanto ela vigia a entrada da caverna.\nVocê dá um tapinha no ${lobo.nome}, que responde com um rosnado baixo, pronto para a ação. Juntos, vocês saem da caverna, o rugido da onça ecoando nas árvores ao redor. A atmosfera está carregada de tensão, e a chuva leve começa a cair novamente, misturando-se com o cheiro úmido da floresta.\nA onça se volta para você com um olhar feroz, seus músculos tensos e suas garras visíveis. Você sabe que essa batalha será difícil, mas a presença do lobo ao seu lado lhe dá uma confiança renovada. O ${lobo.nome} avança ao seu lado, seus olhos focados na onça enquanto ele se prepara para a luta.\nA batalha começa com um rugido retumbante da onça, que avança com velocidade surpreendente.\n`, 50)
                pausa("Precione enter para lutar!")
                await console.clear()
                await lutar(player, onca,
                    //Texto caso ganhe
                    `Você e o ${lobo.nome} se movem em perfeita sincronia, esquivando-se dos ataques brutais da onça e contra-atacando com precisão. A luta é intensa, com garras e dentes se chocando contra escudos e armas improvisadas.\nO ${lobo.nome} mostra-se um aliado valente, atacando com agilidade e destreza, distraindo a onça o suficiente para que você possa aplicar golpes decisivos. Com cada ataque, você sente a adrenalina correr em suas veias, a luta exigindo toda a sua coragem e habilidades.\nFinalmente, após um confronto feroz e extenuante, a onça cambaleia, claramente enfraquecida pelos golpes e pela batalha. Com um esforço final, você e o ${lobo.nome} conseguem derrotá-la, a onça finalmente tombando ao chão. O alívio e a exaustão são palpáveis, mas a vitória é sua.\nVocê se aproxima da onça caída, observando-a com respeito. A batalha foi dura, mas você e o ${lobo.nome} provaram sua coragem e habilidades. O ${lobo.nome} se aproxima de você, seu olhar exausto, mas também cheio de gratidão e respeito.\n`, 
                    
                    //Texto caso perca
                    `Você tenta desferir golpes precisos e o ${lobo.nome} faz o possível para distrair a onça, mas a força e a ferocidade do animal são esmagadoras.\nApesar dos seus esforços, a onça é brutal e implacável. Cada movimento dela é calculado e devastador. A luta é exaustiva e cheia de desesperança. Você e o ${lobo.nome} estão ficando cada vez mais cansados, seus movimentos se tornando lentos e desajeitados.\nEm um momento de descuido, a onça encontra uma abertura e ataca com garras afiadas. Você tenta se defender, mas o golpe é inevitável. A dor é intensa e, ao seu lado, o ${lobo.nome} também é atingido severamente. Seus movimentos se tornam cada vez mais fracos, e você vê a determinação nos olhos do ${lobo.nome} começar a se apagar.\nCom um último rugido de triunfo, a onça avança com um ataque final. Você tenta resistir, mas a força da onça é demais. O ${lobo.nome} cai ao seu lado, e você, agora ferido gravemente, não consegue mais se levantar.\nA batalha termina com a onça triunfante, e o silêncio que se segue é pesado. A chuva continua a cair, misturando-se com o sangue e o suor do campo de batalha. Você e o ${lobo.nome}, exaustos e derrotados, estão agora à mercê do predador que os superou.\nCom o último sopro de vida, você sente uma sensação de tristeza e arrependimento. O ${lobo.nome}, seu fiel companheiro, está ao seu lado, seu olhar sereno apesar do sofrimento. A escuridão começa a tomar conta, e você se vê imergindo em um sono eterno, a floresta ao seu redor permanecendo testemunha silenciosa do seu último desafio.`)


                break;
            
            case 2:
                await console.clear()
                await exibirTexto(`A onça está cada vez mais próxima, seus passos pesados ecoando pela floresta enquanto você e o ${lobo.nome} tentam encontrar uma saída. A tensão é palpável, e a visão do predador à espreita é aterrorizante. O ${lobo.nome}, ao seu lado, rosnando ferozmente, está pronto para enfrentar a ameaça.\nMas, à medida que a onça se aproxima, o medo toma conta de você. A ideia de enfrentar uma criatura tão implacável parece impossível, e uma onda de pânico se instala. Seu coração bate descompassado, e a única coisa que você consegue pensar é em escapar daquele perigo iminente.\nVocê olha para o ${lobo.nome}, que ainda está ao seu lado, seu olhar determinado e leal. O ${lobo.nome} parece perceber a sua hesitação, mas você, dominado pelo pânico, toma uma decisão desesperada. Sem pensar duas vezes, você grita para o ${lobo.nome} para que ele fique para trás e começa a correr em direção à escuridão da floresta.\n"O ${lobo.nome} vai ficar bem!" você grita enquanto acelera, suas pernas movendo-se o mais rápido que conseguem. A sensação de desespero o empurra a seguir adiante, ignorando os gritos e os rosnados do ${lobo.nome} que se tornam cada vez mais distantes.\nA onça, ao perceber sua fuga, se volta em direção a você com um rugido ameaçador. A adrenalina faz você correr mais rápido, seus pulmões queimando com o esforço. A floresta ao seu redor parece se transformar em um borrão enquanto você se afasta cada vez mais da cena.\nÀ medida que você se distancia, o som da batalha entre o ${lobo.nome} e a onça começa a desaparecer, substituído apenas pelo som da sua respiração ofegante e dos galhos quebrando sob seus pés. O medo de perder o ${lobo.nome} se mistura com a culpa de abandoná-lo em uma situação tão perigosa.\nFinalmente, exausto e sem forças, você se encontra em uma clareira segura. Você se deita no chão, a sensação de alívio misturada com a culpa e o pesar. A imagem do ${lobo.nome}, seu olhar leal e determinado, ainda está gravada em sua mente. Você sabe que ele enfrentou o predador sozinho e que, ao escolher correr, deixou-o para trás em uma batalha que poderia ter sido sua também.\nA noite avança e a chuva continua a cair, mas a sensação de segurança que você encontrou não pode apagar a tristeza e a culpa que pesam em seu coração. Você se pergunta se, ao deixar o ${lobo.nome} para trás, fez a escolha certa, e a incerteza sobre o destino do seu amigo se mistura ao medo e ao arrependimento.\n`, 50)

                textoFinal(3)

                break
            default:

                break;
        }

    }
    //Função para lutar
    async function lutar(player, inimigo, textoVenceu, textoPerdeu) {
        await console.clear();
        
        if (dormiuNaCaverna == true) {
            player.vida += lobo.vida
            player.ataque += lobo.ataque
        }
        while (player.vida > 0 && inimigo.vida > 0) {
            await inimigo.defender(player.atacar());
            if (inimigo.vida <= 0) break;
            
            await player.defender(inimigo.atacar());
            if (player.vida <= 0) break;

            if (dormiuNaCaverna == true) {

                await exibirTexto(`A sua vida e a de ${lobo.nome} é de ${player.vida}\n`, 50);
                await exibirTexto(`A vida do ${inimigo.nome} é de ${inimigo.vida}\n`, 50);

            }else {
            await exibirTexto(`Sua vida é de ${player.vida}\n`, 50);
            await exibirTexto(`A vida do ${inimigo.nome} é de ${inimigo.vida}\n`, 50);
            }
        }
    
        if (player.vida <= 0) {
            console.clear();
            await exibirTexto(textoPerdeu, 50);
            await pausa("GAME OVER! Pressione enter para voltar do último ponto salvo!");
            
            //Recomeçar o a cena
            console.clear();

            player.vida = 100
            player.ataque = 10
            lobo.vida = 100
            onca.vida = 150
            await cenaFinal(player, lobo, loboVive, pausa, dormiuNaCaverna)

            return false;
        } else {
            console.clear();
            await exibirTexto(textoVenceu, 50);

            await pausa();
    
            console.clear();
            
            if (dormiuNaCaverna == true) {
                textoFinal(1)
            }else{
                textoFinal(2)
            }
    
            
            return true;
        }
    }
    function criarOnca(){
        onca = new Inimigo("Onça", 150, 30, 5, 30) 
        
    }
    //Função para exibir o texto final de acordo com a ocasião
    async function textoFinal(qualTexto){
        if (qualTexto == 1) {
            await exibirTexto(`Após a intensa batalha contra a onça, você e seu fiel companheiro, o ${lobo.nome}, permanecem em pé, ofegantes, mas vitoriosos. A luta foi árdua, cada golpe e defesa exigiram o máximo de suas habilidades e coragem. O cenário ao seu redor é um testemunho da ferocidade do confronto: marcas de garras nas árvores, tufos de pelo no chão e o som suave da floresta retomando sua tranquilidade.\nVocê olha para o ${lobo.nome}, que também parece exausto, mas mantém a postura firme e os olhos atentos. Há um entendimento silencioso entre vocês, uma conexão que foi solidificada na batalha. Vocês são uma equipe, lutando lado a lado contra os perigos deste mundo selvagem.\nCom a onça caída ao chão, derrotada, você se permite um momento de alívio. A adrenalina ainda corre em suas veias, mas uma sensação de realização começa a tomar conta. Você sobreviveu. Mais do que isso, você triunfou.\nAjoelhando-se ao lado do ${lobo.nome}, você lhe faz um carinho na cabeça, agradecendo por sua lealdade e bravura. Ele responde com um olhar firme e uma leve lambida em sua mão, um gesto de companheirismo e respeito.\nVocê então se levanta e olha ao redor. A clareira onde a batalha ocorreu é iluminada por raios de sol que começam a penetrar pelas copas das árvores, criando um cenário quase mágico. A floresta parece reconhecer sua vitória, e por um breve momento, tudo está em paz.\nDecidido a seguir em frente, você começa a planejar os próximos passos. Esta luta foi apenas mais um obstáculo em sua jornada, mas agora, com a confiança renovada e a parceria fortalecida, você sabe que é capaz de enfrentar qualquer desafio que venha pela frente.\nEnquanto você e o ${lobo.nome} se afastam da clareira, um novo dia começa a nascer. O som dos pássaros ao longe, o farfalhar das folhas ao vento, tudo parece mais vivo e vibrante. Com o ${lobo.nome} ao seu lado, você sente que nenhum inimigo é invencível e que sua jornada está apenas começando.\nJuntos, vocês seguem adiante, prontos para encarar o que quer que o destino reserve. E, com cada passo, a floresta se torna um pouco menos assustadora e muito mais uma parte de vocês.\n`, 50)


            
            pausa()
            await console.clear()
            await exibirTexto("--------------Fim--------------\n", 15)
            await exibirTexto("Obrigado por ter chegado até aqui!\n", 50)
            await exibirTexto("Desenvolvido por: Alekssandher\n", 50)

            pausa("Precione enter para sair")         

        } else if (qualTexto == 2){
            await exibirTexto("Após a árdua batalha contra a onça, você está de pé, exausto, mas triunfante. A luta foi um verdadeiro teste de sua coragem e habilidades, e você a superou com bravura. O campo de batalha ao seu redor mostra sinais claros da intensidade do confronto: marcas profundas no chão, folhas amassadas e o rastro de uma luta feroz.\nCom a onça finalmente derrotada, você se permite um momento de alívio. A adrenalina ainda pulsa em suas veias, mas o sentimento de realização é inconfundível. Sozinho, você enfrentou um dos predadores mais temidos da floresta e saiu vitorioso.\nVocê respira fundo, tentando recuperar o fôlego enquanto observa o cenário ao seu redor. O sol começa a se erguer, lançando uma luz suave sobre a clareira, trazendo um toque de calor e serenidade ao ambiente. A floresta, antes ameaçadora, agora parece oferecer um breve momento de paz.\nCom o fim da batalha, você se permite um breve descanso antes de seguir em frente. A floresta, agora mais silenciosa e menos ameaçadora, parece reconhecer seu esforço e coragem. O som dos pássaros e o farfalhar das folhas criam uma sinfonia natural, como se a própria natureza estivesse celebrando sua vitória.\nVocê sabe que a jornada ainda não acabou. Muitos desafios ainda estão por vir, e o caminho à frente é desconhecido. Mas, com a experiência adquirida e a confiança renovada, você está pronto para enfrentar o que quer que o destino lhe reserve.\nEnquanto avança, você carrega consigo a certeza de que é capaz de superar qualquer adversidade. O mundo ao seu redor pode ser implacável, mas agora, você conhece seu próprio poder e determinação. Com um último olhar para a clareira onde a batalha ocorreu, você dá um passo firme em direção ao futuro, pronto para enfrentar a próxima aventura que o aguarda.", 50)

            pausa()
            await console.clear()
            await exibirTexto("--------------Fim--------------\n", 15)
            await exibirTexto("Obrigado por ter chegado até aqui!\n", 50)
            await exibirTexto("Desenvolvido por: Alekssandher\n", 50)

            pausa("Precione enter para sair") 
        } else if(qualTexto == 3){
            await exibirTexto(`A manhã chega, e você decide voltar ao local onde deixou o ${lobo.nome}, esperançoso de que ele ainda esteja vivo. No entanto, ao chegar, a cena que se desenrola diante de seus olhos é desoladora. A floresta está silenciosa e deserta, e não há sinal do ${lobo.nome}. Apenas marcas de luta e rastros de sangue permanecem como um triste testemunho da batalha que ocorreu.\nO peso da perda e da culpa é esmagador. O ${lobo.nome}, que estava ao seu lado desde o início, agora é uma lembrança dolorosa de uma decisão tomada em um momento de desespero. Você tenta procurar mais, chamando seu nome e vasculhando os arredores, mas não há resposta. O ${lobo.nome} se foi, e a dor da perda é aguda.\nCom o coração pesado e a mente cheia de arrependimento, você retorna à sua jornada, sabendo que a decisão de fugir deixou uma marca indelével em sua vida. A culpa de não ter lutado ao lado do ${lobo.nome}, de ter abandonado um amigo leal em sua hora de necessidade, é uma carga que você carregará para sempre.\nA jornada continua, mas o vazio deixado pela perda do ${lobo.nome} é um lembrete constante de que algumas escolhas têm consequências que vão além do imediato. A vida na floresta é dura e implacável, e as lições aprendidas serão levadas com você, para sempre moldando suas decisões e ações futuras.\n`, 50)

            pausa()
            console.clear()
            await exibirTexto("--------------Fim--------------\n", 15)
            await exibirTexto("Obrigado por ter chegado até aqui!\n", 50)
            await exibirTexto("Desenvolvido por: Alekssandher\n", 50)
        }
    }
}

module.exports = cenaFinal