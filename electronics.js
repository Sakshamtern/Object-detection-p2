img = "";

function preload()
{
    img = loadImage("Electronics.jpg"); 
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
    text("Tablet", 30, 190);
    noFill();
    stroke("red");
    rect(15, 175, 350, 240);

    fill("red");
    text("Laptop", 30, 50);
    noFill();
    stroke("red");
    rect(15, 35, 350, 140);

    fill("red");
    text("Mouse", 450, 50);
    noFill();
    stroke("red");
    rect(435, 35, 200, 140);
}