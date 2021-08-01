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
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video, modelLoaded)
posenet.on("pose",gotPoses)
}
function draw(){
image(video,0,0,300,300);
}
function modelLoaded(){
console.log("Model has been loaded");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        scoreleftWrist=results[0].pose.keypoints[9].score;
        console.log("Score of Left Wrist="+scoreleftWrist);
        leftwristX=results[0].pose.leftWrist.x;
        leftwristY=results[0].pose.leftWrist.y;
        rightwristX=results[0].pose.rightWrist.x;
        
        }
}