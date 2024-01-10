var c = document.querySelector(`canvas`);
var ctx = c.getContext(`2d`);
var timer = setInterval(main, 1000/60);




var ball = [new Box(), new Box(), new Box()]

ball[1].y = 300
ball[0].color= `red`
ball[2].y = 600
ball[2].color = `green`


function main()
{
    ctx.clearRect(0,0,c.width,c.height)


    for(let i=0; i<ball.length; i++)
    {
        ball[i].move()
        ball[i].draw()
    }

}