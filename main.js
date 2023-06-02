function preload() {
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(56,46,50,50);
  circle(100,300,40);
  rect(300,20,40,300)
}

function take_snapshot(){    
save('student_name.png');
}


