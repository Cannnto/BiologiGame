class Rect
{   constructor(x,y,width,height)
    {   this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw(color)
    {   ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

    }
    collide(r1, r2) 
    {   if (r1.x + r1.width >= r2.x &&    // r1 right edge past r2 left
            r1.x <= r2.x + r2.width &&    // r1 left edge past r2 right
            r1.y + r1.height >= r2.y &&    // r1 top edge past r2 bottom
            r1.y <= r2.y + r2.height) {    // r1 bottom edge past r2 top
            return true;
        }
        return false;
    }
}