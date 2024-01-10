class Box
{
    constructor()
    {
        this.x = 100
        this.y = 100
        this.w = 100
        this.h = 100
        this.vx = 5
        this.vy = 0
        this.color = `rgb(0,255,255)`
    }

    move()
    {
        this.x += this.vx
        this.y += this.vy
    }

    draw()
    {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.w, this.h)

    }

}