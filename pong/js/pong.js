//canvas and context
var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)

//timer to make the game run at 60fps
var timer = setInterval(main, 1000/60)

//global friction variable
var fy = .97

//p1 setup
const player = [];
player[0] = new Player()
player[1] = new Player()

const pad = []
pad[0] = player[0].pad
pad[1] = player[1].pad

pad[0].w = 20
pad[0].h = 150
pad[0].x = 0 + pad[0].w/2
pad[0].color = `red`


pad[1].w = 20
pad[1].h = 150
pad[1].x = 780 + pad[1].w/2
pad[1].color = `blue`






//ball setup
var ball = new Box();
ball.w = 20
ball.h = 20
ball.vx = Math.round(rand(-1, 1)) * 3

if(ball.vx === 0)
{
    ball.vx = 3
}

ball.vy = 5
ball.color = `orange`

function rand(min, max)
{
    return Math.random() * (max - min) + min
}

console.log(ball.vx)



function main()
{
    //erases the canvas
    ctx.clearRect(0,0,c.width,c.height)
    
    //p1 accelerates when key is pressed 
    if(keys[`w`])
    {
       pad[0].vy += -pad[0].force
    }
    //pad[1] key up
    if(keys[`ArrowUp`])
    {
        pad[1].vy += -pad[1].force
    }

    if(keys[`s`])
    {
        pad[0].vy += pad[0].force
    }
    //pad[1] key down
    if(keys[`ArrowDown`])
    {
        pad[1].vy += pad[1].force
    }

    //applies friction
    pad[0].vy *= fy
    pad[1].vy *= fy
    //player movement
    pad[0].move();
    pad[1].move();

    //ball movement
    ball.move()

    //p1 collision
    if(pad[0].y < 0+pad[0].h/2)
    {
        pad[0].y = 0+pad[0].h/2
    }
    if(pad[0].y > c.height-pad[0].h/2)
    {
        pad[0].y = c.height-pad[0].h/2
    }
    //pad[1] collision
    if(pad[1].y < 0+pad[1].h/2)
    {
        pad[1].y = 0+pad[1].h/2
    }
    if(pad[1].y > c.height-pad[1].h/2)
    {
        pad[1].y = c.height-pad[1].h/2
    }

    
   

    //ball collision 
    if(ball.x < 0)
    {
        ball.x = c.width/2
        ball.y  =c.height/2
        player[1].score += 1

    }
    if(ball.x > 800)
    {
        ball.x = c.width/2
        ball.y = c.height/2
        player[0].score += 1
    }
    if(ball.x > c.width)
    {
        ball.x = c.width
        ball.vx = -ball.vx
    }
    if(ball.y < 0)
    {
        ball.y = 0
        ball.vy = -ball.vy
    }
    if(ball.y > c.height)
    {
        ball.y = c.height
        ball.vy = -ball.vy
       
    }

    //p1 with ball collision
    if(ball.collide(pad[0]))
    {
        ball.x = pad[0].x + pad[0].w/2 + ball.w/2
        ball.vx = -ball.vx;
    }
    //pad[1] with ball collision
    if(ball.collide(pad[1]))
    {
        ball.x = pad[1].x - pad[1].w/2 - ball.w/2
        ball.vx = -ball.vx;
    }

    //draw the objects
    pad[0].draw()
    pad[1].draw()
    ball.draw()
    console.log(`${player[0].score} | ${player[1].score}`)
}
