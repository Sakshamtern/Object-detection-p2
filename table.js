img = "";

function preload()
{
    img = loadImage("Table.jpg"); 
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
    text("table", 160, 190);
    noFill();
    stroke("red");
    rect(145, 175, 285, 240);
    
    fill("red");
    text("chair", 500, 170);
    noFill();
    stroke("red");
    rect(485, 155, 250, 240);

    fill("red");
    text("chair", 30, 170);
    noFill();
    stroke("red");
    rect(15, 155, 250, 240);
}