class Player extends Rect
{   constructor(x,y,width,height)
    {   super(x,y,width,height);
        this.gravidade = 1;
        this.velocity = {x:0, y:0};

        this.blockSize = {width: (this.width/32), height: (this.height/32)};
        this.atackSize = {width: ((this.width+60)/32), height: ((this.height+60)/32)};
        this.a = {aTime: 1.5*30, aCurrent:0, aux:0}
        this.atackMap = [,0,,,,,1,,,,,,,,,,,,0,0,,,0,,,,0,,,,,,,,0,,,,1,,,1,0,,,1,,,,,0,,,,,,,,,,,,1,1,,,0,0,,,,,,1,0,0,,1,,,,0,0,,,,,,,0,,,,1,,,,1,,,0,,,,,,,0,,1,,,,0,,,,0,,,0,,,,,1,,,,,1,,0,0,0,0,,,,0,,1,1,,,0,,,0,,,,0,,,,1,1,,,,,1,1,,,,0,,,,,0,,,,,,,,,,,0,,,,1,1,,,,,,,,1,,,0,0,0,,,,,,,0,,,,,,,0,,,,1,,,,,,,0,0,1,1,,,,,,,,,,,0,,,,,,,0,,,1,,,,,,,,,,0,,,,,,,,,,,,,,,,,,,0,,,,,,,,,,,,,0,0,,,,,,,,,,,,,,,,,0,,,,,,,0,0,,,,,,,0,0,0,,,,,,,,,,,,,,,0,,,,,0,0,0,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,0,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,0,,,,,0,0,0,,,,,,,,,,,,,,,,,,,,,,,,0,0,,,,,,,0,0,,,,,,,,,,,,,,,,,,,,,0,0,,,,,,,,,,0,,0,0,0,0,,,,,,,,,,,,,,0,0,,,1,,1,,1,1,1,1,,,0,,0,0,,,,,,,,,,,,,,,,,1,,,,,,,,,1,,,,,,,,,,,,,,,,,,,,,,,,,,,,0,,,,1,1,1,1,,,,,,,,,,,,,,,,,,,,,,,,0,0,,,,,,,,,,0,0,,,,,,,,,,,,,,,,,0,0,0,0,,,,,,,,0,0,0,,,,,,,,,,,,,,,,,,0,0,,,,,,,0,0,0,0,0,,,,,,,,,,,,,,,,,,,0,,,,,,,,,0,0,,,,,,,,,,,,,,,,,,,,,0,,,,,,,1,1,,,0,,1,1,,,,0,,,,,,,,,,,,,,,,,,1,1,1,,,,,,,1,,,,0,0,,,,,,,,,,,,0,,,,,,,,,,,,,1,1,,,0,0,,,,,,,,,,,,,,0,,1,1,,0,,,,,,,,,,,0,0,,,,,0,,,,,0,,,,,0,,,1,,,0,1,,,,,,1,0,0,0,,,,,0,0,,,,,,0,0,,,,0,0,1,,,,0,1,0,,,,,,,,,,,0,0,,,,,,,,0,,,,,0,1,1,,,,1,1,,,,,,,,,,0,0,,,,,,,,,0,0,,,,,0,1,,,,,1,,1,,1,1,,,,0,0,,,1,,,,,,,,0,,,,,0,1,1,,,,,1,,,,,,,0,0,,,1,,,,,,,,,0,0,,,,,0,1,,,,,1];
        
        this.grounded;
        this.char;
        this.time = 0;
    }

    move(angle, magnitude)
    {   this.velocity.x += magnitude*Math.cos(angle * Math.PI/180);
        this.velocity.y += magnitude*Math.sin(angle * Math.PI/180);
    }

    atack()
    {   this.atackHitbox = {x: this.x-30, y: this.y-30, width: this.width+60, height: this.height+60};
        
        if(!this.a.aux)
        {   for(let eachRow = 0; eachRow < rows; eachRow++)
            {   for(let eachColun = 0; eachColun < coluns; eachColun++)
                {   let arrayIndex = eachRow * coluns + eachColun;
                    if(this.atackMap[arrayIndex] >= 0)
                    {   ctx.fillStyle = this.char.color[this.atackMap[arrayIndex]];
                        ctx.fillRect(this.x-30+this.atackSize.width*eachColun, this.y-30+this.atackSize.height*eachRow, this.atackSize.width+1, this.atackSize.height+1);
                    }            
                }
            }
            this.a.aux++;

            if(this.char.type)
            {   if(this.collide(this.atackHitbox, player1)){
                    clearInterval(timer);
                    timer = setInterval(transicion,1000/30);    
                    p1.turno = 1;
                }
            }
            else
            {   if(this.collide(this.atackHitbox, player2)){
                    clearInterval(timer)
                    timer = setInterval(transicion,1000/30);    
                    p1.turno = 0;
                }   
            }
        }
    }

    draw()
    {   ctx.save();
            if(this.char.type)
            {   ctx.translate(this.x + this.width/2, this.y + this.height/2);
                ctx.scale(-1,1);
                ctx.translate(-(this.x + this.width/2), -(this.y + this.height/2));
            }
            for(let eachRow = 0; eachRow < rows; eachRow++)
            {   for(let eachColun = 0; eachColun < coluns; eachColun++)
                {   let arrayIndex = eachRow * coluns + eachColun;
                    if(this.char.map[arrayIndex] >= 0)
                    {   ctx.fillStyle = this.char.color[this.char.map[arrayIndex]];
                        ctx.fillRect(this.x+this.blockSize.width*eachColun, this.y+this.blockSize.height*eachRow, this.blockSize.width+1, this.blockSize.height+1);
                    }            
                }
            }
        ctx.restore();
    }
    update()
    {   if(this.a.aux){
            this.a.aCurrent++;
        }
        if(this.a.aCurrent == this.a.aTime){
            this.a.aux = 0;
            this.a.aCurrent = 0;
        }
        this.velocity.y+=this.gravidade;

        this.y += this.velocity.y;
        this.x += this.velocity.x;

        if(this.x+this.width >= canvas.width || this.x <= 0){
            this.x -= this.velocity.x;  

            this.velocity.x = 0;
        }

        this.grounded = false;
        if(this.y+this.height > canvas.height*5.4/6)
        {   this.x -= this.velocity.x;
            this.y -= this.velocity.y;

            this.grounded = true;
            this.velocity.x = 0;
            this.velocity.y = 0;
        }
    }
}