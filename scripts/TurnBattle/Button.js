class Button{
    constructor(x,y,width,height,fontSize,text,certa)
    {   this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.fontSize = fontSize;
        this.text = text;
        this.color = "white";
        this.certa = certa;
    }

    draw()
    {   
        if(mouse.x>=this.x && mouse.x<=this.x+this.width && mouse.y >= this.y && mouse.y <= this.y+this.height)
        {
            this.color = "green";
            document.body.style.cursor = "pointer";
            /*
                if(mouse.clicked){
                    mouse.clicked = false
                }
                if(new Date()-data > 1000)
                {
                    mouse.clicked = true
                    data = new Date()
                }
            */
            if(keys[1] && new Date()-data > 500)
            {   
                if(this.certa)
                {
                    //causa dano
                    perguntas.splice(perguntas.indexOf(perguntas[perguntaSelecionada]),1)
                    Dano();
                    novoTurno();
                    turno++;
                }else{
                    //se fode
                    novoTurno();
                    turno++;
                }
                data = new Date();
            }
        }else   this.color = "white";
        

        ctx.fillStyle = '' + this.color;
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(this.x,this.y,this.width,this.height);

        ctx.textAlign = "center";
        ctx.textBaseline = "middle"
        write(this.x+this.width/2, this.y+this.height/2, this.text, this.fontSize)
    }
}

class MenuBtns extends Button{
    constructor(x,y,width,height,fontSize,text,func)
    {
        super(x,y,width,height,fontSize,text)
        this.func = func
    }

    draw()
    {
        if(mouse.x>=this.x && mouse.x<=this.x+this.width && mouse.y >= this.y && mouse.y <= this.y+this.height)
        {
            this.color = "gray"
            document.body.style.cursor = "pointer"
            /*
                if(mouse.clicked){
                    mouse.clicked = false
                }
                if(new Date()-data > 1000)
                {
                    mouse.clicked = true
                    data = new Date()
                }
            */
            if(keys[1] && new Date()-data > 500)
            {   
                eval("this." + this.func)
                data = new Date()
            }
        }else{
            this.color = "white"
        }

        ctx.fillStyle = '' + this.color
        ctx.fillRect(this.x,this.y,this.width,this.height)
        ctx.strokeStyle = 'black'
        ctx.strokeRect(this.x,this.y,this.width,this.height)

        ctx.textAlign = "center";
        ctx.textBaseline = "middle"
        write(this.x+this.width/2, this.y+this.height/2, this.text, this.fontSize)
    }

    iniciar()
    {
        clearInterval(timer)
        timer = setInterval(menu, 1000/30)
    }
    
    mute()
    {
        music.pause()
    }
}