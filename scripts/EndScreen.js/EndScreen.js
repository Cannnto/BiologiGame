var winner
function endGame(winner_)
{
    winner = winner_
    clearInterval(timer)
    timer = setInterval(transicionEnd, 1000/30)
    
}
var transicionheight = 0
function transicionEnd()
{   ctx.fillStyle = 'red';
    transicionheight+=20;
    ctx.fillRect(0, 0,  canvas.width, transicionheight);
    
    var transAux = 0;
    for(let i=0; i < canvas.width; i+=parseInt(canvas.width/20))
    {   transAux++
        if(!(transAux%2)) ctx.fillRect(i, transicionheight, parseInt(canvas.width/20), 40);
    }

    if(transicionheight > canvas.height)
    {   clearInterval(timer)
        timer = setInterval(endGameScreen(),1000/30);
    }
}

var blockSizePodium = {width: (400/32), height: (400/32)};
var blockSizeA, blockSizeB;
var posicionA, posicionB; 

var blockSizeWinner = {width: (200/32), height: (200/32)};
var blockSizeLoser = {width: (100/32), height: (100/32)};
var posicionWinner = {x: canvas.width/2 - 100, y: canvas.height/2 - 100};
var posicionLoser = {x: canvas.width*3.5/10 - 100, y: canvas.height*7/10 - 100};

function endGameScreen()
{   
    if(winner == 'p1')  ctx.fillStyle = currentCharA.color[1];
    else ctx.fillStyle = currentCharB.color[2]

    ctx.fillRect(0,0,canvas.width,canvas.height);
    document.body.style.cursor = "default";
    ctx.fillStyle = "white";
    ctx.font = "bold 40px arial";


    
    
    if(winner == "p1"){
        ctx.fillText("Player 1 Wins!",canvas.width*3/6,canvas.height*2/10);
        blockSizeA = blockSizeWinner;
        posicionA = posicionWinner;
        blockSizeB = blockSizeLoser;
        posicionB = posicionLoser;
    }
    else{
        ctx.fillText("Player 2 Wins!",canvas.width*3/6,canvas.height*2/10);
        blockSizeA = blockSizeLoser;
        posicionA = posicionLoser;
        blockSizeB = blockSizeWinner;
        posicionB = posicionWinner;
    }

    ctx.save();
        if(posicionA == posicionLoser)
        {   ctx.translate(posicionA.x + 50, posicionA.y + 50);
            ctx.scale(-1,1);
            ctx.translate(-(posicionA.x + 50), -(posicionA.y + 50));
        }
        for(let eachRow = 0; eachRow < rows; eachRow++)
        {   for(let eachColun = 0; eachColun < coluns; eachColun++)
            {   let arrayIndex = eachRow * coluns + eachColun;
                if(currentCharA.map[arrayIndex] >= 0)
                    {   ctx.fillStyle = currentCharA.color[currentCharA.map[arrayIndex]];

                        ctx.fillRect(posicionA.x + blockSizeA.width*eachColun, posicionA.y+blockSizeA.height*eachRow, blockSizeA.width+1, blockSizeA.height+1);
                }            
            }
        } 
    ctx.restore();
    ctx.save();
        if(posicionB == posicionLoser)
        {   ctx.translate(posicionB.x + 50, posicionB.y + 50);
            ctx.scale(-1,1);
            ctx.translate(-(posicionB.x + 50), -(posicionB.y + 50));
        }
        for(let eachRow = 0; eachRow < rows; eachRow++)
        {   for(let eachColun = 0; eachColun < coluns; eachColun++)
            {   let arrayIndex = eachRow * coluns + eachColun;
                if(currentCharB.map[arrayIndex] >= 0)
                    {   ctx.fillStyle = currentCharB.color[currentCharB.map[arrayIndex]];

                        ctx.fillRect(posicionB.x + blockSizeB.width*eachColun, posicionB.y+blockSizeB.height*eachRow, blockSizeB.width+1, blockSizeB.height+1);
                }            
            }
        } 
    ctx.restore();
    //---------------------------------------------------------------------------------------//
    for(let eachRow = 0; eachRow < rows; eachRow++)
    {   for(let eachColun = 0; eachColun < coluns; eachColun++)
        {   let arrayIndex = eachRow * coluns + eachColun;
            if(podium[arrayIndex] >= 0)
                {   ctx.fillStyle = podiumColors[podium[arrayIndex]];
                    ctx.fillRect(canvas.width/2-200+blockSizePodium.width*eachColun, 500+blockSizePodium.height*eachRow, blockSizePodium.width+1, blockSizePodium.height+1);
            }            
        }
    } 
}


var podium = [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,1,1,1,1,1,1,1,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,,,,,,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,3,3,3,1,,,,,,,,,,3,3,3,3,3,3,1,3,1,3,3,3,3,3,3,3,3,3,3,3,3,1,,,,,,,,,,,,1,1,3,1,3,1,3,1,3,1,3,1,1,3,3,3,1,3,3,1,,,,,,,,,,,,,,1,3,1,3,1,3,1,3,1,3,1,1,3,3,3,3,3,1,,,,,,,,,,,,,,,1,3,1,3,1,3,1,3,1,3,1,1,3,1,3,3,3,1,,,,,,,,,,,,,,,1,3,1,3,1,3,1,3,1,3,1,1,3,1,3,1,3,1,,,,,,,,,,,,,,,1,3,1,3,1,3,1,3,1,3,1,1,3,1,3,1,3,1,,,,,,,,,,,,,,,1,3,1,3,3,4,1,4,1,3,1,1,4,1,3,3,3,1,,,,,,,,,,,,,,,1,3,1,3,4,4,4,4,4,3,1,4,4,1,3,3,3,1,,,,,,,,,,,,,,,1,3,1,3,1,4,1,4,3,3,1,1,4,3,3,1,3,1,,,,,,,,,,,,,,,1,3,1,3,4,4,4,4,4,3,1,1,4,1,3,1,3,1,,,,,,,,,,,,,,,1,3,1,3,1,4,3,4,3,3,1,1,4,1,3,1,3,1,,,,,,,,,,,,,,,1,3,1,3,1,3,3,3,1,3,1,3,3,1,3,1,3,1,,,,,,,,,,,,,,,1,3,1,3,1,3,1,3,1,3,1,3,3,1,3,1,3,1,,,,,,,,,,,,,,,1,3,1,3,1,3,1,3,1,3,1,3,3,1,3,1,3,1,,,,,,,,,,,,,,,1,3,1,3,1,3,1,3,1,3,1,3,3,1,3,1,3,1,,,,,,,,,,,,,,,1,3,1,3,1,3,1,3,1,3,1,1,3,1,3,1,3,1,,,,,,,,,,,,,,,1,3,1,3,3,3,3,3,1,3,3,1,3,1,3,1,3,1,,,,,,,,,,,,,,,1,3,3,1,3,3,3,3,1,1,3,1,3,1,3,1,3,1,,,,,,,,,,,,,,,1,1,3,1,3,3,3,3,1,1,3,1,3,1,3,1,3,1,,,,,,,,,,,,,,,1,1,3,1,3,3,1,3,1,3,3,1,3,1,3,1,3,1,,,,,,,,,,,,,,,1,1,3,1,1,3,1,3,1,3,1,1,3,1,3,1,3,1,,,,,,,,,,,,,,1,1,3,3,3,1,3,1,3,1,1,3,3,1,3,3,3,1,1,1,,,,,,,,,,,,1,1,1,3,3,3,3,3,3,3,1,1,1,3,1,3,3,3,3,3,3,3,,,,,,,,,,3,3,3,3,3,3,3,3,1,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,,,,,,,,1,1,1,1,1,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,3,3,3,3,1,1,,,];
var podiumColors = ['#000000','#fbff00','#fdff6b','#dde000','#fcff5c','#b9bc01'];