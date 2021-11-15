img = "";
status = "";
objects = [];

function setup()
{
    canvas = createCanvas(640, 420);
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status2").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function draw()
{
    image(img, 0, 0, 640, 500);

    if(status != "")
    {
        for (i = 0; i < objects.length; i++)
        {
            document.getElementById("status2").innerHTML = "Status : Object Detected";
            
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x , objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

            document.getElementById("Output2").innerHTML = "There are 2 big objects shown in this picture, out of which the cocossd model has identified " + objects[i].length + " objects."
        }
    }
}

function preload()
{
    img = loadImage("fruits.jpg");
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function back2()
{
    window.location = "index.html";
}