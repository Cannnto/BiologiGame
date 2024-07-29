document.addEventListener('mousemove',mouseMove);
document.addEventListener('mousedown',mouseDown);
document.addEventListener('mouseup',mouseUp);
var keys = [];
var mouse = {x:0,y:0};


function write(x,y,text, fontSize)
{   
    var lines = text.split('\n')
    ctx.fillStyle = 'black'
    ctx.font = "bold " + fontSize + "px" + " arial"
    if(lines.length>1)
    {
        y-=55
    }
    for(var i = 0; i<lines.length;i++)
    {
        
        ctx.fillText(lines[i], x, y+i*25);
    }
}

function mouseDown()    {keys[1] = true};
function mouseUp()      {keys[1] = false};

function keyDown(event) {keys[event.keyCode] = true};
function keyUp(event)   {keys[event.keyCode] = false};

function mouseMove(event)
{   mouse.x = event.x-canvas.getBoundingClientRect().left
    mouse.y = event.y-canvas.getBoundingClientRect().top
}

var data = new Date()

/*---------------------------Sistema-de-Turnos--------------------------------*/
p1 = {
    vida: 100,
    turno: 0
}  
p2 = {
    vida: 100,
    turno: 0
}

if(!p1.turno){p2.turno = 1}
else(p2.turno = 0)

var turno = 0
/*-------------------------Randominzar-Perguntas------------------------------*/
var perguntas = [
    {
        pergunta: "Qual é o nome da ciência que estuda os seres vivos?",
        respostaCerta: "Biologia",
        respostaErrada1: "Zoologia",
        respostaErrada2: "Bôtanica",
        respostaErrada3: "Ecologia",
    },
    {
        pergunta: "Como funciona a fotossíntese?",
        respostaCerta: "Converte luz solar \n para criar oxigênio \n e glicose.",
        respostaErrada1: "Produz glicose e \n dióxido de carbono \n usando energia solar.",
        respostaErrada2: "Usa água e dióxido \n de carbono para \n gerar energia térmica \n e oxigênio",
        respostaErrada3: "Produz energia elétrica \n a partir da luz solar \n e água",
    },
    {
        pergunta: "Qual desses é um ser unicelular:",
        respostaCerta: "Ameba",
        respostaErrada1: "Leão",
        respostaErrada2: "Alga",
        respostaErrada3: "Corais",
    },
    {
        pergunta: "Qual desses três são seres pluricelulares:",
        respostaCerta: "Humanos, \n árvores, \n corais",
        respostaErrada1: "Bactéria, \n algas, \n vírus",
        respostaErrada2: "Leveduras, \n fungos, \n amebas",
        respostaErrada3: "Protozoários, \n musgos, \n esponjas",
    },
    {
        pergunta: "Quais são duas diferenças entre vírus e bactérias?",
        respostaCerta: "Vírus precisam de \n células hospedeiras. \n Bactérias \n são unicelulares com \n estrutura completa.",
        respostaErrada1: "Vírus são unicelulares e \n bactérias têm \n metabolismo próprio.",
        respostaErrada2: "Vírus têm estrutura \n celular e bactérias não têm.",
        respostaErrada3: "Vírus realizam \n metabolismo próprio \n e bactérias não.",
    },
    {
        pergunta: "Qual dos seguintes tipos de respiração utiliza oxigénio para produzir energia a partir da glicose?",
        respostaCerta: "Respiração Aeróbica",
        respostaErrada1: "Respiração Cutânea",
        respostaErrada2: "Respiração Anaeróbica",
        respostaErrada3: "Respiração Branquial",
    },
    {
        pergunta: "Qual é a diferença entre seres autótrofos e heterótrofos?",
        respostaCerta: "Autótrofos fazem seu \n próprio alimento; \n heterótrofos \n obtêm nutrientes de \n outros organismos.",
        respostaErrada1: "Autótrofos não reproduzem.",
        respostaErrada2: "Seres autótrofos são \n unicelulares e seres \n heterótrofos são \n pluricelulares.",
        respostaErrada3: "Autótrofos vivem em \n ambientes aquáticos. \n Heterótrofos vivem \n em ambientes terrestres.",
    },
    {
        pergunta: "O que é a teoria do criacionismo?",
        respostaCerta: "A crença de que um \n ser divino criou o universo \n e a vida, rejeitando \n explicações  científicas.",
        respostaErrada1: "A teoria de \n que a vida  na Terra \n evoluiu gradualmente \n a partir de \n formas primitivas.",
        respostaErrada2: "A crença de \n que o universo \n e a vida surgiram por \n processos naturais \n e evolutivos.",
        respostaErrada3: "A hipótese de \n que a vida na Terra surgiu \n de organismos \n vindos do espaço.",
    },
    {
        pergunta: "O que é a panspermia?",
        respostaCerta: "A hipótese de que a \n vida na Terra pode ter se \n originado de \n microrganismos \n ou compostos orgânicos \n vindos do espaço.",
        respostaErrada1: "A teoria de que a \n vida na Terra \n evoluiu a partir \n de formas primitivas.",
        respostaErrada2: " O processo de formação \n de novos indivíduos \n a partir de esporos.",
        respostaErrada3: "A teoria de que a \n vida surgiu \n espontaneamente de \n matéria inorgânica.",
    },
    {
        pergunta: "Como funciona a esporulação?",
        respostaCerta: "É a produção de esporos \n resistentes que germinam \n em novos indivíduos \n quando as condições \n são favoráveis.",
        respostaErrada1: "É a produção de \n esporos que permite \n a reprodução sexual \n dos organismos.",
        respostaErrada2: "É a divisão celular que \n gera novos organismos \n a partir de células \n parentais.",
        respostaErrada3: "É a forma como \n os organismos \n se adaptam a mudanças \n no ambiente.",
    },
    {
        pergunta: "Segunda as teorias modernas, o primeiro ser vivo tinha caráter:",
        respostaCerta: "Unicelular",
        respostaErrada1: "Pluricelular.",
        respostaErrada2: "Parasitário.",
        respostaErrada3: "Inorgânico.",
    },
    {
        pergunta: "Quais são três elementos dos CHONPS?",
        respostaCerta: "Carbono, \n Hidrogênio, \n Nitrogênio",
        respostaErrada1: "Ouro, \n Hidrogênio, \n Oxigênio",
        respostaErrada2: "Carbono, \n Magnésio, \n Fósforo",
        respostaErrada3: "Hidrogênio, \n Aluminio, \n Enxofre",
    },
    {
        pergunta: "Quais são os seis passos do método científico, na ordem correta?",
        respostaCerta: "Observação, \n Questionamento, \n Hipótese, Experimento, \n Análise dos dados, \n Conclusão",
        respostaErrada1: "Observação, \n Experimento, \n Questionamento, \n Análise dos dados, \n Hipótese, Conclusão",
        respostaErrada2: "Questionamento, \n Hipótese, \n Observação, Experimento, \n Análise dos dados, \n Conclusão",
        respostaErrada3: "Observação, \n Questionamento, \n Experimento, Hipótese, \n Conclusão, \n Análise dos dados",
    },
    {
        pergunta: "Os vírus não são considerados seres vivos porque:",
        respostaCerta: "Eles não têm \n estrutura celular.",
        respostaErrada1: "Eles não têm \n estrutura orgânica.",
        respostaErrada2: "Eles têm caráter parasita.",
        respostaErrada3: "Eles não podem se \n reproduzir sem uma \n célula hospedeira.",
    },
    {
        pergunta: "O que é a abiogênese?",
        respostaCerta: "O processo pelo qual \n a vida se origina \n a partir de \n matéria inanimada.",
        respostaErrada1: "O mecanismo pelo \n qual os organismos \n vivos se reproduzem.",
        respostaErrada2: "A teoria que explica \n a evolução das espécies \n a partir de um \n ancestral comum.",
        respostaErrada3: "O estudo das interações \n entre organismos \n vivos e seu ambiente.",
    },
    {
        pergunta: "O que é homeostase?",
        respostaCerta: " Capacidade \n dos organismos \n de estar em \n equilíbrio dinâmico ",
        respostaErrada1: "Capacidade \n  dos organismos de reagir \n a estímulos ",
        respostaErrada2: "Capacidade \n  dos organismos de \n se movimentarem.",
        respostaErrada3: "Capacidade \n  dos organismos \n de crescerem",
    },
    {
        pergunta: "O composto inorganico mais presente no corpo humano:",
        respostaCerta: "Aguá.",
        respostaErrada1: "Proteina.",
        respostaErrada2: "Enxofre.",
        respostaErrada3: "Citoplasma.",
    },
    {
        pergunta: "Qual destes pesquisadores realizou um experimento com ratos?",
        respostaCerta: "Baptista Van Helmont",
        respostaErrada1: "Francesco Redi",
        respostaErrada2: "Pasteur",
        respostaErrada3: "Louis Joblot",
    },
    {
        pergunta: "A transmissão de características genéticas de pai para filho por meio de DNA recebe o nome de:",
        respostaCerta: "Hereditariedade",
        respostaErrada1: "Reação",
        respostaErrada2: "Irritabilidade",
        respostaErrada3: "Cissiparidade",
    },
    {
        pergunta: "É possível que seres de reprodução assexuada evoluam?",
        respostaCerta: "Sim, por meio de \n mutações genéticas \n que ocorrem durante \n a replicação do DNA.",
        respostaErrada1: "Não, porque \n a reprodução assexuada \n não permite \n variação genética.",
        respostaErrada2: "Sim, por meio de \n transferência de genes \n entre eles e seres \n de reprodução sexuada.",
        respostaErrada3: "Não, porque \n a evolução requer \n reprodução sexual \n para combinar \n diferentes genes.",
    },
    /*Falta Uma Aqui*/
]
var buttons = []
var perguntaSelecionada
novoTurno()