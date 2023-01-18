//a sketch to randomly pause then jump ahead
//p5js - .mp4


let playing = false;
let fingers;
let button;

let timer = 5 //countdown target, currently drawn to canvas

function setup() {
  createCanvas(400, 400);
  fingers = createVideo(['assets/fingers.mov', 'assets/fingers.webm']);
}

function draw() {
  background(220);
  textAlign(CENTER, CENTER);
  textSize(100);
  text(timer, width/2, height/2);

  // frameCount --> this keeps track of the number of times the program has gone throught the code, 60 = 1 second
  // % ---> this is the Modulo operator, it divides numbers and evaluates to the remainder: 17 % 5 evaluates to 2 remainder
  // this can be used to determine if the number on the left is divisible by the number on the right

  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
    timer == 5;//the "target number"
  }

}

//video play example

// plays or pauses the video depending on current state
function toggleVid() {
  if (playing) {
    fingers.pause();
    button.html('play');
  } else {
    fingers.loop();
    button.html('pause');
  }
  playing = !playing;
}


/////video scrub example

let movie;

function preload() {
  // my video is 640 x 360
  movie = createVideo("data/flyboard.mp4");
}

function setup() {
  createCanvas(640, 360);
  movie.size(width, height);
  movie.hide();
  // movie.play();
}

function draw() {
  image(movie, 0, 0);

  // scrub
  if (movie.duration() > 0) {
    let t = map(mouseX, 0, width, 0, movie.duration());
    movie.time(t);
  }

  // display the current movie time
  stroke(0);
  strokeWeight(3);
  fill(255);
  textSize(40);
  textAlign(LEFT, BOTTOM);
  text(movie.time(), 10, height - 10);
}
