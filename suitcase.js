img = "";

function preload()
{
    img = loadImage("Suitcase and TV.jpg"); 
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
    text("suitcase", 30, 190);
    noFill();
    stroke("red");
    rect(15, 175, 285, 240);

    fill("red");
    text("suitcase", 400, 190);
    noFill();
    stroke("red");
    rect(385, 175, 285, 240);

    fill("red");
    text("TV", 100, 30);
    noFill();
    stroke("red");
    rect(85, 15, 500, 100);
}