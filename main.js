noseX = 0;
noseY = 0;
difference = 0;
leftwristX = 0;
rightwristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(500,550);
    canvas.position(580,75);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initilized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " +noseX+ " noseY = " +noseY);

        leftwristX =  results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX) ;
        
    }
}

function draw(){
    background("#07fa02");

    
    
    textSize(difference);
    fill("#FFE787");
    text('Rachith' , 50 , 400);
}