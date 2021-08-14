song1="";
song2="";
scoreleftWrist=0;
scorerightWrist=0;
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;
thestatus="";
thestatusright="";
function preload(){
song1=loadSound("megaforce.mp3");
song2=loadSound("DinoCharge.mp3");
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
fill("red");
stroke("red");
thestatus=song1.isPlaying();
thestatusright=song2.isPlaying();
    if(scoreleftWrist>0.01){
        circle(leftwristX,leftwristY,20);
        song2.stop();
            if(thestatus==false){
                song1.play();
                document.getElementById("current").innerHTML="Megaforce Playing Now";
            }
        }
    if(scorerightWrist>0.01){
        circle(rightwristX,rightwristY,20);
        song1.stop();
            if(thestatusright==false){
                song2.play();
                document.getElementById("current").innerHTML="Dino Charge Playing Now";
    }
}
}
function modelLoaded(){
console.log("Model has been loaded");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        scoreleftWrist=results[0].pose.keypoints[9].score;
        scorerightWrist=results[0].pose.keypoints[10].score;
        console.log("Score of Left Wrist="+scoreleftWrist);
        console.log("Score of Right Wrist="+scorerightWrist);
        leftwristX=results[0].pose.leftWrist.x;
        leftwristY=results[0].pose.leftWrist.y;
        rightwristX=results[0].pose.rightWrist.x;
        rightwristY=results[0].pose.rightWrist.y;
        }
}