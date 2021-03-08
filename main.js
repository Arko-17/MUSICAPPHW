song1="";
song2="";
scoreleftWrist=0;
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;
function preload(){
song1=loadSound("Megaforce.mp3");
//song2=loadSound("DinoCharge.mp3");
}
function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}
function draw(){
image(video,0,50,600,500);
}