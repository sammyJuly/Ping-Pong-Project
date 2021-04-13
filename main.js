var paddle2 =10,paddle1=10;
 var paddle1X = 10,paddle1Height = 110; var paddle2Y = 685,paddle2Height = 70;
  var score1 = 0, score2 =0; var paddle1Y; var playerscore =0; var pcscore =0; //ball x and y and speedx speed y and radius var ball = { x:350/2, y:480/2, r:20, dx:3, dy:3 }



function preload() {
	ball_touch_paddel = loadSound("ball_touch_paddel.wav"); missed = loadSound("missed.wav"); }
}

function setup() {
	canvas = createCanvas(650,400);
	video=createCapture(VIDEO);
	video.size(600,300);

	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);
}
function modelLoaded(){
	console.log('Model Loaded!');

}

function draw() {
background("#D3D3D3")
if(noseX<300){
marioX=marioX-1;
}if(noseX>300){
	marioX=marioX+1;
	}
	if(noseX<150){
		marioX=marioX-1;
		}

image(img,marioX,marioY,40,70);
}
function startGame(){
	GameStatus="start";
	document.getElementById("status").innerHTML="Game Is Loading";
	
}

function game(){
	console.log("noseX="+noseX+",noseY="+noseY);
}
function gotPoses(results)
{
  if(results.length > 0)
  {
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +", noseY = " + noseY);
  }
}






