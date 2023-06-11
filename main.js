status = ""; //var for storing status

function preload() {}

function setup() {
    canvas = createCanvas(480, 380); //canvas created
    canvas.position(520, 280); //canvas positioned

    video = createCapture(VIDEO); //video captured
    video.hide(); //extra video component hidden
}

function start() {
    obj_detector = ml5.objectDetector("cocossd", modelLoaded); //cocossd model loaded
    document.getElementById("status").innerHTML = "Status: Detecting Objects"; //status changed in html
    find = document.getElementById("findobject").value; //user's text stored in var
    console.log(find); //var consoled
}

function modelLoaded() {
    console.log("Model loaded!"); 
    status = true; //status set to true
}

function draw() {
    image(video, 0, 0, 480, 380); //video displayed on canvas
}