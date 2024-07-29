function random(max){
    return parseInt(Math.random()*max);
}

function DrawBattleTerrain(lineWidth)
{   
    var lineWidthVar = ctx.lineWidth = ''+lineWidth;

    ctx.fillStyle = "green";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.strokeStyle = 'black';
    ctx.strokeRect(lineWidthVar/2,lineWidthVar/2,canvas.width-lineWidthVar,canvas.height-lineWidthVar);
}

function DrawHud()
{
    ctx.strokeStyle = "black";
    ctx.strokeRect(0,canvas.height-250,canvas.width,250);

    ctx.fillStyle = "white";
    ctx.fillRect(10,canvas.height-245,canvas.width-20,245);

    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "black";
    write(50,canvas.height-220,perguntas[perguntaSelecionada].pergunta,30)

    for(var i = 0; i<buttons.length; i++)   buttons[i].draw();
    
    ctx.lineWidth = 2;
    ctx.fillStyle = "white";
    ctx.fillRect(canvas.width/10, 30, canvas.width*3/10, 20);
    ctx.fillRect(canvas.width*6/10, 30, canvas.width*3/10, 20);
    
    ctx.fillStyle = "red"
    ctx.fillRect(canvas.width/10, 30, (p1.vida*canvas.width*3/10)/100, 20);
    ctx.fillRect(canvas.width*6/10, 30, (p2.vida*canvas.width*3/10)/100, 20);
    
    ctx.strokeStyle = "black";
    ctx.strokeRect(canvas.width/10, 30, canvas.width*3/10, 20);
    ctx.strokeRect(canvas.width*6/10, 30, canvas.width*3/10, 20);

    ctx.fillStyle = 'white';
    ctx.font = '30px Arial';
    ctx.textAlign = "center";

    ctx.fillText(`${currentCharA.name}`,canvas.width/10 + canvas.width*3/10/2, 80);
    ctx.fillText(`${currentCharB.name}`,canvas.width*6/10 + canvas.width*3/10/2, 80);
}

function Dano(){
    if(turno%2 == 0){if(p1.turno == 0){p2.vida -= 20}else{p1.vida -= 20}};
    if(turno%2 == 1){if(p1.turno == 1){p2.vida -= 20}else{p1.vida -= 20}};
    
    if(p1.vida <= 0) {p1.vida = 0, endGame("p2")};
    if(p2.vida <= 0) {p2.vida = 0, endGame("p1")};
}

function novoTurno()
{
    buttons = []
    perguntaSelecionada = random(perguntas.length);
    var respostas = ["Errada1","Errada2","Errada3","Certa"];
    var posição = 50;
    
    for(var i = 4; i>0; i--)
    {
        var randomNumber = random(i);
        if(respostas[randomNumber] == "Certa")buttons.push(new Button(posição,canvas.height-200,400,175,30,eval("perguntas[perguntaSelecionada].resposta"+respostas[randomNumber]),true));
        else   buttons.push(new Button(posição,canvas.height-200,400,175,30,eval("perguntas[perguntaSelecionada].resposta"+respostas[randomNumber]),false));
        
        respostas.splice(respostas.indexOf(respostas[randomNumber]),1);
        posição+=430;
    }
}

/*--------------------Sprites-Draw------------------------*/

var blockSizeClose = {width: (350/32), height: (350/32)};
var blockSizeFar = {width: (150/32), height: (150/32)};
var aux1 = {width: 0, height:0}, aux2 = {width: 0, height:0};

function DrawCaracthers(){
    if(p1.turno != turno%2)
    {
        aux1 = blockSizeFar;
        aux2 = blockSizeClose;

        ctx.lineWidth = 10;
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.ellipse(canvas.width*7.5/10, canvas.height*6/10, 300, 100, 0, 0, 2*Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(canvas.width*2/10, canvas.height*3.7/10, 125, 40, 0, 0, 2*Math.PI);
        ctx.stroke();
        
        ctx.fillStyle ="rgb(84, 70, 30)";
        ctx.beginPath();
        ctx.ellipse(canvas.width*7.5/10, canvas.height*6/10, 300, 100, 0, 0, 2*Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.ellipse(canvas.width*2/10, canvas.height*3.7/10, 125, 40, 0, 0, 2*Math.PI);
        ctx.fill();


    }else{
        aux2 = blockSizeFar;
        aux1 = blockSizeClose;

        ctx.lineWidth = 10;
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.ellipse(canvas.width*2.5/10, canvas.height*6/10, 300, 100, 0, 0, 2*Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(canvas.width*8/10, canvas.height*3.7/10, 125, 40, 0, 0, 2*Math.PI);
        ctx.stroke();
        
        
        ctx.fillStyle ="rgb(84, 70, 30)";
        ctx.beginPath();
        ctx.ellipse(canvas.width*2.5/10, canvas.height*6/10, 300, 100, 0, 0, 2*Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.ellipse(canvas.width*8/10, canvas.height*3.7/10, 125, 40, 0, 0, 2*Math.PI);
        ctx.fill();
    }

    for(let eachRow = 0; eachRow < 32; eachRow++)
    {   for(let eachColun = 0; eachColun < 32; eachColun++)
        {   let arrayIndex = eachRow * 32 + eachColun;
            if(currentCharA.map[arrayIndex] >= 0)
            {   ctx.fillStyle = currentCharA.color[currentCharA.map[arrayIndex]];
                ctx.fillRect(canvas.width*1.5/10+aux1.width*eachColun, canvas.height*2/10+aux1.height*eachRow, aux1.width+1, aux1.height+1);
            }
        }
    }

    ctx.save();
        ctx.translate((canvas.width*7/10)+(aux2.width)/2, (canvas.height*2/10)+(aux2.height)/2);
        ctx.scale(-1,1);
        ctx.translate(-((canvas.width*8/10)+(aux2.width)/2), -((canvas.height*2/10)+(aux2.height)/2));

    for(let eachRow = 0; eachRow < 32; eachRow++)
    {   for(let eachColun = 0; eachColun < 32; eachColun++)
        {   let arrayIndex = eachRow * 32 + eachColun;
            if(currentCharB.map[arrayIndex] >= 0)
            {   ctx.fillStyle = currentCharB.color[currentCharB.map[arrayIndex]];
                ctx.fillRect(canvas.width*6.5/10+aux2.width*eachColun, canvas.height*2/10+aux2.height*eachRow, aux2.width+1, aux2.height+1);
            }
        }
    }
    ctx.restore();
}


function TurnBattle()
{   ctx.fillStyle = 'white';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    document.body.style.cursor = "default";



    DrawBattleTerrain(10);
    DrawHud();
    DrawCaracthers();
}