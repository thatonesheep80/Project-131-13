img = "";
status = "";

function setup()
{
    canvas = createCanvas(640, 420);
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function draw()
{
    image(img, 0, 0, 640, 420);
}

function preload()
{
    img = loadImage("tv and laptop.jpg");
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}

function back1()
{
    window.location = "index.html";
}