var menuBtns = [
    new MenuBtns(canvas.width/2-100,canvas.height*4.5/10,200,100,30,"Iniciar","iniciar()"),
]
var backgroundMenu = [4,3,0,1,4,4,0,4,3,3,3,1,4,3,3,4,4,4,3,3,0,1,5,5,3,3,5,5,4,4,4,0,4,4,3,1,4,4,4,4,4,3,1,4,4,0,1,4,4,3,3,3,3,1,5,3,3,0,5,5,5,4,1,1,4,4,1,4,4,3,3,4,4,0,1,4,4,1,4,3,0,0,4,3,1,5,4,3,4,4,3,5,5,1,4,3,3,0,1,3,3,3,1,1,3,1,0,4,3,3,1,3,3,4,4,1,3,4,4,5,4,4,4,1,1,5,5,4,3,3,3,1,3,1,4,4,3,1,4,3,3,3,1,5,5,3,4,1,4,0,5,5,5,4,1,4,5,3,3,4,5,3,0,1,1,5,4,0,1,4,4,4,5,5,1,4,5,3,1,4,4,3,3,5,5,1,5,5,4,4,3,3,5,1,1,4,5,5,3,4,1,4,3,3,5,1,4,4,0,3,1,4,3,1,3,1,1,4,4,5,3,0,3,0,1,3,4,4,3,5,3,3,1,4,4,3,3,1,4,1,1,1,1,1,1,1,1,5,4,4,4,0,3,4,4,3,1,3,3,4,4,3,3,1,4,4,4,3,1,1,1,3,5,5,1,5,5,4,4,5,5,3,3,3,4,1,4,0,4,3,3,5,4,1,3,1,4,1,1,1,1,4,4,4,5,4,1,5,5,5,4,3,3,0,4,3,1,5,0,0,4,4,5,5,5,1,3,1,1,1,3,3,4,1,4,3,4,4,4,1,5,5,4,3,3,3,4,4,1,5,3,3,4,4,5,3,3,1,1,1,4,1,3,3,3,4,1,3,3,4,5,0,1,1,5,4,3,4,1,1,5,3,3,0,5,5,3,3,3,3,1,4,4,4,1,4,4,4,5,1,1,5,5,5,3,4,1,4,3,1,3,3,4,4,4,0,5,5,4,5,5,1,1,5,4,4,5,1,4,3,5,5,3,1,5,4,3,5,4,1,1,3,3,5,5,4,0,0,5,4,4,1,1,1,5,4,3,5,5,3,4,4,5,5,4,4,1,1,5,5,4,4,4,1,1,1,5,5,3,0,5,4,3,1,5,3,4,4,4,5,3,4,4,4,5,4,4,4,3,5,5,0,4,0,3,4,4,4,1,5,5,3];
var backgroundMenuColors = ['#bdd7bc','#3f2413','#32832f','#54b847','#53a249','#4e9744'];
var blockSizeMenu = {width: (canvas.width/32), height: (canvas.height/16)};

function Menu()
{
    ctx.fillStyle = '#2e5d28'
    ctx.fillRect(0,0,canvas.width,canvas.height)
    
    document.body.style.cursor = "default"

    for(let eachRow = 0; eachRow < 16; eachRow++)
    {   for(let eachColun = 0; eachColun < 32; eachColun++)
        {   let arrayIndex = eachRow * 32 + eachColun;
            if(backgroundMenu[arrayIndex] >= 0)
            {   ctx.fillStyle = backgroundMenuColors[backgroundMenu[arrayIndex]];
                ctx.fillRect(blockSizeMenu.width*eachColun, blockSizeMenu.height*eachRow, blockSizeMenu.width+1, blockSizeMenu.height+1);
            }
        }
    }
    ctx.fillStyle = 'white'
    ctx.font="bold 60px arial"

    ctx.shadowColor = 'black';
    ctx.shadowBlur = 10;
        ctx.fillText("Biologia The Game", canvas.width/2,canvas.height*3/10)
    ctx.shadowBlur = 0;

    for(var i = 0;i<menuBtns.length;i++)
    {
        menuBtns[i].draw()   
    }
}