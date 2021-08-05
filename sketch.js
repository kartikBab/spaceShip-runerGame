var ground
var x

function preload (){
    ground = loadImage("space0.png")
}

function setup () {
    createCanvas (displayWidth,displayHeight)
    x = createSprite(displayWidth/2,displayHeight/2
        ,displayWidth,displayHeight-200)
    x.scale=2
    x.addImage(ground)
}

function draw (){
    drawSprites()
}