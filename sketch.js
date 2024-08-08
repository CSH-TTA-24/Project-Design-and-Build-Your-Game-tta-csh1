let xSpeed = 4
let ySpeed = 1

let xSpeed2 = 7
let ySpeed2 = 3

let xSpeed3=5
let ySpeed3=4



let wait = 5000;//I think this is 5 secounds

let xDirection1 = 1;
let yDirection1 = 1;

let xDirection2 = 1;
let yDirection2 = 1;

let xDirection3 = 1;
let yDirection3 = 1;

let myXPos = 70;
let myYPos = 350
let mySize;

let enemyXPos = 300;
let enemyYPos = 300;

let enemyXPos2 = 400;
let enemyYPos2 = 400;

let enemyXPos3 = 600;
let enemyYPos3 = 570;


let enemySize;
let score = 0


// let player
// let enemy_heart

let P_HP = 1000
let its = ""



let countdownDuration = 18000; 

let look = false

function preload() {
  heart = loadImage("/Images/uttt.webp")
  enemy_heart = loadImage("/Images/uttt.webp")
	bone = loadImage("/Images/Bone.png")
  // Blue = loadImage("/Images/blue.png")
	sans = loadImage("/Images/Sans.jpg")
	//song = loadSound("/Sounds/DeepCalled.mp3");
}






function setup() {
  createCanvas(700, 700);
  mySize = random(50, 51);
  enemySize = random(59, 60);
	song = loadSound("/Sounds/DeepCalled.mp3");
	angleMode(DEGREES)

	//song = loadSound('/Sounds/DeepCalled.mp3')

	
}


// function mouseClicked() {

// 	song.play()
// }

function draw() {
  background(0);
  imageMode(CENTER)
  // background(0);
  let player = image(heart, myXPos, myYPos, mySize, mySize)
  image(bone, enemyXPos, enemyYPos, 70, 40)
  player

	

	
	image(bone, enemyXPos2, enemyYPos2, 70, 40)

	image(sans, 350, 180, 100, 150)
	
  image(bone, enemyXPos3, enemyYPos3, 70, 40)
	//^this one is not set to bounch back in the box like the others
	fill(255, 0, 100);
  
  /*
  
  textSize(24);
	text(`${round(millis() / 1000)} ..Secounds`, 550, height / 20);
	//This is the timer^
	if((round(millis() / 1000)) > 6000){
		image(bone, enemyXPos2 + 40, enemyYPos2 + 25, 70, 40)

	} 

	
	/*if(millis() / 1000 > 5) {
^what im trying to use for music to pop up for

			mySound.play()

	}
	*/
	



	
	/* 
	fill(255,255,255)
	stroke(0,0,0)
	rect(70,650,300,600)

for x: 70-650 and for y: 300-600

	strokeWeight()
	
	
*/ 
	
	 strokeWeight(5)
  stroke(255,255,255)
  
  fill(0,0)
  rect(35,275,650,355)

  noStroke()
  
	
	fill(150, 70, 225);


	
  if (keyIsDown(LEFT_ARROW)) {
    myXPos -= 4;
		if(myXPos < 60){
			myXPos += 4
		}
			
  } 

  if (keyIsDown(RIGHT_ARROW)) {
    myXPos += 4;
		if(myXPos > 660){
			myXPos -= 4
		}
  }

  if (keyIsDown(UP_ARROW)) {
    myYPos -= 4;
		if(myYPos < 310){
			myYPos += 4
		}
  }

  if (keyIsDown(DOWN_ARROW)) {
    myYPos += 4;
		if(myYPos > 605){
			myYPos -= 4
		}
  }

  let distance = dist(myXPos, myYPos, enemyXPos, enemyYPos);
  let distance2 = dist(myXPos, myYPos, enemyXPos2, enemyYPos2);
	let distance3 = dist(myXPos, myYPos, enemyXPos3, enemyYPos3)
  
  textSize(20);
  text("Attack: " + score, 20, 20);

  let enemyHp = text(its + P_HP, 20, 40);
  enemyHp

	enemyXPos += xSpeed * xDirection1;
	enemyYPos += ySpeed * yDirection1;

  enemyXPos2 += xSpeed2 * xDirection2
  enemyYPos2 += ySpeed2 * yDirection2

	enemyXPos3 += xSpeed3 * xDirection3
	enemyYPos3 += ySpeed3* yDirection3
	
	
	
	
	
	
	if (enemyXPos > 650 || enemyXPos < 70) {
		xDirection1 *= -1;
		// Sin()
	}

  if (enemyYPos > 600 || enemyYPos < 300) {
    yDirection1 *= -1;
    // Sin()
  }
  
	if (enemyXPos2 > 650 || enemyXPos2 < 70) {
		xDirection2 *= -1;
	}

  if (enemyYPos2 > 600 || enemyYPos2 < 300) {
    yDirection2 *= -1;
  }

	if (enemyXPos3 > 650 || enemyXPos3 < 70) {
			xDirection3 *= -1;
			
		}

	if (enemyXPos3 > 500 || enemyXPos3 < 300) {
		yDirection3 *= -1;

	}

  //timer code

    countdownDuration -= 30;

    if (countdownDuration <= 0 && P_HP > 0) {
      enemyXPos = 900
      enemyXPos2 = 900
      enemyXPos3 = 900
      textSize(30)
      text("Congradulations!!! You passed the test!!!", 100, 400);
    } else if (P_HP <= 0) {
      enemyXPos = 900
      enemyXPos2 = 900
      enemyXPos3 = 900
      textSize(25)
      text("You suck so bad, I had to get rid of the attacks FOR YOU!", 43, 400);
    } else {
      text(countdownDuration, 200, 200);
    }


	
  if (distance <= (mySize / 2) + (enemySize / 2)) {
    enemyXPos = random(300, 599)
    enemyYPos = random(300, 599)
    score = parseInt(random(180, 245))
    P_HP -= score
    its = "HP Left: "
  }

  if (distance2 <= (mySize / 2) + (enemySize / 2)) {
    enemyXPos2 = random(300, 599)
    enemyYPos2 = random(300, 599)
    score = parseInt(random(180, 245))
    P_HP -= score
    its = "HP Left: "
  }

	if (distance3 <= (mySize / 2) + (enemySize / 2)) {
		enemyXPos3 = random(300, 599)
		enemyYPos3 = random(300, 599)
		score = parseInt(random(180, 245))
		P_HP -= score
		its = "HP Left: "
		rotate(43)
	}


  if (P_HP <= 0) {
    enemyXPos = 0
    enemyYPos = 0
    its = "You Killed Yourself"
    P_HP = ""
    // player = image(Blue, myXPos, myYPos, mySize, mySize)

  }


}

