img = "";

function preload()
{
    img = loadImage("bottles.jpg"); 
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 420);

    fill("red");
    text("Bottles", 30, 15);
    noFill();
    stroke("red");
    rect(15, 0, 600, 380);
}