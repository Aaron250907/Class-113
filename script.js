function preload(){

}

function setup(){
canvas = createCanvas(600, 600);
canvas.position(360, 150);
video = createCapture(VIDEO);
video.hide();
}

function draw(){
    image(video, 0, 0, 600, 600);
    fill (127,26,72);
    circle(80, 100, 120 );
    fill (85,159,240);
    rect(160,60, 100, 80);
    fill (85,87,16);
    circle(350, 100, 120);
    fill (32,255,127);
    rect(430,60, 100, 80);
    fill (52,41,37);
    circle(80, 500, 120);
    fill (96,211,3);
    rect(160,450, 100, 80);
    fill (254,8,10);
    circle(350, 500, 120);
    fill (21,3,240);
    rect(430,450, 100, 80);
    fill (85,87,240);
}