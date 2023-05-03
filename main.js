object = "";
status ="";

function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start()
{
    object_detector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    object = document.getElementById("input").value ;
}

function modelLoaded()
{
    console.log("your model is loaded!");
    status = true;
}

function draw()
{
    image(video, 0, 0, 480, 380);
}