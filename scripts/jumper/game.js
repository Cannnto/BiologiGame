var player1 = new Player (canvas.width/3, 0, 60, 60);
var player2 = new Player (canvas.width/2, 0, 60, 60);

var rows = 32;
var coluns = 32;
var blockSize = {width: (canvas.width/coluns), height: (canvas.height/rows)};
var map = [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,4,4,5,5,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,4,4,4,4,4,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,4,5,4,4,4,5,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,4,4,4,5,4,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,1,6,6,4,5,4,4,4,4,6,6,6,6,6,6,6,6,1,1,6,1,6,6,6,6,6,6,6,6,6,6,1,1,1,6,6,4,4,4,4,6,6,6,6,6,6,6,6,1,3,1,6,3,6,6,6,6,6,6,6,6,6,6,6,6,3,6,6,6,6,6,6,6,6,6,6,6,6,6,6,1,6,3,6,3,1,6,6,6,6,6,6,6,6,6,6,6,3,6,6,3,6,6,6,6,6,6,6,6,1,6,6,6,6,3,3,1,1,6,6,6,6,6,6,6,6,6,6,6,6,1,6,3,3,6,1,6,6,6,6,6,1,6,6,6,6,6,3,6,6,6,6,6,6,6,6,3,6,6,6,6,1,1,6,6,3,3,1,1,6,6,6,6,3,6,6,1,6,3,6,6,6,6,6,6,6,6,6,3,3,6,6,6,6,3,6,6,3,3,6,6,6,6,6,6,3,6,6,1,1,3,6,6,6,6,1,6,6,6,6,6,3,3,3,3,6,3,6,6,3,6,6,6,6,6,6,6,1,3,6,6,1,1,6,6,1,6,1,6,6,6,6,6,1,1,6,3,3,3,3,1,1,6,6,6,6,6,6,6,1,1,1,3,3,6,6,1,3,3,1,6,6,6,3,1,1,6,6,6,6,3,3,1,1,6,6,6,6,6,6,6,6,6,1,3,3,6,6,3,1,1,1,6,6,6,6,6,6,6,6,6,6,1,3,6,6,6,6,6,6,6,6,6,6,6,6,3,3,3,7,1,1,6,6,6,6,6,6,6,6,6,6,6,6,6,3,3,6,6,6,6,6,6,6,6,6,6,6,3,3,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,3,3,6,6,6,6,6,6,6,6,6,6,6,3,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,3,3,6,6,6,6,6,6,6,6,6,6,6,3,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,3,3,6,6,6,6,6,6,6,6,6,6,6,3,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,3,6,6,6,6,6,6,6,6,6,6,3,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,3,6,6,6,6,6,6,6,6,6,6,3,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,3,6,6,6,6,6,6,6,6,6,6,3,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,3,6,6,6,6,6,6,6,6,6,3,3,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,3,6,6,6,6,6,6,6,6,6,3,3,3,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,3,3,3,7,6,6,6,6,0,0,0,0,0,0,0,0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,3,3,3,3,3,7,6,6,6,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,0,0,0,0,8,8,8,8,8,8,8,8,8,8,8,8,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2,2,2,2,2,2,2,2,2,2,2,2,2,2];
var colors = ['#8edf16','#76a234','#734d21','#6f341b','#46516d','#626a7f','#1d2044','#562915','#61421f','#ffffff'];

function jumper()
{   
    for(let eachRow = 0; eachRow < rows; eachRow++)
    {   for(let eachColun = 0; eachColun < coluns; eachColun++)
        {   let arrayIndex = eachRow * coluns + eachColun;
            if(map[arrayIndex] >= 0)
            {   ctx.fillStyle = colors[map[arrayIndex]];
                ctx.fillRect(blockSize.width*eachColun, blockSize.height*eachRow, blockSize.width+1, blockSize.height+1);
            }            
        }
    }

    player1.draw('blue');
    player1.update();
    player2.draw('green');
    player2.update();


    if(keys[68] && player1.grounded)    player1.move(-10,10);
    if(keys[65] && player1.grounded)    player1.move(190,10);
    if(keys[87] && player1.grounded)    player1.move(-90,15);
    if(keys[83])    player1.atack();

    if(keys[39] && player2.grounded)    player2.move(-10,10);
    if(keys[37] && player2.grounded)    player2.move(190,10);
    if(keys[38] && player2.grounded)    player2.move(-90,15);
    if(keys[40])    player2.atack();

    document.body.style.cursor = "default";
}

var transicionWidth = 0;
function transicion()
{   ctx.fillStyle = 'black';
    transicionWidth+=20;
    ctx.fillRect(0, 0, transicionWidth, canvas.height);
    var transAux = 0;
    for(let i=0; i< canvas.height; i+=parseInt(canvas.height/20))
    {   transAux++;
        if((transAux%2)) ctx.fillRect(transicionWidth,i,20,parseInt(canvas.height/20));
    }
    if(transicionWidth > canvas.width)
    {   clearInterval(timer)
        timer = setInterval(TurnBattle,1000/30);
    }
}